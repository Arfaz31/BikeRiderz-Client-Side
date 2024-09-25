import Lottie from "lottie-react";
import spinner from "@/assets/lottie/spinner.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TBike } from "@/types/Types";
import { FilePenLine, Trash2 } from "lucide-react";

const ManageBikesTable = ({
  bikes,
  isLoading,
}: {
  bikes: TBike[];
  isLoading: boolean;
}) => {
  return (
    <div className="xl:w-full w-[850px] ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-lg">Image</TableHead>
            <TableHead className="font-bold text-lg">Name</TableHead>
            <TableHead className="font-bold text-lg">Brand</TableHead>
            <TableHead className="font-bold text-lg">Model</TableHead>
            <TableHead className="font-bold text-lg">PricePerHour</TableHead>
            <TableHead className="font-bold text-lg">CC</TableHead>
            <TableHead className="font-bold text-lg">Power</TableHead>
            <TableHead className="font-bold text-lg">Availability</TableHead>
            <TableHead className="font-bold text-lg">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center pt-20">
                <div className="  flex items-center justify-center w-full h-14 ">
                  <Lottie animationData={spinner} loop={true} />
                </div>
              </TableCell>
            </TableRow>
          ) : (
            bikes?.map((bike: TBike) => (
              <TableRow key={bike._id}>
                <TableCell>
                  <img
                    src={bike?.image[0]}
                    className="w-12 h-12 rounded-xl"
                    alt=""
                  />
                </TableCell>
                <TableCell>{bike.name}</TableCell>
                <TableCell>{bike.brand}</TableCell>
                <TableCell>{bike.model}</TableCell>
                <TableCell className="text-center">
                  {bike.pricePerHour}
                </TableCell>
                <TableCell>{bike.cc}Cc</TableCell>
                <TableCell className="text-center">{bike.power}BHP</TableCell>
                <TableCell>
                  {" "}
                  {bike?.isAvailable ? "Available" : "On Rent"}
                </TableCell>

                <TableCell className="flex items-center gap-2">
                  <button className="flex  items-center justify-center  bg-[#24eb45]   p-3 relative group overflow-hidden">
                    <FilePenLine className="text-white w-6 h-6 z-10" />
                    <span className="absolute inset-0 bg-[#14b12e] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                  </button>
                  <button className="flex  items-center justify-center  bg-[#ff3434] text-white  p-3 relative group overflow-hidden">
                    <Trash2 className="text-white w-6 h-6 z-10" />
                    <span className="absolute inset-0 bg-[#ff1717] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageBikesTable;
