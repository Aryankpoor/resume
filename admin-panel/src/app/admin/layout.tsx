"use client"
import { useAppSelector } from '@/redux/hooks';
import Login from "@/components/admin-apnel/login";
import React from 'react';
import { useSession }  from "next-auth/react";


const layout = ({children}: {children: React.ReactNode}) => {

  const isLoading = useAppSelector(store => store.LoadingReducer);  
  const {data: session} = useSession();

  if (!session?.user){
    return <Login />;
  }

  return (
    <div className="flex">
      {/*<Sidebar></Sidebar> */}
      <div className="w-full h-full">
        {/*<navbar /> */}
      </div>
    </div>
  )
};

export default layout;
