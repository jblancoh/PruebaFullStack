import { NextResponse } from "next/server"
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const { value } = cookieStore.get('Token')
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/v1/ine`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${value}`
      }
    })
    
    const responseData = await response.json()
    if (responseData.error) {
      return NextResponse.json({ error: responseData.error }, { status: responseData.statusCode })
    }
    return NextResponse.json(responseData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}