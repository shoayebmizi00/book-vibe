import React from "react";
import bannerImage from "../../assets/hero_img.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-50 via-white to-purple-100 px-6 py-10 md:px-12 lg:px-16 lg:py-16">

        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative z-10 flex flex-col-reverse items-center justify-between gap-10 md:flex-row">

          {/* Left Content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
              📚 Discover Your Next Read
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Books to{" "}
              <span className="text-indigo-600">
                Freshen Up
              </span>
              <br />
              Your Bookshelf
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
              Explore amazing books, discover new stories, and find your next
              favorite read. Your perfect book is just one click away.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <button className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl">
                View Books →
              </button>

              <button className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition duration-300 hover:border-indigo-400 hover:text-indigo-600">
                Explore More
              </button>
            </div>

            {/* Small Stats */}
            <div className="mt-8 flex items-center justify-center gap-8 md:justify-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">1K+</h3>
                <p className="text-sm text-gray-500">Books</p>
              </div>

              <div className="h-10 w-px bg-gray-300" />

              <div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-sm text-gray-500">Readers</p>
              </div>

              <div className="h-10 w-px bg-gray-300" />

              <div>
                <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                <p className="text-sm text-gray-500">Categories</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full md:w-1/2">
            <div className="relative mx-auto max-w-md">
              
              {/* Image background */}
              <div className="absolute inset-0 rotate-6 rounded-3xl bg-indigo-200" />

              <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">
                <Image
                  src={bannerImage}
                  alt="Books on a bookshelf"
                  width={600}
                  height={500}
                  className="h-auto w-full rounded-2xl object-cover"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-sm text-gray-500">⭐ Readers Choice</p>
                <p className="font-bold text-gray-900">
                  Find your next book
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;