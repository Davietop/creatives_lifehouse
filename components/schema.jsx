// "use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@nextui-org/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

// Verify the otp
const verifyOtp = async function (tokenData, toast, router) {
  try {
    const email = "oyatoyedavid@gmail.com";
    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      email,
      token: `${tokenData}`,
      type: "email",
    });
    if (session) {
      toast({
        description: "Verified, Redirecting...",
      });

      setTimeout(() => router.push("/upload"), 1000);
    }

    if (!session) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "The OTP is either expired or it is incorrect, Request for another OTP and try again",
      });
    }

    return session;
  } catch (error) {
    alert(error);
  }
};
// get the otp
const getOtp = async function () {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: "oyatoyedavid@gmail.com",
      options: {
        shouldCreateUser: false,
      },
    });

    if (!data) throw new Error("User does not exist");
    return { data, error };
  } catch (error) {
    console.log(error);
  }
};

export function InputOTPForm() {
  const [load, setLoad] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [intervalId, setIntervalId] = useState(null);
  const [load2, setLoad2] = useState(false);
  //   const { toast } = useToast();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  //   handler that submits the form
  function onSubmit(data) {
    setLoad(true);

    verifyOtp(data.pin, toast, router)
      .then((res) => res)
      .finally(() => {
        setLoad(false);
      });
  }

  // fetchs the otp
  const fetchData = () => {
    setIsLoading2(true);
    setLoad2(!load2);
    // Make fetch request to random API
    getOtp()
      .then((data) => {
        // Handle data if needed
        data;
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
      fetchData();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center gap-2">
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSeparator />
                    <InputOTPSlot index={1} />
                    <InputOTPSeparator />
                    <InputOTPSlot index={2} />
                    <InputOTPSeparator />
                    <InputOTPSlot index={3} />
                    <InputOTPSeparator />
                    <InputOTPSlot index={4} />
                    <InputOTPSeparator />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to the admin mail.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          {" "}
          <Button
            className="xs:mt-6 sm:mt-0"
            isLoading={load2}
            type="submit"
            onClick={handleClick}
            disabled={isLoading2}
          >
            {isLoading2 ? `Resending in ${countdown}s` : "Resend OTP"}
          </Button>
          <Button isLoading={load} type="submit">
            Verify OTP
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
