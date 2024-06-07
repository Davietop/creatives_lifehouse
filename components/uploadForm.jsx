"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Button as Button2 } from "@nextui-org/button";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@supabase/supabase-js";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { user } from "@nextui-org/react";

import { v4 as uuidv4 } from "uuid";

//

const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

const id = uuidv4();

export default function UploadForm() {
  const [metadata, setMetadata] = useState({
    title: "",
    author: "",
    publishDate: "",
    img: "",
    summary: "",
    category: "",
  });

  const [contentSections, setContentSections] = useState([
    {
      sectionTitle: "",
      content: "",
      mediaImage: "",
      mediaURL: "",
      id: id,
    },
  ]);

  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const router = useRouter();

  const handleMetadataChange = (e) => {
    setMetadata({
      ...metadata,
      [e.target.name]: e.target.value,
    });
  };

  const handleImgChange = (e) => {
    setMetadata({
      ...metadata,
      img: e.target.value,
    });
  };

  const handleContentChange = (index, e) => {
    const newContentSections = [...contentSections];
    newContentSections[index][e.target.name] = e.target.value;
    setContentSections(newContentSections);
  };

  const addContentSection = () => {
    setContentSections([
      ...contentSections,
      {
        sectionTitle: "",
        content: "",
        mediaImage: "",
        mediaURL: "",
        id: uuidv4(),
      },
    ]);
  };

  const uploadContentImages = async function (userId, imagePath, name) {
    const { data, error } = await supabase.storage
      .from("blogimage")
      .upload(`content/${userId}/${name}`, imagePath);

    return data;
  };

  const uploadMetaImage = async (userId, imagePath, name) => {
    const { data, error } = await supabase.storage
      .from("blogimage")
      .upload(`public/${userId}/${name}`, imagePath);

    return data;

    console.log(data, error);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    const metaImage = document.querySelector("#metaimage");
    const contentImages = document.querySelectorAll("#mediaImage");

    e.preventDefault();
    const blogPost = {
      metadata,
      contentSections,
    };

    try {
      const { data, error } = await supabase
        .from("blogpost")
        .insert([{ metadata, contentSections }])
        .select();

      if (data) {
        contentImages.forEach(async (contentImg, index) => {
          const contentSection = blogPost?.contentSections[index];

          const file = contentImg.files[0] ? contentImg.files[0] : "";
          const name = contentImg.files[0] ? contentImg.files[0].name : "";

          const met = await uploadMetaImage(
            data[0].id,
            metaImage.files[0],
            metaImage.files[0].name
          );
          const con = await uploadContentImages(contentSection.id, file, name);

          console.log(met, con);
          if (met.path && con.path) {
            toast({
              description: "Upload Successful, redirecting to blog page...",
            });

            setTimeout(() => {
              window.location.href = `/blog`;
            }, 2000);
            setLoading(false);
          }
        });
      }

      if (error) {
        setLoading(false);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Try again later",
        });
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="App flex flex-col   mx-auto  mb-10 mt-6 xs:w-10/12 md:w-6/12">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <h3 className="text-center mt-6 font-bold ">Blog Post Metadata</h3>
          {/* <label>Title:</label> */}
          <Input
            placeholder="Enter the Blog Post Title"
            type="text"
            name="title"
            value={metadata.title}
            onChange={handleMetadataChange}
            required
          />

          <Input
            placeholder="Enter the Blog Post Author"
            type="text"
            name="author"
            value={metadata.author}
            onChange={handleMetadataChange}
            required
          />

          <Input
            type="date"
            placeholder="Publish Date"
            name="publishDate"
            value={metadata.publishDate}
            onChange={handleMetadataChange}
            required
          />

          <Input
            placeholder="Enter the category this blog fall into"
            type="text"
            name="category"
            value={metadata.category}
            onChange={handleMetadataChange}
            required
          />

          <Input
            placeholder="Select an image that fits this blogpost"
            type="file"
            name="image"
            value={metadata.img}
            onChange={handleImgChange}
            accept="image/png, image/jpeg, image/gif"
            id="metaimage"
            required
          />

          <Textarea
            placeholder="Enter the summary of this blog "
            name="summary"
            value={metadata.summary}
            onChange={handleMetadataChange}
            required
          />
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-center font-bold mt-6">Blog Post Content</h3>
          {contentSections.map((section, index) => (
            <div key={index} className="contentSection flex flex-col gap-6">
              <Input
                type="text"
                name="sectionTitle"
                placeholder="Section Title"
                value={section.sectionTitle}
                onChange={(e) => handleContentChange(index, e)}
              />

              <Textarea
                name="content"
                placeholder="Enter content"
                value={section.content}
                onChange={(e) => handleContentChange(index, e)}
                required
              />

              <Input
                type="file"
                // data-tab={}
                name="mediaImage"
                placeholder="If you have images for this section, please include"
                value={section.mediaImage}
                onChange={(e) => handleContentChange(index, e)}
                accept="image/png, image/jpeg, image/gif"
                id="mediaImage"
              />

              <Input
                placeholder="If you have any external link for this section include them here"
                type="url"
                name="mediaURL"
                value={section.mediaURL}
                onChange={(e) => handleContentChange(index, e)}
              />

              <Separator className="my-4" />
            </div>
          ))}
          <Button
            className="flex self-end"
            type="button"
            onClick={addContentSection}
          >
            Add Another Section
          </Button>
        </div>

        <Button2 isLoading={loading} type="submit" value="Upload Blog Post">
          Upload Blog
        </Button2>
      </form>
    </div>
  );
}

// const uploadImage = async (userId) => {
//   const imagePath = document.getElementById("metaimage").files[0];

//   if (imagePath) {
//     const { data, error } = await supabase.storage
//       .from("blogimage")
//       .upload(`public/${userId}`, imagePath);
//   }
// };

// const uploadContentsImage = (userId) => {};

// async function uploadContentImages() {
//   const getFilePath = document.querySelectorAll("#mediaImage");

//   for (const file of getFilePath) {
//     console.log(file);
//   }
// }

// const getContentData = async function () {
//   const { data, error } = await supabase
//     .from("blogpost")
//     .select("contentSections");

//   return data;
// };

// getContentData();

// (await contentInfo).map((data) => {
//   data.contentSections.map((section) => {
//     console.log(section.id);

//   });
// });

// uploadImage(data[0].id);
