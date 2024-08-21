"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

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
      <div className="font-sans text-center p-8 bg-gray-50 ">
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md rounded-lg max-w-fit">
          <Link
            href="/api/auth/signout?callbackUrl=/signin"
            className="text-lg hover:text-blue-300 mx-6"
          >
            Logout
          </Link>
        </nav>
        <h1 className="text-gray-800 m-10 text-3xl font-semibold">
          You're logged in! 🎉
        </h1>
        {session && (
          <p className="text-gray-800 text-lg">
            Welcome to the app! You're logged in as{" "}
            <span className="text-blue-500">{session.user.email}</span>.
          </p>
        )}
      </div>
    </>
  );
};

export default Page;