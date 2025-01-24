import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from "../auth/[...nextauth]/route"

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;

  const data = await req.json();
  data.age = Number(data.age);

  const user = await prisma.user.update({
    where: {
      email: currentUserEmail,
    },
    data,
  });

  return NextResponse.json({
    "user": {
        "name": "VinBaz",
        "email": null,
        "image": "https://avatars.githubusercontent.com/u/67991028?v=4"
    },
    "expires": "2025-02-22T20:29:12.244Z"
});
}