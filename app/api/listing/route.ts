import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import slugify from "slugify";

export async function GET() {
  const listings = await prisma.listing.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: 10,
  });
  return NextResponse.json(listings);
}

export async function POST(request: Request) {
  const formData = await request.json();
  console.log("formdata:", formData);

  if (!formData.title || !formData.description || !formData.price) {
    return NextResponse.error();
  }

  const res = await prisma.listing.create({
    data: {
      title: formData.title,
      slug: slugify(formData.title, { lower: true }),
      description: formData.description,
      price: parseFloat(formData.price),
      image: formData.image,
    },
  });

  console.log("res:", res);
  return NextResponse.json(res, formData);
}
