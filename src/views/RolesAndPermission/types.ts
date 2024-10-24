export type User = {
    id: string
    first_name: string
    last_name: string
    username: string
    email: string
    role: string
    status: string
    last_login: string
}

export type TableQueries = {
    total?: number
    pageIndex?: number
    pageSize?: number
    query?: string
    sort?: {
        order: 'asc' | 'desc' | ''
        key: string | number
    }
}
