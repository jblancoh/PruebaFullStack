import { NextResponse } from "next/server"

export async function GET(request) {
  // obtener los parametros de la url
  // con estos parametros se puede hacer una consulta a la base de datos
  // tmb se va a poder paginar
  // tmb se va a poder ordenar
  // tmb se va a poder filtrar
  // tmb se va a poder buscar
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')
  const sort = searchParams.get('sort') || ''
  const filter = searchParams.get('filter') || ''
  const search = searchParams.get('search') || ''
  
  try {
    
    const params = new URLSearchParams({
      page,
      limit,
      sort,
      filter,
      search
    })
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/v1/products?${params.toString()}`)
    
    const responseData = await response.json()
    if (responseData.error) {
      return NextResponse.json({ error: responseData.error }, { status: responseData.statusCode })
    }
    return NextResponse.json(responseData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
  
}