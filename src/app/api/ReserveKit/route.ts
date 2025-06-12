export async function POST(request: Request) {
  return new Response(request.body, {
    status: 200 });
}