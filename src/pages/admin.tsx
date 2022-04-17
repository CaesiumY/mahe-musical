import React, { useState } from "react";
import dynamic from "next/dynamic";

const AdminContainer = dynamic(
  () => import("@/components/admin/AdminContainer")
);
const Login = dynamic(() => import("@/components/admin/Login"));

const Admin = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="mt-24">
      {isAuth ? <AdminContainer /> : <Login setIsAuth={setIsAuth} />}
    </div>
  );
};

export default Admin;
