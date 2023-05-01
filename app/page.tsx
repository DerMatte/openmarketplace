import Image from "next/image";

import prisma from "@/lib/prisma";
import Link from "next/link";
import NewListing from "./NewListing";

import { SignIn, SignedIn, SignedOut, auth } from "@clerk/nextjs/app-beta";
import { currentUser } from "@clerk/nextjs/app-beta";
import type { User } from "@clerk/nextjs/dist/api";

// import {
//   ClerkProvider,
//   // SignedIn,
//   // SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/nextjs";

export default async function Home() {
  const allListings = await prisma.listing.findMany({});
  const user: User | null = await currentUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24">
      <h1 className="text-6xl font-bold">Hello World</h1>
      <div className="pt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {allListings.map((l) => (
          <Link key={l.id} href={`/l/${l.id}`} className="group">
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
            <h3 className="mt-4 text-sm dark:text-gray-300">{l.title}</h3>
            <p className="mt-1 text-lg font-medium dark:text-gray-100">
              {l.price ? `$${l.price}` : "Free"}
            </p>
          </Link>
        ))}
      </div>
      <SignedIn>
        {/* Mount the UserButton component */}
        {/* <NewListing user={user} /> */}
        <NewListing />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}

        <Link href="/sign-in" className="">
          Sign in
        </Link>
      </SignedOut>
      {/* <div className="py-8">
        <p className="text-xl text-gray-800">Auth Data:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div> */}
    </main>
  );
}
