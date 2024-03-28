// import { Card } from '@/app/ui/dashboard/cards';
// import LatestReservations from '@/app/ui/dashboard/latest-reservations';
// import { fetchLatestReservations } from '@/app/lib/data';
// import ReservationsTable from '@/app/ui/dashboard/reservations/table';
import Search from '@/app/ui/search';
import Table from '@/app/ui/dashboard/reservations/table';
import { CreateReservations } from '@/app/ui/dashboard/reservations/buttons';
import { unstable_noStore } from 'next/cache';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { fetchLatestInvoices, fetchCardData, fetchLatestReservations } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, LatestReservationsSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  unstable_noStore()
  const latestReservations = await fetchLatestReservations();
  return (
    <div className="flex min-h-screen flex-col">
      <p> Reservation</p>
      <p> 221711804</p>
      <p></p>
      <p> Yemima Hasian Atnel Hutabarat</p>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search reservations..." />
        <CreateReservations />
      </div>
      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
         {/* <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
        <LatestReservations latestReservations={latestReservations} /> */}
        </div>
      <Table query = " " currentPage={1}/>
    </div>
  )
}