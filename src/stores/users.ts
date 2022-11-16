import { defineStore } from 'pinia'
import type { IUser } from '../types/types';
import { userFetchAll, userFetchOne } from '../services/users.services';

export const userStore = defineStore('user', {
    state: () => ({
        users: [] as IUser[],
        user: {} as IUser,
        country: '',
        score: ''
    }),
    actions: {
        async fetchUsers() {
            const data: any = await userFetchAll()
            this.users = data;
        },
        async fetchUser(id:string) {
            console.log(id);
            const data: any = await userFetchOne(id)
            this.user = data;
        },
        async setCountry(country: string) {
            this.country = country;
        },
        async setScore(score: string) {
            this.score = score;
        }
    },
    getters: {
        getUsers: (state): Array<IUser> => {
            if (state.country !== "All") {
                if (state.score !== "All") {
                    return state.users.filter(item => item.country === state.country).filter(el => el.score === state.score)
                } else {
                    return state.users.filter(item => item.country === state.country)
                }
            } else {
                return state.users.filter(el => {
                    if (state.score == 'All') {
                        return state.users
                    } else {
                        return el.score === state.score
                    }
                })
            }
        },
        getUser: (state):IUser => state.user
    }
})
