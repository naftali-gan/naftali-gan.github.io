import { NextRequest } from 'next/server';

export const dynamic = 'force-static';

// This generates all the static routes at build time
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'he' }
  ];
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  // This file is needed to make the dynamic segment [locale] work
  // The actual routing logic is handled by Next.js
  const { locale } = await params;
  return new Response(null, {
    status: 200,
  });
} 