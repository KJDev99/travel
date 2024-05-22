import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between mb-10 max-md:flex-col">
        <div className="w-1/4 max-md:w-full max-md:flex flex-col max-md:items-center">
          <img className="mb-4 max-md:w-[160px]" src="./Logo.svg" alt="Logo" />
          <div className="flex">
            <img className="mr-8" src="./sertifikat1.png" alt="sertifikat1" />
            <img src="./sertifikat2.png" alt="sertifikat2" />
          </div>
        </div>
        <div className="w-1/4 max-md:w-full max-md:flex flex-col max-md:items-center">
          <h3 className="font-semibold mb-4 max-md:my-2">Biz haqimizda</h3>
          <p className="font-normal mb-6 max-md:mb-2">Home</p>
          <p className="font-normal mb-6 max-md:mb-2">Biz haqimizda</p>
          <p className="font-normal mb-6 max-md:mb-2">Xizmarlar</p>
        </div>
        <div className="w-1/4 max-md:w-full max-md:flex flex-col max-md:items-center">
          <h3 className="font-semibold mb-4 max-md:my-2">Turizm turlari</h3>
          <p className="font-normal mb-6 max-md:mb-2">Ichki turizm</p>
          <p className="font-normal mb-6 max-md:mb-2">Tashqi turizm</p>
          <p className="font-normal mb-6 max-md:mb-2">Kiruvchi turizm</p>
          <p className="font-normal mb-6 max-md:mb-2">Mehmonhonalar</p>
        </div>
        <div className="w-1/4 max-md:w-full max-md:flex flex-col max-md:items-center">
          <h3 className="font-semibold mb-4 max-md:my-2">Kontaktlar</h3>
          <a className="flex mb-6">
            <img className="mr-3" src="./adress.svg" alt="email" />
            <p className="text-[14px] text-[rgba(0,0,0,0.6)]">
              Abdulla qodiry ko’chasi, 12A uy
            </p>
          </a>
          <a href="mailto:elyorabdumalikov@gmail.com" className="flex mb-6">
            <img className="mr-3" src="./email.svg" alt="email" />
            <p className="text-[14px] text-[rgba(0,0,0,0.6)]">
              elyorabdumalikov@gmail.com
            </p>
          </a>
          <a href="tel:+998900108510" className="flex mb-6">
            <img className="mr-3" src="./phone.svg" alt="email" />
            <p className="text-[14px] text-[rgba(0,0,0,0.6)]">
              +998 90 010-85-10
            </p>
          </a>
          <div className="flex">
            <div className="h-10 w-10 mr-6 rounded-full icon_shadow">
              <FaFacebookF className="" />
            </div>
            <div className="h-10 w-10 mr-6 rounded-full icon_shadow">
              <FaInstagram className="" />
            </div>
            <div className="h-10 w-10 mr-6 rounded-full icon_shadow">
              <FaTwitter className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
