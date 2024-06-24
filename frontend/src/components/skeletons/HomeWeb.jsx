import React from "react";
import "./HomeWeb.css";
import SideBar from "../sidebar/SideBar";
import MostPopularRecipes from "../card/popular/PopularRecipes";
import Card from "../card/Card";
import Button from "../button/Button";
import Heart from "../button/Heart";

export const HomeWeb = () => {
  return (
    <div class="grid grid-rows-3 grid-cols-6 h-full">
      <nav class="col-span-1 row-span-3">
        <SideBar />
      </nav>
      <main class="col-span-5 row-span-3 overflow-auto">
        <section class="px-1 grid gap-2 mb-8">
          <div class="flex items-center">
            <div class="flex-1">
              <h3 class="text-2xl text-white">Most Popular</h3>
            </div>
            <div>
              <Button text="See all" />
            </div>
          </div>
          <div class="container mx-auto p-2">
            <div class="grid grid-cols-4 gap-1">
              <Card
                title="Hello World"
                image="https://picsum.photos/129.webp?random=6"
              />
              <Card
                title="Hello World"
                image="https://picsum.photos/129.webp?random=6"
              />
            </div>
          </div>
        </section>
        <section class="px-1 grid gap-2 mb-8">
          <div class="flex items-center">
            <div class="flex-1">
              <h3 class="text-2xl text-white">Your Favorite</h3>
            </div>
            <div>
              <Button text="See all" />
            </div>
          </div>
          <div class="container mx-auto p-2">
            <div class="grid grid-cols-4 gap-1">
              <Card
                title="Hello World"
                image="https://picsum.photos/129.webp?random=6"
              />
              <Card
                title="Hello World"
                image="https://picsum.photos/129.webp?random=6"
              />
            </div>
          </div>
        </section>
        <section class="px-1 grid gap-2 mb-8">
          <div class="flex items-center">
            <div class="flex-1">
              <h3 class="text-2xl text-white">Made for You</h3>
            </div>
            <div>
              <Button text="See all" />
            </div>
          </div>
          <div class="container mx-auto p-2">
            <div class="grid grid-cols-4 gap-1">
              <Card
                title="Hello World"
                image="https://picsum.photos/129.webp?random=6"
              />
              <Card
                title="Hello World"
                image="https://picsum.photos/129.webp?random=6"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeWeb;
