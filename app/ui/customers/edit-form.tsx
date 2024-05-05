'use client';

import { CustomerField, CustomersForm } from '@/app/lib/definitions';
import {
    UserCircleIcon,
    InboxArrowDownIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
//import { updateCustomers } from '@/app/lib/actions';
import { kanit, anton, inter } from '@/app/ui/fonts';
import { updateCustomers } from '@/app/lib/actions';

export default function EditCustomersForm({
    customer,
    customers,
}: {
    customer: CustomersForm;
    customers: CustomerField[];
}) {
    const updateCustomersWithId = updateCustomers.bind(null, customer.id);

    return (
        <form action={updateCustomersWithId}>
            <div className={`${inter.className} rounded-md bg-gray-50 p-4 md:p-6`}>
                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Name
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            placeholder='Enter your name'
                            defaultValue={customer.name}
                        >
                            {/* <option value="" disabled>
                                Select a customer
                                </option>
                                {customers.map((customer) => (
                                customer.id} value={customer.id}>
                                {customer.name}
                                </option>
                                ))} */}
                        </input>
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                step="0.01"
                                placeholder="Enter your email"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={customer.email}
                            />
                            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                {/* Upload Image */}
                <div className="mb-4">
                    <label htmlFor="image" className="mb-2 block text-sm font-medium">
                        Upload Image
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="image"
                                name="image"
                                type="file"
                                accept="image/*"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <InboxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Cancel and Edit */}
            <div className={`${inter.className} mt-6 flex justify-end gap-4`}>
                <Link
                    href="/dashboard/customers"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Edit Customer</Button>
            </div>
        </form>
    );
}