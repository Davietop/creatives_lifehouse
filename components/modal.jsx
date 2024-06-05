"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
// import { Button } from "@nextui-org/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

import { InputOTPForm } from "./schema";
import { cn } from "@/lib/utils";

const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

// Getotp sends the otp to the admins email
const getOtp = async function () {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: "oyatoyedavid@gmail.com",
      options: {
        shouldCreateUser: true,
      },
    });

    return { data, error };
  } catch (error) {
    throw new Error("User does not exist");
  }
};

// Logs out the user
const signOut = async function () {
  const { error } = await supabase.auth.signOut();

  return error;
};

export default function Modal() {
  const [isLoading2, setIsLoading2] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [intervalId, setIntervalId] = useState(null);

  const [load2, setLoad2] = useState(false);
  const { toast } = useToast();

  // FetchOtp retreives the api from the third party app (supabase)
  const fetchOtp = () => {
    setIsLoading2(true);
    setLoad2(!load2);
    // Make fetch request to random API
    getOtp()
      .then((data) => {
        // Handle data if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle error if needed
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        // After promise is settled, clear interval and enable button
        clearInterval(intervalId);
        // setIsLoading(false);
        setCountdown(60); // Reset countdown
      });
  };

  //  Hanldclick handles the click event that triggers both the api and the countdown timer
  const handleClick = () => {
    if (!isLoading2) {
      setIsLoading2(true);

      setCountdown(60); // Reset countdown
      const id = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(intervalId);
            setIsLoading2(false);
            setLoad2(false);
          }
          return prevCountdown - 1;
        });
      }, 1000);
      setIntervalId(id);
      // Make fetch request
      fetchOtp();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={handleClick} disabled={isLoading2} variant="outline">
          Upload Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className={cn("text-center")}>Uplog Blog</DialogTitle>
        </DialogHeader>

        <div className="space-y-2  mx-auto data mt-6 mb-6">
          <InputOTPForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
