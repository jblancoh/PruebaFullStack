import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const userStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

const setUser = userStore.getState().setUser;
const logout = userStore.getState().logout;

export { setUser, logout }