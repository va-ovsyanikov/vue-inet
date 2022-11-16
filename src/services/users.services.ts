import type { IUser } from '@/types/types';
import {request} from './generic.services';

export const userFetchAll = ():Promise<Array<IUser>> => request('get', 'users')
export const userFetchOne = (id:string):Promise<Array<IUser>> => request('get', `users/${id}`)