import { create } from 'zustand'

export const alertStore = create((set) => ({
  error: {
    message: null,
    type: null
  },
  setError: (error) => set({ error }),
}))

const setError = alertStore.getState().setError;

export { setError }