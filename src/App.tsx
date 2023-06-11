import { useState } from "react";
import "./App.css";
import oneZeroLogo from "./assets/onezero-logo.svg";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import SecondScreen from "./components/SecondScreen/SecondScreen";
import ThirdScreen from "./components/ThirdScreen/ThirdScreen";
import FourthScreen from "./components/FourthScreen/FourthScreen";
import FifthScreen from "./components/FifthScreen/FifthScreen";
import Form from "./components/Form/Form";
import FormImage from "./components/Form/FormImage";
import Qa from "./components/Qa/Qa";
import Footer from "./components/Footer/Footer";
import StickyFooter from "./components/Footer/StickyFooter";
import { MIN_DESKTOP_WIDTH } from "./constants/constants";
import { useIsScrolled } from "./hooks/useIsScrolled";

function App() {
  const isDesktop = window.screen.width >= MIN_DESKTOP_WIDTH;
  const isScrolled = useIsScrolled();
  return (
    <div>
      {isDesktop && isScrolled && <StickyFooter />}
      <FirstScreen />
      <div className="md:flex w-full md:h-[40rem]">
        <Form />
        <FormImage />
      </div>
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <FifthScreen />
      <Qa />
      <Footer />
      {!isDesktop && <StickyFooter />}
    </div>
  );
}

export default App;
