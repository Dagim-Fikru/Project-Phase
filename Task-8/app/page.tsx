"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from 'react';
import JobListing from "./components/JobListing";


const Page: React.FC = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });

  if (session) {
    const { role } = session.user;
    if (role === "unverified") {
      redirect("/verify");
    }
    if (role !== "user") {
      redirect("/signin");
    }
  }
  return (
    <>
        <JobListing/>
      
    </>
  );
};

export default Page;