"use client";

// create a new listing using a form

import { useState } from "react";

export default function NewListing() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch("/api/listing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        image,
        description,
      }),
    });

    const json = await res.json();

    if (!res.ok) throw Error(json.message);

    alert("Success!");
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-300 mb-8">
          Write a few sentences about your item.
        </p>
      </div>

      <button
        type="submit"
        className="rounded-md float-right bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Create new Listing
      </button>
    </form>
  );
}
