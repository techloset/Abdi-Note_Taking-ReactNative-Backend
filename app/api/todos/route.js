import { NextResponse } from "next/server";

const DATA_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const res = await fetch(DATA_URL);
  const todos = await res.json();
  return NextResponse.json(todos);
}
