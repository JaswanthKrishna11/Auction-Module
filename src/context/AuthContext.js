import { createContext, useEffect, useState } from 'react';
import { authApp, firestoreApp } from '../config/firebase';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); //authuentication
  const [loading, setLoading] = useState(true);    //progresss bar
  const [globalMsg, setGlobalMsg] = useState('');

  const register = (email, password) => {
    return authApp.createUserWithEmailAndPassword(email, password);  
  };

  const login = (email, password) => {
    return authApp.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return authApp.signOut();
  };

  const bidAuction = (auctionId, price) => {
    if (!currentUser) {
      return setGlobalMsg('Please login first');
    }
    let newPrice = Math.floor(Number(price)+Number(100));
    const db = firestoreApp.collection('auctions');

    return db.doc(auctionId).update({
      curPrice: newPrice,
      curWinner: currentUser.email,
    });
  };
  const bidAuction1 = (auctionId, price) => {
    if (!currentUser) {
      return setGlobalMsg('Please login first');
    }
    let newPrice = Math.floor(Number(price)+Number(500));
    const db = firestoreApp.collection('auctions');

    return db.doc(auctionId).update({
      curPrice: newPrice,
      curWinner: currentUser.email,
    });
  };
  const bidAuction2 = (auctionId, price) => {
    if (!currentUser) {
      return setGlobalMsg('Please login first');
    }
    let newPrice = Math.floor(Number(price)+Number(2000));
    const db = firestoreApp.collection('auctions');

    return db.doc(auctionId).update({
      curPrice: newPrice,
      curWinner: currentUser.email,
    });
  };

  

  const endAuction = (auctionId) => {
    const db = firestoreApp.collection('auctions');

    return db.doc(auctionId).delete();
  };

  useEffect(() => {
    const subscribe = authApp.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });  //keeping track of users

    return subscribe;
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => setGlobalMsg(''), 5000); //5 sec display (in ms)
    return () => clearTimeout(interval);
  }, [globalMsg]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        bidAuction,
        bidAuction1,
        bidAuction2,
        endAuction,
        globalMsg,
      }}    
    >                       
      {!loading && children}   
          </AuthContext.Provider>
  );
};
