import Form from '@/app/ui/dashboard/reservations/create-form';
import Breadcrumbs from '@/app/ui/dashboard/reservations/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Reservations', href: '/dashboard/reservations' },
          {
            label: 'Create Reservations',
            href: '/dashboard/reservations/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}