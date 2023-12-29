import { NextResponse } from "next/server"

export async function POST (req, res) {
  const { email, password } = req.body
  const user = {
    email,
    password
  }
  console.log("🚀 ~ file: route.js:11 ~ POST ~ process.env.PUBLIC_URL_API:", process.env.PUBLIC_URL_API)
  const response = await fetch(`${process.env.PUBLIC_URL_API}/auth/login`, {
    method: "POST",
    body: JSON.stringify(user)
  })
  const data = await response.json()
  
  return NextResponse.redirect("/home", {
    status: 302,
    headers: {
      "Set-Cookie": `token=${data.token}; path=/; HttpOnly`
    }
  })
}