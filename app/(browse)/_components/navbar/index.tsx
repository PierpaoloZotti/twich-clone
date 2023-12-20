import { SignInButton, SignedOut, UserButton, auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themeToggle";
import Logo from "@/app/(auth)/_components/logo";
import { Search } from "./search";
import { Actions } from "./actions";

export default function Navbar() {
  const { userId } = auth();
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] flex justify-between items-center px-2 lf:px-4 shadow-sm">
      <Logo />
      <Search />
      <Actions />
      {/* <div className="flex items-center space-x-2">
       <ModeToggle />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <Button>
            <SignInButton mode="modal" />
          </Button>
        </SignedOut>
      </div> */}
    </nav>
  );
}
