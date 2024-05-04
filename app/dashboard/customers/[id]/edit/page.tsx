import EditCustomersForm from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
import { fetchCustomers, fetchCustomersById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import Form from '@/app/ui/customers/create-form';
import { customers } from '@/app/lib/placeholder-data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [customer] = await Promise.all([fetchCustomersById(id)]); 

  if (!customer) {
    notFound(); 
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          { label: 'Edit Customers', href: `/dashboard/customers/${id}/edit`, active: true },
        ]}
      />
      <Form customers={customers}/>
    </main>
  );
}
