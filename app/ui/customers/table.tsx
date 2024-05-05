import Image from 'next/image';
import { UpdateCustomers, DeleteCustomers } from './button';
// import CustomersStatus from './status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { kanit, anton, inter } from '@/app/ui/fonts';
import { custom } from 'zod';

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const reservations = await fetchFilteredCustomers(query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {reservations?.map((customers) => (
              <div
                key={customers.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={customers.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${customers.name}'s profile picture`}
                      />
                      <p>{customers.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{customers.email}</p>
                  </div>
                  {/* <CustomersStatus status={customers.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  {/* <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(customers.amount)}
                    </p>
                    <p>{formatDateToLocal(customers.date)}</p>
                  </div> */}
                  <div className="flex w-full items-center justify between pt-4" />
                  <div className="flex w-1/2 flex-col">
                    <p className="text-xs">Pending</p>
                    <p className="font-medium">{customers.total_pending}</p>
                  </div>
                  <div className="flex w-full items-center justify between pt-4" />
                  <div className="flex w-1/2 flex-col">
                    <p className="text-xs">Paid</p>
                    <p className="font-medium">{customers.total_paid}</p>
                  </div>
                  <div className="pt-4 text-sm">
                    <p>{customers.total_invoices}</p>
                    </div> 
                  <div className="flex justify-end gap-2">
                    <UpdateCustomers id={customers.id} />
                    <DeleteCustomers id={customers.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className={`${inter.className} rounded-lg text-left text-sm font-normal`}>
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Invoices
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Pending
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Paid
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {reservations?.map((customers) => (
                <tr
                  key={customers.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className={`${inter.className} flex items-center gap-3`}>
                      <Image
                        src={customers.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${customers.name}'s profile picture`}
                      />
                      <p>{customers.name}</p>
                    </div>
                  </td>
                  <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    {customers.email}
                  </td>
                  <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    {customers.total_invoices}
                  </td>
                  <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    {customers.total_pending}
                  </td>
                  <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    {customers.total_paid}
                  </td>
                  {/* <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    {formatCurrency(customers.amount)}
                  </td>
                  <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    {formatDateToLocal(customers.date)}
                  </td> */}
                  <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    {/* <CustomersStatus status={customers.status} /> */}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateCustomers id={customers.id} />
                      <DeleteCustomers id={customers.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}