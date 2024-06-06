"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { fontSans, poppins } from "@/fonts";

const metaData = {};

const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

const content = [];

export default function ContentData({ idKey }) {
  const [postContentData, setPostContentData] = useState(content);
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase.from("blogpost").select("");
      const { data2, error2 } = await supabase.storage.listBuckets();

      //   console.log(data2, error2);
      const scanned = data.find((ret) => {
        return ret.id === idKey;
      });

      setPostContentData(scanned.contentSections);
    }

    getData();
  }, [content]);

  return (
    <div>
      {postContentData.map((data) => {
        const str = data.mediaImage.split("\\")[2];

        if (str) {
          const { data2, error } = supabase.storage
            .from("contentimage")
            .getPublicUrl(`public/${data.id}/${str}`);

          {
            /* console.log(error, data2); */
          }
        }
      })}
    </div>
  );
}
// setTimeout(() => {
//     postContentData.map((data) => {
//       const str = data.mediaImage.split("\\")[2];
//       if (str) {
//         const { data2 } = supabase.storage
//           .from("contentimage")
//           .getPublicUrl(`public/${data.id}/${str}`);

//         console.log(`public/${data.id}/${str}`);
//         console.log(data2);
//       }

//       //   setUrl(data.publicUrl);
//     });
//   }, 2000);
