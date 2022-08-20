import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from 'source/types/user';
import create from 'zustand';
import {persist} from 'zustand/middleware';

export type UserUserState = {
  user: User;
};

export type UseUserActions = {
  setUser(user: User): void;
  logout(): void;
};

export type UserUser = UserUserState & UseUserActions;

export const INITIAL_STATE: User = {
  name: '',
  age: '',
  profileImage: '',
  isLogged: false,
};

export const useUser = create<UserUser, any>(
  persist(
    set => ({
      user: INITIAL_STATE,
      setUser: (user: User) => set({user}),
      logout: () => set({user: INITIAL_STATE}),
    }),
    {
      name: 'user',
      getStorage: () => AsyncStorage,
    },
  ),
);
