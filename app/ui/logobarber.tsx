import Image from 'next/image';
import { kanit } from '@/app/ui/fonts'; // Assuming kanit is an object with a CSS class name

export default function LogoBarber() {
  return (
    <div className={`${kanit.className} flex flex-row items-center leading-none text-white justify-content:end`}>
      <p className="text-[45px] kanit">Atma Barbershop</p>
      <Image
        src="/logo_hero.png"
        alt="Logo Hero"
        width={65}
        height={65}
        className="rotate-[5deg]"
        // Use inline styles for absolute positioning and right alignment
        style={{ position: 'absolute', right: '30px' }}
      />
    </div>
  );
}
