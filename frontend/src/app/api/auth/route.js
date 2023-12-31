import { NextResponse } from "next/server"
import { cookies } from "next/headers";

export async function POST (req) {
  const res = await req.json();
  const cookieStore = cookies();

  const { email, password } = res;
  const user = {
    email,
    password
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: data.statusCode });
    }
    
    // set cookie token
    let responseNext = NextResponse.next()
    const { token, ...dataRest } = data
    
    cookieStore.set('Token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
    
    return NextResponse.json({ data: dataRest }, { status: dataRest.statusCode });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}