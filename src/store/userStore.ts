import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, UserState } from '@/@types/user'

type UserAction = {
    setUsers: (payload: User[]) => void
}

type InitialStateType = UserState

const initialUserState: InitialStateType = {
    allUsers: [],
    loaders: {
        usersLoading: false,
    },
    errors: {
        allUsers: null,
    },
}

export const useThemeStore = create<InitialStateType & UserAction>()(
    persist(
        (set) => ({
            ...initialUserState,
            setUsers: (payload) => set(() => ({ allUsers: payload })),
        }),
        {
            name: 'theme',
        },
    ),
)
