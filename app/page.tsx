import AcmeLogo from '@/app/ui/acme-logo';
import { UserIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import bg_hero from '/public//assets/bg_hero.png';
import { kanit, anton } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="absolute inset-0 -z-10"></div>
      <Image
        alt="Background"
        src={bg_hero}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
      />
      <Image
        alt="Background"
        src={bg_hero}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
      />
      <div className="z-10 flex h-20 shrink-0 items-end rounded-lg bg-white-0 p-4 md:h-100">
        <AcmeLogo />
      </div>
      <div className="z-10 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-white-0 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${kanit.className} text-xl text-white md:text-xl md:leading normal`}
          >
            221711804 - Yemima Hasian Atnel Hutabarat
          </p>
          <p
            className={`${anton.className} text-6xl text-white md:text-6xl md:leading normal`}
          >
            Our Barbershop
          </p>
          <p
            className={`${anton.className} text-6xl text-white md:text-6xl md:leading normal`}
          >
            Admin Dashboard
          </p>
          <header className="absolute top-5 right-5 mt-4 mr-4">
            <Link href="/login"
              className="text-white block md:hidden"
              aria-label="Login">
              <UserIcon className="h-6 w-6" />
            </Link>
          </header>
          <header className="absolute top-5 right-5 mt-4 mr-4">
            <Link href="/login"
              className="flex items gap-5 self-start rounded-lg bg-white-0 border border-white px-6 py-3 text-sm font medium text-white transition-color hover:bg-gray-400 hidden md:block"
            >
              <span>Login</span>
            </Link>
          </header>
          <Link href= "/dashboard/">
          <h1 
          className={`${kanit.className} antialiased flex text-white 
          text-[20px] hover:text-teal-500`}>
          Go to Dashboard
          <ArrowRightCircleIcon className='w-6 mx-2'/>
          </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
