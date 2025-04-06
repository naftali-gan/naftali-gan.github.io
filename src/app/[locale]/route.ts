import { NextRequest } from 'next/server';

export function GET(
  request: NextRequest,
  { params }: { params: { locale: string } }
) {
  // This file is needed to make the dynamic segment [locale] work
  // The actual routing logic is handled by Next.js
  return new Response(null, {
    status: 200,
  });
}

export const dynamic = 'force-dynamic'; 