import Dropzone from '@/components/Dropzone';
import { auth } from '@clerk/nextjs';

function Dashboard() {
  const { userId } = auth();

  return (
    <main>
      (use is {userId})
      <Dropzone />
    </main>
  );
}

export default Dashboard;
