import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

interface NewsletterFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onSubmit?: (values: FormValues) => Promise<void>;
}

const NewsletterForm = ({
  title = "Subscribe to Our Newsletter",
  description = "Stay updated with our latest news, events, and special offers.",
  buttonText = "Subscribe",
  onSubmit = async () => {
    // This is a mock implementation
    return new Promise((resolve) => setTimeout(resolve, 1000));
  },
}: NewsletterFormProps) => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    setStatus("loading");
    try {
      await onSubmit(values);
      setStatus("success");
      setMessage("Thank you for subscribing to our newsletter!");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-md bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Email</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <FormControl>
                    <Input
                      placeholder="your-email@example.com"
                      className="pl-10"
                      {...field}
                      disabled={status === "loading" || status === "success"}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Subscribing..." : buttonText}
          </Button>
        </form>
      </Form>

      {status === "success" && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <p className="text-green-700 text-sm">{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
          <p className="text-red-700 text-sm">{message}</p>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
