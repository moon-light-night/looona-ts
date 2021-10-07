export type TodoItem = {
    id: number,
    name: string,
    completed: boolean
}

export type User = {
    username: string,
    password: string
}

export type State = {
    loading: boolean
}

export const state: State = {
    loading: false
}