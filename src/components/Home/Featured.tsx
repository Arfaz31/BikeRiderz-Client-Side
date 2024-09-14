import { useGetAllBikesQuery } from "@/redux/api/BikeApi/bikeApi";
import Container from "../Shared/Container";
import { TBike } from "@/types/Types";
import FeaturedProductCard from "./FeaturedProductCard";
import Lottie from "lottie-react";
import bikelottie from "@/assets/lottie/bikelottie.json";
const Featured = () => {
  const { data, isLoading } = useGetAllBikesQuery(undefined);
  console.log(data);
  return (
    <div className="mb-28">
      <Container>
        <h1 className="xl:text-4xl md:text-3xl text-2xl text-center font-bold mb-6">
          Featured & Top Rated Bikes
        </h1>
        <p className="text-gray-500 text-base md:w-[600px] w-full text-center mx-auto mb-14">
          Here's a list of some of the most popular Bikes globally, based on
          sales and customer preferences
        </p>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:gap-5 md:grid-cols-2 grid-cols-1 gap-8  w-full">
          {isLoading
            ? [...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-col w-[305px] h-[480px] relative group   shadow-xl border-gray-300 hover:shadow-xl mx-auto"
                >
                  <div className="flex items-center justify-center overflow-hidden relative w-full h-full">
                    <Lottie animationData={bikelottie} loop={true} />
                  </div>
                </div>
              ))
            : data?.data
                ?.slice(0, 8)
                .map((item: TBike) => (
                  <FeaturedProductCard key={item.id} item={item} />
                ))}
        </div>
      </Container>
    </div>
  );
};

export default Featured;
