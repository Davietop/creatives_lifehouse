import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { usePagination, DOTS } from "./usePagination";
// import "./pagination.scss";
const Pagination2 = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="">
      <Pagination
        className={cn("pagination-container mb-20 ", {
          [className]: className,
        })}
      >
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={cn("pagination-item", {
                disabled: currentPage === 1,
              })}
              onClick={onPrevious}
            />{" "}
          </PaginationItem>

          {paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return (
                <li key={index} className="pagination-item dots">
                  &#8230;
                </li>
              );
            }

            return (
              <PaginationItem
                key={index}
                className={cn("pagination-item", {
                  selected: pageNumber === currentPage,
                })}
                onClick={() => onPageChange(pageNumber)}
              >
                <PaginationLink className="bg-transparent" isActive>
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className={cn("pagination-item", {
                disabled: currentPage === lastPage,
              })}
              onClick={onNext}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Pagination2;
