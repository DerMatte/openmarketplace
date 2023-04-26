import Image from "next/image";

import prisma from "@/lib/prisma";
import Link from "next/link";
import NewListing from "./NewListing";

export default async function Home() {
  const allListings = await prisma.listing.findMany({});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Hello World</h1>
      <div className="pt-16 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {allListings.map((l) => (
            <a key={l.id} href={`/l/${l.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                {l.image && (
                  <Image
                    src={l.image}
                    width={800}
                    height={800}
                    alt={l.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                )}
              </div>
              <h3 className="mt-4 text-sm text-gray-300">{l.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-100">
                {l.price ? `$${l.price}` : "Free"}
              </p>
            </a>
          ))}
        </div>
      </div>

      <NewListing />
    </main>
  );
}
