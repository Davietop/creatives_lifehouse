"use client";

import React, { useState, useMemo, useEffect } from "react";
import Pagination2 from "./pagination";
import { createClient } from "@supabase/supabase-js";
import DrawerSearch from "./drawerSearch";

const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

let PageSize = 1;

export default function Pag2({ queryData }) {
  const [currentPage, setCurrentPage] = useState(1);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = queryData.dataResult.slice(
    firstPageIndex,
    lastPageIndex
  );
  //   console.log(currentTableData);

  return (
    <div className="absolute bottom-0">
      {/* <DrawerSearch query={currentTableData} /> */}
      <Pagination2
        className="pagination-bar "
        currentPage={currentPage}
        totalCount={queryData.dataResult.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
