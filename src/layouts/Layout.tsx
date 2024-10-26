import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';

type LayoutProps = {
  children: React.ReactNode;
  withNavbar?: boolean;
  withFooter?: boolean;
};

export default function Layout({
  children,
  withNavbar = true,
  withFooter = true,
}: LayoutProps) {
  return (
    <>
      {withNavbar && <Navbar />}
      {children}
    </>
  );
}
