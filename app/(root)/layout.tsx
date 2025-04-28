import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="flex mx-auto max-w-7xl flex-col gap-12 my-12 px-16 max-sm:px-4 max-sm:my-8">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">AIValuate</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;
