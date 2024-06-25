import React from "react";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import MostPopularRecipes from "../../components/card/popular/PopularRecipes";
import Loading from "../../components/loading/Loading";

export const Home = () => {

  return (
    <div className="grid grid-rows-3 grid-cols-6 h-full">
      <nav className="col-span-1 row-span-3">
      </nav>
      <main className="col-span-5 row-span-3 overflow-auto ">
        <section className="px-1 mb-8">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl text-white">Most Popular</h3>
            </div>
            <div>
              <Button text="See all" />
            </div>
          </div>
          <div className="container mx-auto p-2">
            <div className="flex flex-wrap gap-4">
              <MostPopularRecipes />
            </div>
          </div>
        </section>
        <section className="px-1 mb-8">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl text-white">Your Favorite</h3>
            </div>
            <div>
              <Button text="See all" />
            </div>
          </div>
          <div className="container mx-auto p-2">
            <div className="flex flex-wrap gap-4">
              <Card
                title="Hello World"
                image="https://picsum.photos/129.webp?random=6"
              />
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
        <section className="px-1 mb-8">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl text-white">Made for You</h3>
            </div>
            <div>
              <Button text="See all" />
            </div>
          </div>
          <div className="container mx-auto p-2">
            <div className="flex flex-wrap gap-4">
              <Card
                title="Hello World"
                image="https://picsum.photos/129.webp?random=6"
              />
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

export default Home;
