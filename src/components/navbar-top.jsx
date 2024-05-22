const NavbarTop = () => {
  return (
    <div className="container mx-auto max-md:hidden">
      <div className="flex justify-center my-3">
        <a className="flex mx-4">
            <img src="./adress.svg" alt="email" />
            <p className="ml-3 text-[14px] text-[rgba(0,0,0,0.6)]">Abdulla qodiry ko’chasi,  12A uy</p>
        </a>
        <a href="mailto:elyorabdumalikov@gmail.com" className="flex mx-4">
            <img src="./email.svg" alt="email" />
            <p className="ml-3 text-[14px] text-[rgba(0,0,0,0.6)]">elyorabdumalikov@gmail.com</p>
        </a>
        <a href="tel:+998900108510" className="flex mx-4">
            <img src="./phone.svg" alt="email" />
            <p className="ml-3 text-[14px] text-[rgba(0,0,0,0.6)]">+998 90 010-85-10</p>
        </a>
      </div>
    </div>
  );
};

export default NavbarTop;
