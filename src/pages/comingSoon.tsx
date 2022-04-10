import MetaTags from "@/components/common/MetaTags";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firestore";
import { NextPage } from "next";

const ComingSoon: NextPage = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    const getQs = async () => {
      const ref = collection(db, "musicalInfo");
      const q = query(ref, where("customers", "==", 0));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log("doc.id, doc.data()", doc.id, doc.data());
      });
    };

    getQs();
  }, []);

  return (
    <>
      <MetaTags subTitle="ComingSoon" pathname={pathname} />

      <section className="flex items-center justify-center h-screen text-center">
        <div className="text-8xl font-bold rounded-full bg-pink px-5 py-10 select-none">
          Coming Soon!
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
