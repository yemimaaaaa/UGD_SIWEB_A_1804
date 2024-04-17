import Image from 'next/image';
import { UpdateReservations , DeleteReservations } from '@/app/ui/dashboard/reservations/buttons';
import ReservationStatus from '@/app/ui/dashboard/reservations/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredReservations } from '@/app/lib/data';
import { kanit, anton, inter } from '@/app/ui/fonts';
 
export default async function ReservationsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const reservations = await fetchFilteredReservations(query, currentPage);
 
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {reservations?.map((reservation) => (
              <div
                key={reservation.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={reservation.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${reservation.name}'s profile picture`}
                      />
                      <p>{reservation.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{reservation.email}</p>
                  </div>
                  <ReservationStatus status={reservation.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(reservation.amount)}
                    </p>
                    <p>{formatDateToLocal(reservation.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateReservations id={reservation.id} />
                    <DeleteReservations id={reservation.id} />
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
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {reservations?.map((reservation) => (
                <tr
                  key={reservation.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className={`${inter.className} flex items-center gap-3`}>
                      <Image
                        src={reservation.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${reservation.name}'s profile picture`}
                      />
                      <p>{reservation.name}</p>
                    </div>
                  </td>
                  <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    {reservation.email}
                  </td>
                  <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    {formatCurrency(reservation.amount)}
                  </td>
                  <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    {formatDateToLocal(reservation.date)}
                  </td>
                  <td className={`${inter.className} whitespace-nowrap px-3 py-3`}>
                    <ReservationStatus status={reservation.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateReservations id={reservation.id} />
                      <DeleteReservations id={reservation.id} />
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