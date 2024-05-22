import React from "react";

const About = () => {
  return (
    <div className="container mx-auto">
      <h2 className="mt-[58px] mb-4 text-[#14183E] text-[50px] font-bold">
        Biz haqimizda
      </h2>
      <p className="font-medium mb-4">
        O'zbekiston fuqarolari uchun viza xizmatlari
      </p>
      <p className="font-medium mb-4">
        Mamlakatlar o'rtasidagi viza rejimi xalqaro munosabatlar va
        sayohatlarning muhim jihati hisoblanadi. O‘zbekiston fuqarolari uchun
        ham, boshqa davlat fuqarolari uchun ham xorijiy davlatlarga borish uchun
        viza olishning ma’lum talablari va tartiblari mavjud.
      </p>
      <p className="font-medium mb-4">Viza olish tartibi</p>
      <p className="font-medium mb-4">
        O‘zbekiston fuqarolari viza olish uchun muayyan tartib-qoidalarga rioya
        qilishlari kerak. Bunga ariza topshirish, pasport va fotosuratlar kabi
        kerakli hujjatlarni taqdim etish va viza toʻlovini toʻlash kiradi. Ba'zi
        hollarda siz sayohat qilishni rejalashtirayotgan mamlakatning konsulligi
        yoki elchixonasida shaxsiy suhbat talab qilinishi mumkin.
      </p>
      <p className="font-medium mb-4">Elektron vizalar (eVisa)</p>
      <p className="font-medium mb-4">
        Viza jarayonini soddalashtirish uchun ko'plab mamlakatlar elektron viza
        (eVisa) xizmatini taklif qiladi. Bu O‘zbekiston fuqarolariga onlayn
        tarzda viza olish va uni elektron shaklda olish imkonini beradi³. eVisa
        uchun ariza berish va olish jarayoni odatda standart viza tartibiga
        qaraganda tezroq va qulayroqdir.
      </p>
      <p className="font-medium mb-4">
        O‘zbekiston fuqarolari uchun viza xizmatlari boradigan davlatga qarab
        turli tartib va ​​talablarni o‘z ichiga oladi. Barcha kerakli hujjatlar
        o'z vaqtida va to'g'ri bajarilishini ta'minlash uchun viza qoidalari va
        talablari bilan oldindan tanishib chiqish muhimdir. Elektron vizalar
        O‘zbekiston fuqarolari uchun xalqaro sayohatlarni yanada qulayroq qilib,
        kirish ruxsatnomasini olishning qulay va tezkor usulini taklif etadi.
      </p>
      <p className="font-medium mb-4">
        EASYBOOKING kompaniyasi viza xizmatlarini taqdim etadi; agar sizga
        malakali yordam kerak bo'lsa, bizning operatorlarimizga murojaat qiling.
      </p>
      <h2 className=" mb-10 text-[#14183E] text-[32px] font-bold mt-[70px] text-center">
        Bizning sertifikatlarimiz
      </h2>
      <div className="flex justify-around max-md:flex-col mb-16">
        <img className="w-[290px]" src="./11.webp" alt="sertifikat1" />
        <img className="w-[290px]" src="./22.webp" alt="sertifikat2" />
      </div>
    </div>
  );
};

export default About;
