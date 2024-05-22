const Header = ({ modal }) => {
  return (
    <div className="container mx-auto mt-[66px] mb-[120px]">
      <img
        onClick={() => modal.setModal(!modal.modal)}
        className="w-full object-cover"
        src="./hero.png"
        alt="hero"
      />
    </div>
  );
};

export default Header;
