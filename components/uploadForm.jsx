"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@nextui-org/button";
import { poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import plus_32 from "../public/add_32.png";
import plus_64 from "../public/add_64.png";
import Image from "next/image";

const state = {
  blogTitle: "",
  blogImage: "",
  blogIntro: "",
};

export default function UploadForm() {
  const { register, handleSubmit } = useForm();
  const [blogState, setBlogState] = useState(state);

  // console.log(blogState);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="relative flex flex-col items-center justify-center mx-auto gap-6 mb-10 mt-6 xs:w-10/12 md:w-6/12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className={cn("mt-4 font-bold", poppins.className)}>
        Blog Header Information
      </h1>
      <Input
        placeholder="Blog Title"
        label="blogTitle"
        register={register}
        required
      />
      <Input
        placeholder="Blog Introduction"
        label="blogIntroduction"
        register={register}
        required
      />
      <Input
        placeholder="Blog Image"
        label="blogImage"
        type="file"
        register={register}
      />

      <h1 className={cn("mt-4 font-bold", poppins.className)}>
        Blog Post Information
      </h1>
      <Input placeholder="Post Header" label="postHeader" register={register} />

      <Input
        placeholder="Post Title"
        label="postTitle"
        register={register}
        required
      />

      <Input
        placeholder="Post Image"
        label="postImage"
        type="file"
        register={register}
      />

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message-2">Post Text</Label>
        <Textarea
          register={register}
          placeholder="Post Text"
          label="postText"
          id="message-2"
          required
        />
      </div>

      <img className="absolute bottom-4 right-0 " src={plus_32.src}></img>

      <Button type="submit" className=" w-10/12 xs:p-6  md:p-8  ">
        Submit
      </Button>
    </form>
  );
}
