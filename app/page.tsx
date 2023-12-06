import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="">
      <h1>File upload</h1>
      <UserButton />
    </main>
  );
}
