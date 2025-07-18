import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
const CrudManage = ({nameofCrud,data}) => {
  const generateItem=()=>{
    return data.map((item,key)=>{
              return(<tr key={key}>
              <th>{item.id}</th>
              <th>{item.title}</th>
              <th> <Link href="#"><button><EditIcon/></button></Link></th>
              <th> <Link href="#"><button><DeleteIcon/></button></Link></th>
            </tr> )
            })
  }
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-2xl my-3 font-bold text-amber-600">
        {nameofCrud} Managment
      </div>
      <div className="innnercontainer">
        <table className="border-2 border-black border-separate border-spacing-2 w-full" border={2}>
          <thead className="p-6">
          <tr>
            <th className="p-4">S.N</th>
            <th className="p-4">{nameofCrud}</th>
            <th className="p-4">Edit</th>
            <th className="p-4">Delete</th>
          </tr>
          </thead>
          <tbody>{generateItem()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudManage;
