import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.magx.lol/info/view/fundata', {
      next: { revalidate: 5 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}