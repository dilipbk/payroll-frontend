export type Customer = {
    id: string | number
    name: string
    firstName: string
    lastName: string
    email: string
    img?: string
    role?: string
    lastOnline?: number
    status?: string
    totalSpending: number
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
