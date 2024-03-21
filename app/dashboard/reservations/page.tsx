import { Card } from '@/app/ui/dashboard/cards';
import LatestReservations  from '@/app/ui/dashboard/latest-reservations';
import { fetchLatestReservations } from '@/app/lib/data';
import { ReservationsTable } from '@/app/lib/definitions';
import Search from '@/app/ui/search';
import Table from '@/app/ui/reservations/table';
import { CreateReservations } from '@/app/ui/reservations/buttons';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export default function Page() {
    return (
       <div className='flex min-h-screen flex-col items-start'>
         <div className="flex flex-col items-left">
            Reservations Page
           <div className="flex flex-col items-left">
                221711804
             <p className="ml-auto">Yemima Hasian Atnel Hutabarat</p>
           </div>
         </div>
         <div className="w-full">
           <div className="flex w-full items-center justify-between">
             {/* <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1> */}
           </div>
           <br/>
           <div className="flex items-center justify-between gap-2 md">
             <Search placeholder="Search reservations..." />
             <CreateReservations />
           </div>
           {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
             <Table query={query} currentPage={currentPage} />
           </Suspense> */}
           <div className="mt-5 flex w-full justify-center">
             {/* <Pagination totalPages={totalPages} /> */}
           </div>
         </div>
         <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"></div>
       </div>
    );
}

