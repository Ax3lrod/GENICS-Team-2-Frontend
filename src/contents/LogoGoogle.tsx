import NextImage from '@/components/NextImage';

export default function logo() {
  return (
    <div className='w-fit h-fit'>
      <NextImage
        src='/register/logo-google.png'
        alt='logo google'
        width={26}
        height={26}
        className='max-w-full h-auto'
      />
    </div>
  );
}
