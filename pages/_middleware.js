import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log(`${request.method} - ${request.url}`);

  return NextResponse.next();
}
