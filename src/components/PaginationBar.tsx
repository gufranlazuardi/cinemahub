import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (direction: "prev" | "next") => void;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <div className="flex justify-center mt-8 gap-6">
      <button
        onClick={() => handlePageChange("prev")}
        disabled={currentPage === 1}
        className="hover:bg-gray-200 transition-colors duration-300 px-2 py-2 rounded-md"
      >
        <div className="flex justify-between gap-2">
          <ChevronLeft />
          <p>Previous</p>
        </div>
      </button>
      <button
        onClick={() => handlePageChange("next")}
        disabled={currentPage === totalPages}
        className="hover:bg-gray-200 transition-colors duration-300 px-2 py-2 rounded-md"
      >
        <div className="flex justify-between gap-2">
          <p>Next</p>
          <ChevronRight />
        </div>
      </button>
    </div>
  );
};

export default PaginationBar;
