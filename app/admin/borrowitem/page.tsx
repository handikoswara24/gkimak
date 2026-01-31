import ListBorrowItem from "@/components/BorrowItem/ListBorrowItem";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "GKim Amanat Kristus - Borrow Item",
};

const BorrowItemPage = () => {
  return <ListBorrowItem />;
};

export default BorrowItemPage;
