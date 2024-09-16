/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGetAllBikesQuery } from "@/redux/api/BikeApi/bikeApi";
import { SlidersHorizontal, Star, X } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const FilterModal = () => {
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
    <div>
      <div className="">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="text-white bg-[#ff950a] hover:bg-[#ff950a]">
              <SlidersHorizontal />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="overflow-y-scroll p-0 pt-8">
            <SheetHeader>
              <SheetTitle>
                {" "}
                <span className="   sm:text-2xl text-xl  font-bold pl-5">
                  BIKE<span className="text-[#ff950a]">RIDERZ</span>
                </span>
              </SheetTitle>
            </SheetHeader>
            <div className="bg-[#F5F8FA] mt-4 ">
              <div className="  px-5 pt-12">
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
                          {availability === "true"
                            ? "In Stock"
                            : "Out of Stock"}
                          <span
                            className="ml-2 cursor-pointer"
                            onClick={() => setAvailability(null)}
                          >
                            <X />
                          </span>
                        </div>
                      )}
                      {/* {selectedOption && (
                    <div className="bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 flex items-center justify-between">
                      {selectedOption.label}
                      <span
                        className="ml-2 cursor-pointer"
                        onClick={() => setSelectedOption(null)}
                      >
                        <X />
                      </span>
                    </div>
                  )} */}
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

              <SheetClose asChild></SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default FilterModal;
