import RenunganHarianDetail from '@/components/RenunganHarian/RenunganHarianDetail';
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

export default RenunganDetailPage;