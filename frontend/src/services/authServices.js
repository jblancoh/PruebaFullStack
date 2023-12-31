import { setUser } from "@/app/store/userStore"

export const LogoutServcice = (router) => {
  const response = fetch("/api/cookies", {
    method: "DELETE"
  })
  router.replace("/login")
  setUser(null)
  return response
}
  