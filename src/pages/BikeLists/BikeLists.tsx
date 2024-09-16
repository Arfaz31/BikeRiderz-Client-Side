/* eslint-disable @typescript-eslint/no-explicit-any */

import { format } from "date-fns";
import { Calendar as CalendarIcon, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useForm } from "react-hook-form";
import bikes from "@/assets/blog/topBike.jpg";
import { useGetAllBikesQuery } from "@/redux/api/BikeApi/bikeApi";
import { LayoutGrid, List, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Lottie from "lottie-react";
import bikelottie from "@/assets/lottie/bikelottie.json";
import { Star, Heart } from "lucide-react";
import Select from "react-select";
import Container from "@/components/Shared/Container";
import { useRef, useState } from "react";
import { TBike } from "@/types/Types";
import FeaturedProductCard from "@/components/Home/FeaturedProductCard";
import FilterModal from "./FilterModal";

const options: Array<{ value: string; label: string }> = [
  { value: "price-low-high", label: "Lowest to Highest" },
  { value: "price-high-low", label: "Highest to Lowest" },
];

const BikeLists = () => {
  const [date, setDate] = useState<Date>();
  const [isGridLayout, setIsGridLayout] = useState(true);
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [availability, setAvailability] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit } = useForm();
  const { data, isLoading } = useGetAllBikesQuery(undefined);
  console.log(data);
  const onSubmit = (data: any) => console.log(data);

  const tags = ["Bike", "Jogging", "Events", "Workouts", "Training", "Health"];
  const brands = [
    "Yamaha",
    "Suzuki",
    "KTM",
    "Kawasaki",
    "Enfield",
    "Honda",
    "TVS",
  ];
  return (
    <div className="mb-32">
      <div className="relative mb-20">
        <div>
          <img
            className="object-cover md:h-[500px] h-[400px] w-full"
            src={bikes}
            alt=""
          />
          <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
          <div className="flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-[#ff950a] w-16 h-1"></span>
            <h1 className="lg:text-4xl text-2xl text-white font-bold text-center">
              ALL BIKE LISTS
            </h1>
            <span className="bg-[#ff950a] w-16 h-1"></span>
          </div>

          <div className="lg:w-[850px] md:w-[600px] w-full left-1/2 transform -translate-x-1/2  bg-white  md:h-[110px] h-[160px]  shadow-xl rounded-md  absolute -bottom-14">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex  md:flex-row flex-col  items-center justify-between  md:px-4 px-2  py-7 md:gap-0 gap-5">
                <div className="flex  items-center justify-around  w-full">
                  <div className="">
                    <select
                      {...register("brand")}
                      className="focus:outline-none border border-gray-200 xl:w-[260px] lg:w-[200px] md:w-[210px] sm:w-[150px] w-[110px] h-12  px-3 xl:text-lg md:text-base sm:text-sm text-xs"
                    >
                      <option value="Yamaha">Yamaha</option>
                      <option value="Suzuki">Suzuki</option>
                      <option value="KTM">KTM</option>
                      <option value="Kawasaki">Kawasaki</option>
                      <option value="Enfield">Enfield</option>
                      <option value="Honda">Honda</option>
                      <option value="TVS ">TVS </option>
                    </select>
                  </div>

                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "focus:outline-none xl:w-[260px] lg:w-[220px] md:w-[210px] sm:w-[190px] w-[150px] h-12  px-3 justify-start text-left font-normal xl:text-lg sm:text-sm text-xs",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <button className="flex sm:text-lg text-base items-center justify-center gap-2 bg-[#ffa633] text-white md:w-[140px] w-full h-12 p-3 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    <Search />
                    <span>Search</span>
                  </span>
                  <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Container>
        <div className="grid md:grid-cols-12 grid-rows-1 lg:gap-12 md:gap-10 gap-36 xl:px-0  sm:px-3 px-0 pt-12">
          <div className=" lg:block hidden lg:col-span-3 md:col-span-12 row-span-1 lg:order-1 order-2 lg:pt-0 md:pt-20 pt-0">
            <p className="xl:text-base lg:text-sm text-base font-bold pb-2">
              What are you looking for
            </p>
            <div className="flex w-full max-w-sm items-center ">
              <input
                type="text"
                placeholder="Search"
                ref={searchInputRef}
                className="p-2 w-full border border-[#ff950a] rounded-l focus:outline-none focus:border-[#ff950a]"
              />
              <button
                className="bg-[#ff950a] px-4 py-2 h-full text-white rounded-r border border-[#ff950a] -ml-px"
                type="submit"
                // onClick={handleSearchClick}
              >
                Search
              </button>
            </div>

            <div>
              <p className="text-lg font-bold mt-16 mb-1">FILTER BY</p>
              <div className="flex items-center">
                <span className="bg-[#ff950a] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>

              <div>
                <div className="mt-10 mb-5">
                  <button className="flex sm:text-lg text-base items-center justify-center gap-2 bg-[#ffa633] text-white md:w-[140px] w-full h-12 p-3 relative overflow-hidden group">
                    <span className="z-10">Clear Filter</span>
                    <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                  </button>
                </div>
                <div className="flex flex-col gap-2 my-5">
                  {availability !== null && (
                    <div className="bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 flex items-center justify-between">
                      Availability:{" "}
                      {availability === "true" ? "In Stock" : "Out of Stock"}
                      <span
                        className="ml-2 cursor-pointer"
                        onClick={() => setAvailability(null)}
                      >
                        <X />
                      </span>
                    </div>
                  )}
                  {selectedOption && (
                    <div className="bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 flex items-center justify-between">
                      {selectedOption.label}
                      <span
                        className="ml-2 cursor-pointer"
                        onClick={() => setSelectedOption(null)}
                      >
                        <X />
                      </span>
                    </div>
                  )}
                  {(minPrice !== null || maxPrice !== null) && (
                    <div className="bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 flex items-center justify-between">
                      Price: ${minPrice ?? 0} - ${maxPrice ?? 1000}
                      <span
                        className="ml-2 cursor-pointer"
                        onClick={() => {
                          setMinPrice(null);
                          setMaxPrice(null);
                        }}
                      >
                        <X />
                      </span>
                    </div>
                  )}
                  {brand !== null && (
                    <div className="bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 flex items-center justify-between">
                      Brand: {brand}
                      <span
                        className="ml-2 cursor-pointer"
                        // onClick={() => setBrand(null)}
                      >
                        <X />
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="bg-[#ff950a] w-24 h-1"></span>
                  <hr className="bg-[#6f7276] w-full" />
                </div>
              </div>

              <div>
                <p className="text-lg font-bold mt-8">Availability</p>
                <div>
                  <RadioGroup
                  // value={availability || ""}
                  // onValueChange={handleAvailabilityChange}
                  >
                    <div className="flex items-center text-base pt-3 space-x-2">
                      <RadioGroupItem value="true" id="r1" />
                      <Label htmlFor="r1">Available</Label>
                    </div>
                    <div className="flex items-center text-base pt-3 space-x-2">
                      <RadioGroupItem value="false" id="r2" />
                      <Label htmlFor="r2">Rented</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold mt-8">Price</p>
                <div className="flex gap-4 items-center pt-3">
                  <div className="flex items-center border border-[#ff950a] rounded p-2">
                    <span className="text-gray-600 mr-2">$</span>
                    <input
                      type="number"
                      placeholder="From"
                      // onChange={handleMinPriceChange}
                      className="focus:outline-none w-full"
                    />
                  </div>
                  <div className="flex items-center border border-[#ff950a] rounded p-2">
                    <span className="text-gray-600 mr-2">$</span>
                    <input
                      type="number"
                      placeholder="To"
                      // onChange={handleMaxPriceChange}
                      className="focus:outline-none w-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-lg font-bold mt-8">Brand</p>
                <div>
                  <RadioGroup
                  // value={brand || ""}
                  // onValueChange={handleBrandChange}
                  >
                    {brands.map((brandName, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm my-2"
                      >
                        <RadioGroupItem value={brandName} id={brandName} />
                        <Label className="text-sm ml-3" htmlFor={brandName}>
                          {brandName}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
              <p className="text-lg font-bold mt-8 ">Rating</p>
              <div>
                <RadioGroup>
                  <div className="flex items-center text-base pt-3 space-x-2">
                    <RadioGroupItem value="one-star" id="r1" />
                    <Label htmlFor="r1" className="flex">
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                    </Label>
                  </div>
                  <div className="flex items-center text-base pt-3 space-x-2">
                    <RadioGroupItem value="two-star" id="r2" />
                    <Label htmlFor="r2" className="flex space-x-1">
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                    </Label>
                  </div>
                  <div className="flex items-center text-base pt-3 space-x-2">
                    <RadioGroupItem value="three-star" id="r2" />
                    <Label htmlFor="r2" className="flex space-x-1">
                      {" "}
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                    </Label>
                  </div>
                  <div className="flex items-center text-base pt-3 space-x-2">
                    <RadioGroupItem value="four-star" id="r2" />
                    <Label htmlFor="r2" className="flex space-x-1">
                      {" "}
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                    </Label>
                  </div>
                  <div className="flex items-center text-base pt-3 space-x-2">
                    <RadioGroupItem value="five-star" id="r2" />
                    <Label htmlFor="r2" className="flex space-x-1">
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                      <Star
                        className="md:size-5 size-[18px]"
                        color="orange"
                        fill="orange"
                      />
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <p className="text-lg font-bold mt-16 mb-1">TAGS</p>
              <div className="flex items-center">
                <span className="bg-[#ff950a] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <div className="mt-7 md:mb-0 mb-10">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 grid-cols-3 gap-3">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="border border-[#d4d5d5] rounded-full hover:bg-[#ff950a] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out"
                    >
                      <p className="text-sm text-center">{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:col-span-9 md:col-span-12 row-span-1 lg:order-2 order-1 overflow-x-hidden xl:pt-8 lg:pt-7 pt-8">
            <div>
              <div className="flex justify-between mb-14">
                <div className="lg:hidden block">
                  <FilterModal />
                </div>
                <div className="form-control md:w-[220px] w-[180px]">
                  <label className="label"></label>
                  <Select
                    value={selectedOption}
                    // onChange={handleSelectChange}
                    options={options}
                    placeholder="Sort By"
                    className="border border-[#ff9914] focus:outline-none focus:border-[#ff950a]"
                  />
                </div>

                <div className="flex justify-between mb-2">
                  <div className="flex md:gap-8 gap-2">
                    <div
                      className={`bg-[#ff950a] text-white p-2 cursor-pointer ${
                        isGridLayout ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setIsGridLayout(true)}
                    >
                      <LayoutGrid />
                    </div>
                    <div
                      className={`bg-[#ff950a] text-white p-2 cursor-pointer ${
                        !isGridLayout ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setIsGridLayout(false)}
                    >
                      <List />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid xl:grid-cols-3  xl:gap-6 lg:gap-8 gap-10 md:grid-cols-2 grid-cols-1   w-full">
                {isLoading
                  ? [...Array(9)].map((_, index) => (
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
                      ?.slice(0, 9)
                      .map((item: TBike) => (
                        <FeaturedProductCard key={item.id} item={item} />
                      ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BikeLists;
