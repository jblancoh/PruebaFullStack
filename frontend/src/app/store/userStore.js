import { create } from 'zustand'

export const userStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))

const setUser = userStore.getState().setUser;
const logout = userStore.getState().logout;

export { setUser, logout }