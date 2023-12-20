import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800"],
});
export default function Logo() {
  return (
    <>
      <Link href="/" className="flex space-x-2 items-center">
        <div className="py-1 px-2 shrink-0 mr-10 lg:mr-0 bg-slate-100 rounded-full">
          <Image src="/logo.svg" width={23} height={23} alt="Stream Hub Logo" />
        </div>
        <p className={cn("hidden lg:flex text-2xl font-bold", font.className)}>
          StreamHub
        </p>
      </Link>
    </>
  );
}
