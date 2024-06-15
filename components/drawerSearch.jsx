"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { merriweather } from "@/fonts";
import Pagination2 from "./pagination";

const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

const blogs = {
  dataBlog: [],
};

let PageSize = 1;

export default function DrawerSearch({ query }) {
  // if(query.typeOf === string)

  const [currentPage, setCurrentPage] = useState(1);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = query?.dataResult?.slice(
    firstPageIndex,
    lastPageIndex
  );

  function truncateStringAtWordBoundary(str, maxLength, text) {
    if (str.length <= maxLength) {
      return str;
    }

    const trimmedStr = str.slice(0, maxLength);
    const lastSpaceIndex = trimmedStr.lastIndexOf(text);

    if (lastSpaceIndex === -1) {
      return trimmedStr + "...";
    }

    return trimmedStr.slice(0, lastSpaceIndex) + "...";
  }

  const maxLength = 191;
  return (
    <DrawerContent>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        {currentTableData.map((result, index) => {
          const date = new Date(result.publishDate).toDateString();
          const truncatedStr = truncateStringAtWordBoundary(
            result.summary,
            maxLength,
            "more"
          );

          return (
            <div
              onClick={(e) => {
                const clicked = e.target.closest(".post");

                window.location.href = `/post/${clicked.dataset.tab}`;

                if (!clicked) return;
              }}
              key={index}
              data-tab={result.id}
              className="post cursor-pointer flex flex-col  gap-6  mx-auto xs:gap-4 items-center  justify-center w-10/12 "
            >
              <div>
                <img
                  className="rounded-lg  object-cover w-[300px] h-[150px]"
                  src={result.url}
                  alt="img"
                />
              </div>

              <div className={cn("flex xs:gap-2  flex-col")}>
                <p className={cn("font-[900] text-xs", merriweather.className)}>
                  {result.category
                    ? result.category
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")
                    : ""}
                  <span className="text-xs font-[400]"> - {date}</span>
                </p>

                <h1
                  className={cn("text-sm   font-[900]", merriweather.className)}
                >
                  {result.title}
                </h1>
                <p className={cn("text-xs font-[500]")}>{truncatedStr}</p>
              </div>
            </div>
          );
        })}

        <DrawerFooter>
          <Pagination2
            className="pagination-bar mb-2"
            currentPage={currentPage}
            totalCount={query.dataResult.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />

          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
}
