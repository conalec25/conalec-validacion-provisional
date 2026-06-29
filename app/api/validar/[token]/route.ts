import { NextResponse } from "next/server";

type RouteProps = {
  params: {
    token: string;
  };
};

export async function GET(_request: Request, { params }: RouteProps) {
  const token = params.token;

  return NextResponse.json({
    estado: "AUTORIZADA",
    provisional: true,
    mensaje: "Documento corporativo verificado correctamente.",
    tokenRecibido: token,
  });
}
