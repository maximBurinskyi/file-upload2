import Dropzone from '@/components/Dropzone';
import { db } from '@/firebase';
import { FileType } from '@/typings';
import { auth } from '@clerk/nextjs';
import console from 'console';
import { getDocs, collection } from 'firebase/firestore';

async function Dashboard() {
  const { userId } = auth();

  const docResults = await getDocs(collection(db, 'users', userId!, 'files'));
  const skeletonFiles: FileType[] = docResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));

  console.log(skeletonFiles);

  return (
    <div className="border-t">
      {/* (use is {userId}) */}
      <Dropzone />
      <section className="contaner space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div></div>
      </section>
    </div>
  );
}

export default Dashboard;
