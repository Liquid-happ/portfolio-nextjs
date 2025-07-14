export async function GET() {
  const data = [
    { name: 'Website bán hàng', tech: 'Next.js, MongoDB' },
    { name: 'Giám sát không khí', tech: 'ESP32, BME680' },
  ];
  return Response.json(data);
}
