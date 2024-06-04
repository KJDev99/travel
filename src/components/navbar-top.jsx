import { useTranslation } from "react-i18next";

const NavbarTop = () => {
  const [t] = useTranslation("global");
  return (
    <div className="container mx-auto max-md:hidden">
      <div className="flex justify-between my-3">
        <a className="flex mx-4">
          <img src="./adress.svg" alt="email" />
          <p className="ml-3 text-[14px] text-[rgba(0,0,0,0.6)]">
            {t("manzil")}
          </p>
        </a>
        <div className="flex">
          <a href="mailto:atlasluxeuz@gmail.com" className="flex mx-4">
            <img src="./email.svg" alt="email" />
            <p className="ml-3 text-[14px] text-[rgba(0,0,0,0.6)]">
              atlasluxeuz@gmail.com
            </p>
          </a>
          <a href="tel:+998932550909" className="flex mx-4">
            <img src="./phone.svg" alt="email" />
            <p className="ml-3 text-[14px] text-[rgba(0,0,0,0.6)]">
              +998 93 255-09-09
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
