import type { IUser } from '@/types/types'
import axios from 'axios'

const baseURL = 'http://localhost:3001'

const api = axios.create({
    baseURL,
})

export const request = async (
    method: any,
    url?: string,
    data?: any
): Promise<Array<IUser>> => {
    const response = await api({ method: method, url: `/${url}`, data })
    return response.data
}
