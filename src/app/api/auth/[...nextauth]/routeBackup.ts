export async function GET(request: Request) {
    const data = { id: 1, name: "John" }
    return Response.json({data})
}