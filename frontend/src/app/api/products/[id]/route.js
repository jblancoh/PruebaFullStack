import { NextResponse } from "next/server"
import { cookies } from "next/headers";

export async function GET(request, { params }) {
  const { id } = params
  const cookieStore = cookies();
  const { value } = cookieStore.get('Token')
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/v1/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${value}`
      }
    })
    const data = await response.json()
    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: data.statusCode })
    }
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}