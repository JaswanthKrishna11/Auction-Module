import { useEffect, useState } from 'react';
import { firestoreApp } from '../config/firebase';

export const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const subscribe = firestoreApp.collection(collection).onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });  //retrieving....
      });

      setDocs(documents);
    });    ///Listening from Firestore

    return () => subscribe();
  }, [collection]);

  return { docs };
};
