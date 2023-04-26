import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import slugify from "slugify";

export async function POST(request: Request) {
  const formData = await request.json();

  try {
    const res = await prisma.listing.create({
      data: {
        title: formData.title,
        slug: slugify(formData.title, { lower: true }),
        description: formData.description,
        price: formData.price,
        image: formData.image,
      },
    });
    return NextResponse.json(res, formData);
  } catch (error) {
    return NextResponse.error();
  }
}
