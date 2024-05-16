export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  return Response.json(
    { message: "hello world" },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
