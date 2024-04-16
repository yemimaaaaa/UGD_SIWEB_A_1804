import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/reservations' },
          {
            label: 'Edit Reservations',
            href: `/dashboard/reservations/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form reservations={reservations} customers={customers} />
    </main>
  );
}