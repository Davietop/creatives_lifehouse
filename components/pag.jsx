"use client";

import React, { useState, useMemo, useEffect } from "react";
import Pagination2 from "./pagination";

let PageSize = 7;

export default function Pag() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const result = fetch("https://dummyjson.com/products");

    result.then((res) => res.json()).then((final) => setData(final.products));
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  // console.log(currentTableData);

  return (
    <>
      <Pagination2
        className="pagination-bar "
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
