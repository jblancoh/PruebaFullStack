import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/v1/products`)
    const data = await response.json()
    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: data.statusCode })
    }
    console.log("🚀 ~ file: route.js:11 ~ GET ~ data:", data)
    return NextResponse.json({ data: data })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
  
}