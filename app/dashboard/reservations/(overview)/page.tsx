// import { Card } from '@/app/ui/dashboard/cards';
// import LatestReservations from '@/app/ui/dashboard/latest-reservations';
// import { fetchLatestReservations } from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/reservations/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/dashboard/reservations/table';
import { CreateReservations } from '@/app/ui/dashboard/reservations/buttons';
import { unstable_noStore } from 'next/cache';
import {  fetchCardData, fetchLatestReservations, fetchReservationsPages } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestReservationsSkeleton, ReservationsTableSkeleton , SearchReservationsSkeleton, CreateReservationsSkeleton} from '@/app/ui/skeletons';


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  //const 
    //unstable_noStore()

  const latestReservations = await fetchLatestReservations();
  return (
    <div className="flex min-h-screen flex-col">
      <p> Reservation</p>
      <p> 221711804</p>
      <p></p>
      <p> Yemima Hasian Atnel Hutabarat</p>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense fallback= {<SearchReservationsSkeleton/>}>
        <Search placeholder="Search reservations..." />
        </Suspense>

        <Suspense fallback={<CreateReservationsSkeleton />}>
          <CreateReservations/>
        </Suspense>
      </div>

      <Suspense key={query + currentPage} fallback={<ReservationsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
       {/* <Suspense fallback={<ReservationsTableSkeleton />}>
       {/* <Table query = " " currentPage={1}/> */}
      {/* </Suspense> */} 
{/* 
         <div className="mt-5 flex w-full justify-center">
        </div> 
        <Pagination totalPages={totalPages} /> */}
    </div>
  )
}