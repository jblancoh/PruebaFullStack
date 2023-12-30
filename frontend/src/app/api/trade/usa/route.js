import { NextResponse } from "next/server"
import { cookies } from "next/headers";

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const cookieStore = cookies();
  const { value } = cookieStore.get('Token')
  const year = searchParams.get('year') || ''
  const top = searchParams.get('top') || 10
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/v1/employment-by-location?${top ? `top=${top}` : ''}${year ? `&year=${year}` : ''}`,{
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
    
    const options = []
    const series = []
    
    await responseData.forEach(item => {
      options.push(item.state)
      series.push(item.totalPopulation)
    })
    
    const json = {
      options,
      series
    }
    
    
    return NextResponse.json(json, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}