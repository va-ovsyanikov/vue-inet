export interface IUser {
    id: number
    avatar: string
    title: string
    subtitle: string
    country: string
    score: string
    address: {
        city: string
        description: string
    }
}
