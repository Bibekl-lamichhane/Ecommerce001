import Link from "next/link";
import React from "react";

const page = () => {
  const adminFeatures = [
    { name: "Add Category", backgroundUrl: "", linkto: "/admin/addcategory" },
    { name: "Add Products", backgroundUrl: "", linkto: "/admin/addproduct" },
    {
      name: "Manage Product",
      backgroundUrl: "",
      linkto: "/admin/manageproduct",
    },
    { name: "Manage Users", backgroundUrl: "", linkto: "/admin/manageusers" },
    { name: "Manage Orders", backgroundUrl: "", linkto: "/admin/manageorders" },
  ];
  const generateAdminFeatures = () => {
   ;
  };
  return <div className="flex justify-center items-center  gap-3 m-2">{ adminFeatures.map((item,id) => {
      return (
        <Link key={id}  href={item.linkto}>
          <div  className="m-2 p-3 shadow-3xl rounded-2xl bg-amber-500 text-white font-bold">
            {item.name}
          </div>
        </Link>
      );
    })}</div>;
};

export default page;
