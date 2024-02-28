import Image from 'next/image';
import { kanit } from '@/app/ui/fonts';
 
export default function AtmaBarbershop() {
  return (
    <div
      className={`${kanit.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/assets/logo_hero.png"
        //alt="Logo Hero"
        width={48}
        height={48}
        className="hidden md:block mr-2"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <p className="text-[30px]">Atma</p>
      <p className="text-[30px]">Barbershop</p>
    </div>
  );
}