"use client";

import React, { useState, useMemo, useEffect } from "react";
import Pagination2 from "./pagination";
import { createClient } from "@supabase/supabase-js";
import BlogPosts from "./blogPosts";

const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

let PageSize = 6;
const dataBlog = {
  blogPosts: [],
};

export default function Pag() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const [blogData, setBlogData] = useState(dataBlog);
  useEffect(() => {
    const timeout = setTimeout(() => {
      async function getData() {
        const { data, error } = await supabase.from("blogpost").select();
        setData(data);
        setBlogData({
          ...dataBlog,
          blogPosts: data,
        });
      }

      getData();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = data.slice(firstPageIndex, lastPageIndex);

  return (
    <>
      <BlogPosts dataBlogg={currentTableData} />
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
