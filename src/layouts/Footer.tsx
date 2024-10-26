import { socialMedia } from '@/contents/socialMedia';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='bg-primary px-10 md:px-12 lg:px-16 py-11 text-white flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-20 text-sm md:text-base'>
      <div className='flex flex-col gap-4 md:gap-6 md:w-1/2 lg:w-1/3'>
        <Image
          src='/images/logo-white.svg'
          width={100}
          height={100}
          alt='logo'
          className='object-contain w-1/2 sm:w-1/3 md:w-1/2'
        />
        <p>
          Ikuti ShareITS di media sosial untuk berbagi modul, dan informasi
          terbaru seputar dunia akademik. Dapatkan akses ke sumber daya belajar
          dan jadilah bagian dari komunitas yang saling berbagi pengetahuan!
        </p>
        <div className='flex gap-2'>
          {socialMedia.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target='_blank'
              className='h-10 w-10 bg-white text-xl text-primary rounded-full flex items-center justify-center'
            >
              <item.icon />
            </Link>
          ))}
        </div>
        <p className='font-semibold'>&copy;{year} ShareITS</p>
      </div>
      <div className='flex flex-col gap-4 md:w-1/2 lg:w-1/3'>
        <p className='font-semibold'>Informasi</p>
        <div className='flex flex-col gap-3'>
          <Link href='mailto:shareits@its.ac.id' target='_blank'>
            shareits@its.ac.id
          </Link>
          <p>0878-9895-2895</p>
          <p>Kampus ITS Keputih, Sukolilo, Surabaya 60111, Jawa Timur</p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15830.538195771953!2d112.7949253!3d-7.282356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa1323221a93%3A0x306c3c99adedb258!2sInstitut%20Teknologi%20Sepuluh%20Nopember!5e0!3m2!1sid!2sid!4v1729919617611!5m2!1sid!2sid'
            width='400'
            height='300'
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full h-full'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
