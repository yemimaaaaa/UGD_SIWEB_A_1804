'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
//import { UpdateInvoice } from '../ui/invoices/buttons';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const FormSchema2 = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  image_url: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
const CreateReservations = FormSchema.omit({ id: true, date: true });
const UpdateReservations = FormSchema.omit({ id: true, date: true });
const CreateCustomers = FormSchema2.omit({ id: true });
const UpdateCustomers = FormSchema2.omit({ id: true });
export async function createReservations(formData: FormData) {
  const { customerId, amount, status } = CreateReservations.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
  // Test it out:
  // console.log(rawFormData);

  try {
    await sql`
  INSERT INTO reservations (customer_id, amount, status, date)
  VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/reservations');
  redirect('/dashboard/reservations');
}

export async function updateReservations(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateReservations.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE reservations
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/reservations');
  redirect('/dashboard/reservations');
}
export async function deleteReservations(id: string) {
  throw new Error('Failed to Delete Reservations');
}

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
          UPDATE invoices
          SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
          WHERE id = ${id}
        `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  throw new Error('Failed to Delete Invoice');
}
// const CreateCustomers = FormSchema.omit({ id: true, date: true });
export async function createCustomers(formData: FormData) {
  const img = formData.get('image');
  console.log(img);

  let fileName = '';
  if (img instanceof File) {
    fileName = '/customers/' + img.name;
    console.log('Image uploaded:', fileName);
  };

  const { name, email, image_url } = CreateCustomers.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    image_url: fileName,
  });

  try {
    await sql`
        INSERT INTO customers (name, email, image_url)
        VALUES (${name}, ${email}, ${image_url})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Customers.',
    };
  }

  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}

export async function updateCustomers(id: string, formData: FormData) {
  const image = formData.get('image');
  console.log(image);

  let fileName = '';
  if (image instanceof File) {
    fileName = '/customers/' + image.name;
    console.log('Image uploaded:', fileName);
  };
  const { name, email, image_url } = UpdateCustomers.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    image_url: fileName,
  });

  const updateFields = { name, email, image_url };
  if (fileName) {
    updateFields.image_url = fileName;
  }
  try {
    await sql`
        UPDATE customers
        SET name = ${name}, email = ${email}, image_url = ${fileName}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Customers.' };
  }

  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}

export async function deleteCustomers(id: string) {
  throw new Error('Failed to Delete Customers');
}