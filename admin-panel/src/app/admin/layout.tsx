"use client"
import { useAppSelector } from '@/redux/hooks';
import Login from "@/components/admin-apnel/login";
import React from 'react';
import { useSession }  from "next-auth/react";


const layout = () => {

  const isLoading = useAppSelector(store => store.LoadingReducer);  
  const {data: session} = useSession();

  if (!session?.user){
    return <Login />;
  }

  return (
    <div>
      layout
    </div>
  )
};

export default layout;
