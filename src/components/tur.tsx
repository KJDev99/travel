const Tur = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-[#14183E] text-[50px] font-bold mb-8 max-md:text-4xl">
        Qaynoq turlar
      </h2>
      <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[40px] max-md:gap-[60px] mb-[100px] relative">
        <div className="tur_item">
          <img className="w-full" src="./test.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-[#5E6282]">Rome, Italty</h3>
          <div className="flex justify-between px-8">
            <div className="flex">
              <img src="./clock.svg" alt="" />
              <p className="ml-4 text-[#5E6282]">10 kun</p>
            </div>
            <p className="text-[#5E6282]">1 mln so’m</p>
          </div>
        </div>
        <div className="tur_item">
          <img className="w-full" src="./test.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-[#5E6282]">Rome, Italty</h3>
          <div className="flex justify-between px-8">
            <div className="flex">
              <img src="./clock.svg" alt="" />
              <p className="ml-4 text-[#5E6282]">10 kun</p>
            </div>
            <p className="text-[#5E6282]">1 mln so’m</p>
          </div>
        </div>
        <div className="tur_item">
          <img className="w-full" src="./test.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-[#5E6282]">Rome, Italty</h3>
          <div className="flex justify-between px-8">
            <div className="flex">
              <img src="./clock.svg" alt="" />
              <p className="ml-4 text-[#5E6282]">10 kun</p>
            </div>
            <p className="text-[#5E6282]">1 mln so’m</p>
          </div>
        </div>
        
        <div className="max-md:hidden absolute right-[-65px] z-[-1] top-12">
          <img src="./Decore.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tur;
