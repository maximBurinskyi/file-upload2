import { Button } from '@/components/ui/button';
// import Link from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
// import { ArrowRight } from 'lucide-react';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919]">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to File Upload. <br />
            <br />
            You can store here anything you want
          </h1>
          <p className="pb-20">Enhanse your personal storage here</p>
          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div></div>
      </div>
      {/* <h1>File upload</h1> */}
      {/* <UserButton /> */}
      {/* <Button>Demo</Button> */}
    </main>
  );
}
