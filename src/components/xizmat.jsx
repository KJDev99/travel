import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="container mx-auto mb-20" sx={{ width: "100%" }}>
      <Box
        className="overflow-x-auto scroll"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
          className="flex flex-col justify-center mx-auto w-max bg-tabs-bg mt-[45px] rounded-xl font-medium "
        >
          <Tab className="font-medium text-sm" label="Viza" {...a11yProps(0)} />
          <Tab
            className="font-medium text-sm"
            label="Avia bilet"
            {...a11yProps(1)}
          />
          <Tab
            className="font-medium text-sm"
            label="Poyezd bilet"
            {...a11yProps(2)}
          />
          <Tab
            className="font-medium text-sm"
            label="Avtomobil"
            {...a11yProps(3)}
          />
          <Tab
            className="font-medium text-sm"
            label="Tarjimon"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="">
          <div className="flex items-center mb-5">
            <img
              className="max-md:w-[90px] md:mr-10 max-md:mr-3"
              src="./pilottt.svg"
              alt=""
            />
            <h2 className="text-[#14183E] text-[50px] font-bold text-center max-md:text-[26px]">
              Vizalarni olib berish
            </h2>
          </div>
          <p className="text-black/80 font-medium max-md:text-sm text-justify">
            O'zbekiston fuqarolari uchun viza xizmatlari Mamlakatlar o'rtasidagi
            viza rejimi xalqaro munosabatlar va sayohatlarning muhim jihati
            hisoblanadi. O‘zbekiston fuqarolari uchun ham, boshqa davlat
            fuqarolari uchun ham xorijiy davlatlarga borish uchun viza olishning
            ma’lum talablari va tartiblari mavjud. Viza olish tartibi
            O‘zbekiston fuqarolari viza olish uchun muayyan tartib-qoidalarga
            rioya qilishlari kerak. Bunga ariza topshirish, pasport va
            fotosuratlar kabi kerakli hujjatlarni taqdim etish va viza toʻlovini
            toʻlash kiradi. Ba'zi hollarda siz sayohat qilishni
            rejalashtirayotgan mamlakatning konsulligi yoki elchixonasida
            shaxsiy suhbat talab qilinishi mumkin. Elektron vizalar (eVisa) Viza
            jarayonini soddalashtirish uchun ko'plab mamlakatlar elektron viza
            (eVisa) xizmatini taklif qiladi. Bu O‘zbekiston fuqarolariga onlayn
            tarzda viza olish va uni elektron shaklda olish imkonini beradi³.
            eVisa uchun ariza berish va olish jarayoni odatda standart viza
            tartibiga qaraganda tezroq va qulayroqdir. O‘zbekiston fuqarolari
            uchun viza xizmatlari boradigan davlatga qarab turli tartib o‘z
            ichiga oladi. Barcha kerakli hujjatlar o'z vaqtida va to'g'ri
            bajarilishini ta'minlash uchun viza qoidalari va talablari bilan
            oldindan tanishib chiqish muhimdir. Elektron vizalar O‘zbekiston
            fuqarolari uchun xalqaro sayohatlarni yanada qulayroq qilib, kirish
            ruxsatnomasini olishning qulay va tezkor usulini taklif etadi. ATLAS
            LUXE kompaniyasi viza xizmatlarini taqdim etadi; agar sizga malakali
            yordam kerak bo'lsa, bizning operatorlarimizga murojaat qiling.
          </p>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="">
          <div className="flex items-center mb-5">
            <img
              className="max-md:w-[90px] md:mr-10 max-md:mr-3"
              src="./hizmat2.svg"
              alt=""
            />
            <h2 className="text-[#14183E] text-[50px] font-bold text-center max-md:text-[26px]">
              Avia bilet
            </h2>
          </div>
          <p className="text-black/80 font-medium max-md:text-sm text-justify">
            O‘zbekiston fuqarolari uchun viza xizmatlari boradigan davlatga
            qarab turli tartib  o‘z ichiga oladi. Barcha kerakli
            hujjatlar o'z vaqtida va to'g'ri bajarilishini ta'minlash uchun viza
            qoidalari va talablari bilan oldindan tanishib chiqish muhimdir.
            Elektron vizalar O‘zbekiston fuqarolari uchun xalqaro sayohatlarni
            yanada qulayroq qilib, kirish ruxsatnomasini olishning qulay va
            tezkor usulini taklif etadi. ATLAS LUXE kompaniyasi viza
            xizmatlarini taqdim etadi; agar sizga malakali yordam kerak bo'lsa,
            bizning operatorlarimizga murojaat qiling.
          </p>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="">
          <div className="flex items-center mb-5">
            <img
              className="max-md:w-[90px] md:mr-10 max-md:mr-3"
              src="./hizmat3.svg"
              alt=""
            />
            <h2 className="text-[#14183E] text-[50px] font-bold text-center max-md:text-[26px]">
              Poyezd bilet
            </h2>
          </div>
          <p className="text-black/80 font-medium max-md:text-sm text-justify">
            O'zbekiston fuqarolari uchun viza xizmatlari Mamlakatlar o'rtasidagi
            viza rejimi xalqaro munosabatlar va sayohatlarning muhim jihati
            hisoblanadi. O‘zbekiston fuqarolari uchun ham, boshqa davlat
            fuqarolari uchun ham xorijiy davlatlarga borish uchun viza olishning
            ma’lum talablari va tartiblari mavjud. Viza olish tartibi
            O‘zbekiston fuqarolari viza olish uchun muayyan tartib-qoidalarga
            rioya qilishlari kerak. Bunga ariza topshirish, pasport va
            fotosuratlar kabi kerakli hujjatlarni taqdim etish va viza toʻlovini
            toʻlash kiradi. Ba'zi hollarda siz sayohat qilishni
            rejalashtirayotgan mamlakatning konsulligi yoki elchixonasida
            shaxsiy suhbat talab qilinishi mumkin. Elektron vizalar (eVisa) Viza
            jarayonini soddalashtirish uchun ko'plab mamlakatlar elektron viza
            (eVisa) xizmatini taklif qiladi. Bu O‘zbekiston fuqarolariga onlayn
            tarzda viza olish va uni elektron shaklda olish imkonini beradi³.
            eVisa uchun ariza berish va olish jarayoni odatda standart viza
            tartibiga qaraganda tezroq va qulayroqdir. O‘zbekiston fuqarolari
            uchun viza xizmatlari boradigan davlatga qarab turli tartib o‘z
            ichiga oladi. Barcha kerakli hujjatlar o'z vaqtida va to'g'ri
            bajarilishini ta'minlash uchun viza qoidalari va talablari bilan
            oldindan tanishib chiqish muhimdir. Elektron vizalar O‘zbekiston
            fuqarolari uchun xalqaro sayohatlarni yanada qulayroq qilib, kirish
            ruxsatnomasini olishning qulay va tezkor usulini taklif etadi. ATLAS
            LUXE kompaniyasi viza xizmatlarini taqdim etadi; agar sizga malakali
            yordam kerak bo'lsa, bizning operatorlarimizga murojaat qiling.
          </p>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="">
          <div className="flex items-center mb-5">
            <img
              className="max-md:w-[90px] md:mr-10 max-md:mr-3"
              src="./carrr.png"
              alt=""
            />

            <h2 className="text-[#14183E] text-[50px] font-bold text-center max-md:text-[26px]">
              Avtomobil
            </h2>
          </div>
          <p className="text-black/80 font-medium max-md:text-sm text-justify">
            O'zbekiston fuqarolari uchun viza xizmatlari Mamlakatlar o'rtasidagi
            viza rejimi xalqaro munosabatlar va sayohatlarning muhim jihati
            hisoblanadi. O‘zbekiston fuqarolari uchun ham, boshqa davlat
            fuqarolari uchun ham xorijiy davlatlarga borish uchun viza olishning
            ma’lum talablari va tartiblari mavjud. Viza olish tartibi
            O‘zbekiston fuqarolari viza olish uchun muayyan tartib-qoidalarga
            rioya qilishlari kerak. Bunga ariza topshirish, pasport va
            fotosuratlar kabi kerakli hujjatlarni taqdim etish va viza toʻlovini
            toʻlash kiradi. Ba'zi hollarda siz sayohat qilishni
            rejalashtirayotgan mamlakatning konsulligi yoki elchixonasida
            shaxsiy suhbat talab qilinishi mumkin.
          </p>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className="">
          <div className="flex items-center mb-5">
            <img
              className="max-md:w-[90px] md:mr-10 max-md:mr-3"
              src="./hizmat4.svg"
              alt=""
            />
            <h2 className="text-[#14183E] text-[50px] font-bold text-center max-md:text-[26px]">
              Tarjimon
            </h2>
          </div>
          <p className="text-black/80 font-medium max-md:text-sm text-justify">
            O‘zbekiston fuqarolari uchun viza xizmatlari boradigan davlatga
            qarab turli tartib  o‘z ichiga oladi. Barcha kerakli
            hujjatlar o'z vaqtida va to'g'ri bajarilishini ta'minlash uchun viza
            qoidalari va talablari bilan oldindan tanishib chiqish muhimdir.
            Elektron vizalar O‘zbekiston fuqarolari uchun xalqaro sayohatlarni
            yanada qulayroq qilib, kirish ruxsatnomasini olishning qulay va
            tezkor usulini taklif etadi. ATLAS LUXE kompaniyasi viza
            xizmatlarini taqdim etadi; agar sizga malakali yordam kerak bo'lsa,
            bizning operatorlarimizga murojaat qiling.
          </p>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
