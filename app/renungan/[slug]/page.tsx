import RenunganHarianDetail from '@/components/RenunganHarian/RenunganHarianDetail';
import { RenunganHarianType } from '@/types/renunganharian';
import { Metadata } from 'next';
import React from 'react'

const RenunganDetailPage = async ({ params }: { params: { slug: string } }) => {
  const fetchData = await fetch(`${process.env.BASE_URL}/api/renungan/slug/${params.slug}`, {
    cache: 'no-cache'
  });
  const data = await fetchData.json();

  return (
    <RenunganHarianDetail data={data} />
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const url = process.env.BASEPATH ?? "";
  try {
    const fetchData = await fetch(`${process.env.BASE_URL}/api/renungan/slug/${params.slug}`, {
      cache: 'no-cache'
    });
    const data : RenunganHarianType = await fetchData.json();

    return {
      title: `Renungan Harian - ${data.title}`,
    }
  }
  catch (e) {
    return {
      title: "Not Found",
    }
  }

}

export default RenunganDetailPage;