import Link from 'next/link';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { SignedOut, SignInButton } from '@clerk/nextjs';
import { ThemeToggler } from './ThemeToggler';

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#575a5e] w-fit">
          <Image
            src="https://www.filemail.com/images/marketing/anonymously-upload-files.svg"
            alt="logo"
            // className="invert"
            height={50}
            width={50}
          />
        </div>
        <h1 className="font-bold text-xl">File Ulploader</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        {/* Theme togler is here */}
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
