import ListRenunganPage from '@/components/RenunganHarian/ListRenunganPage'
import { Metadata } from 'next'
import React from 'react'
import Renungan from '@/components/RenunganHarian/Renungan'
import "../css/devotion.css"

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - Renungan Harian',
}

const RenunganPage = async () => {
  const fetchData = await fetch(`${process.env.BASE_URL}/api/setting`, {
    cache: 'no-cache'
  });
  const renunganFetch = await fetch(`${process.env.BASE_URL}/api/renungan?page=1&numberPerPage=7`, {
    cache: 'no-cache'
  });
  const data = await fetchData.json();
  const renunganData = await renunganFetch.json();
  return (
    <Renungan renungan={renunganData} setting={data} />
  )
}

export default RenunganPage