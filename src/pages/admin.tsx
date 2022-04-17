import AdminContainer from "@/components/admin/AdminContainer";
import Login from "@/components/admin/Login";
import { auth } from "@/firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const Admin = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);
      setIsAuth(true);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        alert(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-24">
      {isAuth ? (
        <AdminContainer />
      ) : (
        <Login submitLogin={submitLogin} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Admin;
