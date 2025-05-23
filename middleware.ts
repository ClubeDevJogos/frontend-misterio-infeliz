import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const blockedDirs = {
    1: [
      "/game/b1",
      "/game/b1/intoB1",
      "/game/biblioteca",
      "/game/biblioteca/intoBiblioteca",
      "/game/secretRoom",
      "/game/secretRoom/intoSecretRoom"
    ],
    2: [
      "/game/firstGate",
      "/game/secondGate",
      "/game/secretRoom",
      "/game/secretRoom/intoSecretRoom"
    ],
    3: [
      "/game/firstGate",
      "/game/secondGate",
      "/game/secretRoom/intoSecretRoom"
    ],
    4: [
      "/game/firstGate",
      "/game/secondGate",
      "/game/b1",
      "/game/b1/intoB1",
      "/game/biblioteca",
      "/game/biblioteca/intoBiblioteca"
    ]
  }

  //Gambiearra para pegar o token e middleware utilizar
  const authToken = "Bearer " + request.cookies.get("token")?.value

  const response = await fetch('http://clubedevjogos.com.br:8080/missionUser', {
    method: "GET",
    headers: {
      "Accept": "*/*",
      "authorization": authToken
    }
  })
  const data = await response.text()

  switch (data) {
    case "1":
      if (blockedDirs[1].includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/game', request.url))
      }
      break;
    case "2":
      if (blockedDirs[2].includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/game', request.url))
      }
      break;
    case "3":
      if (blockedDirs[3].includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/game', request.url))
      }
      break;
    case "4":
      if (blockedDirs[4].includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/game', request.url))
      }
      break;
  }
}

export const config = {
  matcher: '/game/:path*',
}