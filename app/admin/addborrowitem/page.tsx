import AddBorrowItem from "@/components/BorrowItem/AddBorrowItem";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "GKim Amanat Kristus - Add Borrow Item",
};

const AddBorrowItemPage = () => {
  return <AddBorrowItem />;
};

export default AddBorrowItemPage;
