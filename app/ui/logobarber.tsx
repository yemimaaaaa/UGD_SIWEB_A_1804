import Image from 'next/image';
import { kanit } from '@/app/ui/fonts';

export default function LogoBarber() {
  return (
    <div className={`${kanit.className} flex flex-row items-center leading-none text-white justify-content: flex-end`}>
      <p className="text-[45px] kanit">Atma Barbershop</p>
      <Image
        src="/assets/logo_hero.png"
        alt="Logo Hero"
        width={65}
        height={65}
        className="rotate-[5deg]"
        style={{ position: 'absolute', right: '30px' }}/>
    </div>
  );
}
