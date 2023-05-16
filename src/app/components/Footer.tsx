import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
        <p className="text-sm mt-2">Designed and developed by Siminder Bansal</p>
      </div>
    </footer>
  );
};

export default Footer;
