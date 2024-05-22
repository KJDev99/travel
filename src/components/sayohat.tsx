const Sayohat = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-[#14183E] text-[50px] font-bold mb-8 mt-[120px] max-md:text-4xl">
        Sayohat uchun tanlovlar
      </h2>
      <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[40px] max-md:gap-[60px] mb-[100px]">
        <div className="tur_item">
          <img className="w-full" src="./test.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px]">Rome, Italty</h3>
        </div>
        <div className="tur_item">
          <img className="w-full" src="./test.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px]">Rome, Italty</h3>
        </div>
        <div className="tur_item">
          <img className="w-full" src="./test.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px]">Rome, Italty</h3>
        </div>
      </div>
    </div>
  );
};

export default Sayohat;
