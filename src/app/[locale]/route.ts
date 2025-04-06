import { NextRequest } from 'next/server';

export const dynamic = 'force-static';

// This generates all the static routes at build time
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'he' },
    { locale: 'favicon.ico' }
  ];
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  // This file is needed to make the dynamic segment [locale] work
  const { locale } = await params;
  
  // Special handling for favicon.ico
  if (locale === 'favicon.ico') {
    // Redirect to the actual favicon in the public directory
    return new Response(null, {
      status: 307, // Temporary redirect
      headers: {
        'Location': '/favicon.ico'
      }
    });
  }
  
  // Regular locale handling
  return new Response(null, {
    status: 200,
  });
} 