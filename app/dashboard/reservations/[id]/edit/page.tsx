import EditReservationsForm from '@/app/ui/dashboard/reservations/edit-form';
import Breadcrumbs from '@/app/ui/dashboard/reservations/breadcrumbs';
import { fetchReservationsById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [reservation, customers] = await Promise.all([
        fetchReservationsById(id),
        fetchCustomers(),
      ]);

      if (!reservation) {
        notFound();
      }
      
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Reservations', href: '/dashboard/reservations' },
          {
            label: 'Edit Reservations',
            href: `/dashboard/reservations/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditReservationsForm reservation={reservation} customers={customers} />
    </main>
  );
}