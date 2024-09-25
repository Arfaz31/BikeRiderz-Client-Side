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
import UpdateBike from "./UpdateBike";
import { Trash2 } from "lucide-react";

const ManageBikesTable = ({
  bikes,
  isLoading,
}: {
  bikes: TBike[];
  isLoading: boolean;
}) => {
  return (
    <div className="xl:w-full w-[900px] ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-base">Image</TableHead>
            <TableHead className="font-semibold text-base">Name</TableHead>
            <TableHead className="font-semibold text-base">Brand</TableHead>
            <TableHead className="font-semibold text-base">Model</TableHead>
            <TableHead className="font-semibold text-base">
              PricePerHour
            </TableHead>
            <TableHead className="font-semibold text-base">CC</TableHead>
            <TableHead className="font-semibold text-base">Power</TableHead>
            <TableHead className="font-semibold text-base">
              Availability
            </TableHead>
            <TableHead className="font-semibold text-base">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={9} className="text-center pt-20">
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
                  <UpdateBike bike={bike} />
                  <button className="flex  items-center justify-center rounded-md  bg-[#ff3434] text-white  p-3 relative group overflow-hidden">
                    <Trash2 className="text-white w-5 h-5 z-10" />
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
