import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'  
 
export async function middleware(request: NextRequest) {
  const blockedDirs = {
    1: [
      "/game/b1",
      "/game/b2",
      "/game/secretRoom"
    ],
    2: [
      "/game/firstGate",
      "/game/secondGate",
      "/game/secretRoom"
    ]
  }

  //Gambiearra para pegar o token e middleware utilizar
  const authToken = "Bearer " + request.cookies.get("token")?.value

  const response = await fetch('http://clubedevjogos.com.br:4000/missionUser',{
    method: "GET",
    headers: {
      "Accept": "*/*",
      "authorization": authToken
    }
  })
  const data = await response.text()

  switch (data) {
    case "1":
      if(blockedDirs[1].includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/game', request.url))
      }
      break;
    case "2":
      if(blockedDirs[2].includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/game', request.url))
      }
      break;
  }
}

export const config = {
  matcher: '/game/:path*',
}