import React from "react";
import "./homeWeb.css";
import Button from "../Button";
import SideBar from "../sidebar/SideBar";
import Card from "../card/Card";

export const HomeWeb = () => {
  return (
    <div class="grid grid-rows-3 grid-cols-6 h-full">
      <nav class="col-span-1 row-span-3">
        <SideBar />
      </nav>
      <main class="col-span-5 row-span-3 overflow-auto">
        <section class="px-6 grid gap-6 mb-8">
          <div class="flex items-center">
            <div class="flex-1">
              <h3 class="text-2xl text-white">
                <a
                  class="border-b border-transparent hover:border-white"
                  href=""
                >
                  Most Popular
                </a>
              </h3>
            </div>
            <div>
              <Button text="See all" />
            </div>
          </div>
          <div class="grid grid-cols-6 gap-4">
            <div class="bg-gray-200 rounded-lg p-5">
              <div class="relative pt-full mb-4">
                <img
                  class="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=6"
                  alt=""
                />
              </div>
              <div class="text-sm text-white text-line-clamp-1 mb-1 block">
                Preparation For a Journey
              </div>
              <div class="relative pb-5">
                <span class="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
            <Card />
          </div>
        </section>
        <section class="px-6 grid gap-6 mb-8">
          <div class="flex items-center">
            <div class="flex-1">
              <h3 class="text-2xl text-white">Your favorite</h3>
            </div>
          </div>
          <div class="grid grid-cols-6 gap-4">
            <div class="bg-gray-200 rounded-lg p-5">
              <div class="relative pt-full mb-4">
                <img
                  class="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=6"
                  alt=""
                />
              </div>
              <div class="text-sm text-white text-line-clamp-1 mb-1 block">
                Preparation For a Journey
              </div>
              <div class="relative pb-5">
                <span class="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
          </div>
        </section>
        <section class="px-6 grid gap-6 mb-8">
          <div class="flex items-center">
            <div class="flex-1">
              <h3 class="text-2xl text-white">
                <a
                  class="border-b border-transparent hover:border-white"
                  href=""
                >
                  Made for You
                </a>
              </h3>
            </div>
            <div>
              <Button text="See all" />
            </div>
          </div>
          <div class="grid grid-cols-6 gap-4">
            <div class="bg-gray-200 rounded-lg p-5">
              <div class="relative pt-full mb-4">
                <img
                  class="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=6"
                  alt=""
                />
              </div>
              <div class="text-sm text-white text-line-clamp-1 mb-1 block">
                Preparation For a Journey
              </div>
              <div class="relative pb-5">
                <span class="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeWeb;
