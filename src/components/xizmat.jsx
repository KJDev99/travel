import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation("global");
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
          <Tab
            className="font-medium text-sm "
            label={`${t("viza0")}`}
            {...a11yProps(0)}
          />
          <Tab
            className="font-medium text-sm "
            label={`${t("avia0")}`}
            {...a11yProps(1)}
          />
          <Tab
            className="font-medium text-sm "
            label={`${t("poyezd0")}`}
            {...a11yProps(2)}
          />
          <Tab
            className="font-medium text-sm "
            label={`${t("avtomobil0")}`}
            {...a11yProps(3)}
          />
          <Tab
            className="font-medium text-sm "
            label={`${t("tarjimon0")}`}
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
            <h2 className="text-[#14183E] text-[50px] font-bold text-center font-Volkhov max-md:text-[26px]">
              {t("viza0")}
            </h2>
          </div>
          <p className="text-black/80 font-medium text-lg max-md:text-sm text-justify">
            <p className="font-medium mb-4">{t("viza1")}</p>
            <p className="font-medium mb-4">{t("viza2")}</p>
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
            <h2 className="text-[#14183E] text-[50px] font-bold text-center font-Volkhov max-md:text-[26px]">
              {t("avia0")}
            </h2>
          </div>
          <p className="text-black/80 font-medium text-lg max-md:text-sm text-justify">
            <p className="font-medium mb-4">{t("avia1")}</p>
            <p className="font-medium mb-4">{t("avia2")}</p>
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
            <h2 className="text-[#14183E] text-[50px] font-bold text-center font-Volkhov max-md:text-[26px]">
              {t("poyezd0")}
            </h2>
          </div>
          <p className="text-black/80 font-medium text-lg max-md:text-sm text-justify">
            <p className="font-medium mb-4">{t("poyezd1")}</p>
            <p className="font-medium mb-4">{t("poyezd2")}</p>
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

            <h2 className="text-[#14183E] text-[50px] font-bold text-center font-Volkhov max-md:text-[26px]">
              {t("avtomobil0")}
            </h2>
          </div>
          <p className="text-black/80 font-medium text-lg max-md:text-sm text-justify">
            <p className="font-medium mb-4">{t("avtomobil1")}</p>
            <p className="font-medium mb-4">{t("avtomobil2")}</p>
            <p className="font-medium mb-4">{t("avtomobil3")}</p>
            <p className="font-medium mb-4">{t("avtomobil4")}</p>
            <p className="font-medium mb-4">{t("avtomobil5")}</p>
            <p className="font-medium mb-4">{t("avtomobil6")}</p>
            <p className="font-medium mb-4">{t("avtomobil7")}</p>
            <p className="font-medium mb-4">{t("avtomobil8")}</p>
            <p className="font-medium mb-4">{t("avtomobil9")}</p>
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
            <h2 className="text-[#14183E] text-[50px] font-bold text-center font-Volkhov max-md:text-[26px]">
              {t("tarjimon0")}
            </h2>
          </div>
          <p className="text-black/80 font-medium text-lg max-md:text-sm text-justify">
            <p className="font-medium mb-4">{t("tarjimon1")}</p>
          </p>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
