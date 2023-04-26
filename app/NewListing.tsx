"use client";

// create a new listing using a form

import { useState } from "react";

export default function NewListing() {
  const [success, setSuccess] = useState(false);

  // type e correctly
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    const target = e.target as HTMLFormElement;

    const res = await fetch("/api/listing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: (target.title as unknown as HTMLInputElement).value,
        price: (target.price as HTMLInputElement).value,
        image: (target.image as HTMLInputElement).value,
        description: (target.description as HTMLInputElement).value,
      }),
    });

    const json = await res.json();
    console.log(json);

    if (!res.ok) throw Error(json.message);

    alert("Success!");
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit} className="pt-32">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3 mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-100"
          >
            Listing title
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="title"
              id="title"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-100"
          >
            Price
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="price"
              id="price"
              // convert to number
              // onChange={(e) => setPrice(parseFloat(e.target.value))}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-3 mb-2">
        <label
          htmlFor="image"
          className="block text-sm font-medium leading-6 text-gray-100"
        >
          Image Link
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="image"
            id="image"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="col-span-full">
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-100"
        >
          Description
        </label>
        <div className="mt-2">
          <textarea
            id="description"
            name="description"
            rows={3}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-300 mb-8">
          Write a few sentences about your item.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between ">
        {success && (
          <p className="text-green-500 mb-4 md:mb-0 text-sm font-semibold">
            Listing created successfully!
          </p>
        )}
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create new Listing
        </button>
      </div>
    </form>
  );
}
