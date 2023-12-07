import { getApp, getApps, initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAoT959RwYAAMHUOS05YuuVR_VGSQsYDSA',
  authDomain: 'file-upload-e096e.firebaseapp.com',
  projectId: 'file-upload-e096e',
  storageBucket: 'file-upload-e096e.appspot.com',
  messagingSenderId: '611683559861',
  appId: '1:611683559861:web:4fe32869134abfc98991fc',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
