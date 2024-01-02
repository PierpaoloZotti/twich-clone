import { SignInButton, SignedOut, UserButton, auth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/themeToggle';
import { Actions } from './actions';
import Logo from './logo';

export default function Navbar() {
  const { userId } = auth();
  return (
    <nav className='fixed top-0 w-full h-20 z-[49] bg-[#252731] flex justify-between items-center px-2 lf:px-4 shadow-sm'>
      <Logo />
      <Actions />
    </nav>
  );
}
