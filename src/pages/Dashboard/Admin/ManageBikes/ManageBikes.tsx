import CreateBikes from "./CreateBikes";
import { SlidersHorizontal } from "lucide-react";
import ManageBikesTable from "./ManageBikesTable";
import { useGetAllBikesQuery } from "@/redux/api/BikeApi/bikeApi";
import { useState } from "react";
import Paginationpage from "@/components/Shared/Paginationpage";
const ManageBikes = () => {
  // const [brand, setBrand] = useState<string | null>(null);
  // const [isAvailable, setAvailability] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading } = useGetAllBikesQuery({
    page: currentPage,
  });

  const bikes = data?.data?.bikes;

  const totalPages = data?.data?.totalPages || 1;
  const handlePageChange = (newPage: number) => {
    //This function ensures that the page number is within a valid range (between 1 and totalPages).
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="m-10">
      <div className="bg-white shadow-md w-full p-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Inventory Of Bikes</h1>
        <div>
          <CreateBikes />
        </div>
      </div>

      <div>
        <div className="bg-white shadow-md w-full  overflow-x-scroll  relative">
          {/* Header Section */}
          <div className="flex items-center justify-between md:px-8 px-4 py-8 relative">
            <p className="text-2xl font-bold">Bike List</p>
            <button className="flex text-lg items-center justify-center gap-2 bg-[#ffa633] text-white w-[120px] h-11 p-3 relative group overflow-hidden">
              <span className="relative z-10">Filter</span>
              <SlidersHorizontal className="w-5 h-5 z-10" />
              <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
            </button>
          </div>

          {/* User Table Section */}
          <div className="md:px-8 px-4">
            <ManageBikesTable bikes={bikes} isLoading={isLoading} />
          </div>
          <div className="pb-10">
            <Paginationpage
              handlePageChange={handlePageChange}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBikes;
