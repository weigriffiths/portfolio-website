"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

interface FormValues {
  senderEmail: string;
  message: string;
}

export default function Contact() {
  const router = useRouter()
  const { pending } = useFormStatus();
  const { ref } = useSectionInView("Contact");

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success('Email copied to clipboard.');
  }

  const initialFormState: FormValues = {
    senderEmail: "",
    message: ""
  };

  const [formData, setFormData] = useState<FormValues>(initialFormState);
  const [loading, setLoading] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      setLoading(true)
      
      const { data, error } = await sendEmail(formData);
  
      if (error) {
        toast.error(error);
        return;
      }
  
      toast.success("Email sent successfully!");

      // Reset the form data after successful submission
      setFormData(initialFormState);
    } catch (error) {
      console.error("Form submission error: ", error)
      toast.error("Form submission error")
    } finally {
      setLoading(false)
    }


  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline cursor-pointer" onClick={() => onCopy("weilingriffiths@gmail.com")}>
          weilingriffiths@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleFormSubmit}
        // action={async (formData) => {
        //   const { data, error } = await sendEmail(formData);

        //   if (error) {
        //     toast.error(error);
        //     return;
        //   }

        //   toast.success("Email sent successfully!");
        //   router.refresh()
        // }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={formData.senderEmail}
          onChange={handleInputChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={formData.message}
          onChange={handleInputChange}
        />
        <SubmitBtn loading={loading} />
      </form>
    </motion.section>
  );
}
