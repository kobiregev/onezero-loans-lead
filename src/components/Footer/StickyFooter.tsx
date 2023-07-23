//@ts-nocheck
import React, { useEffect, useState } from "react";
import IconButton from "../Ui/IconButton";
import leftArrow from "../../assets/icons/arrow-left-white.svg";
import call from "../../assets/icons/call.svg";
import phone from "../../assets/icons/phone.svg";
import Dialog from "../Ui/Dialog";
import QrDialog from "../QrDialog/QrDialog";
import {
  MIN_DESKTOP_WIDTH,
  ONEZERO_DISPATCH_PHONE_NUMBER,
} from "../../constants/constants";
import { openAppStore } from "../../utils/openAppStore";
import { isDispatchOpen } from "../../utils/onezeroDispatch";
type Props = {};

export default function StickyFooter({}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleClick() {
    if (window.screen.width >= MIN_DESKTOP_WIDTH) {
      setIsDialogOpen(true);
      return;
    }
    openAppStore();
  }

  const isVisibleStyle = isDispatchOpen() ? "flex" : "hidden";
  const isVisibleContainerStyle = isDispatchOpen()
    ? "justify-between"
    : "justify-center md:justify-between";
    useEffect(() => {
      let counter = 0;
      const interval = setInterval(() => {
        msq_r(function () {
          var pixel_settings = {
            setting_api_key: "462-716ad1-bef",
            setting_debug: true,
            setting_wait4async: true,
            setting_ignore_cookies: false,
            setting_retry_load_Interval: 400,
            setting_delay_load: 5,
            setting_disable_autorun: true,
          };
          let isSuccessfullyReplaced = [];
          const msq_pixel = new MSQ(pixel_settings);
          msq_pixel.referrer_replace_selector_link_tel(
            "#onezeroCallButton",
            "073-7823322",
            "*",
            "073-7823322"
          );
          isSuccessfullyReplaced.push(
            msq_pixel.referrer_replace_selector_link_tel(
              "#onezeroCallButton",
              "073-7794171",
              "google",
              "073-7794171"
            )
          );
  
          isSuccessfullyReplaced.push(
            msq_pixel.referrer_replace_selector_link_tel(
              "#onezeroCallButton",
              "073-7819560",
              "facebook",
              "073-7819560"
            )
          );
  
          isSuccessfullyReplaced.push(
            msq_pixel.referrer_replace_selector_link_tel(
              "#onezeroCallButton",
              "073-7824960",
              "gclid",
              "073-7824960"
            )
          );
  
          isSuccessfullyReplaced.push(
            msq_pixel.referrer_replace_selector_link_tel(
              "#onezeroCallButton",
              "073-7824960",
              "wbraid",
              "073-7824960"
            )
          );
  
          isSuccessfullyReplaced.push(
            msq_pixel.referrer_replace_selector_link_tel(
              "#onezeroCallButton",
              "073-7842629",
              "pmax",
              "073-7842629"
            )
          );
          isSuccessfullyReplaced.push(
            msq_pixel.referrer_replace_selector_link_tel(
              "#onezeroCallButton",
              "073-7823737",
              "discovery",
              "073-7823737"
            )
          );
      
  
          if (isSuccessfullyReplaced.some((value) => value) || counter === 2) {
            clearInterval(interval);
          }
          msq_pixel.push("__ga4_tid", "G-SGHQKQ4T4S");
          msq_pixel.process();
          counter++;
        });
        function msq_r(f) {
          /in/.test(document.readyState)
            ? setTimeout("msq_r(" + f + ")", 9)
            : f();
        }
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  return (
    <>
      <div
        className={`sticky bottom-0 flex w-full items-center  ${isVisibleContainerStyle} px-3 z-10 bg-white py-2.5 md:py-[1.125rem] drop-shadow-re md:px-[2.5rem]  md:top-0 md:grid md:grid-cols-3  justify-between`}
      >
        <IconButton
          onClick={handleClick}
          className="self-center text-white bg-blue rounded-3xl py-3 px-6 w-fit font-Digibank-Medium text-base leading-[1.2rem]"
          iconPosition="end"
          text="להתנסות ופתיחת חשבון"
          icon={
            <img
              src={leftArrow}
              className="w-4 h-4 align-baseline"
              alt="חץ שמאלה"
            />
          }
        />
        <p
          className={`hidden md:block ${isVisibleStyle}  text-darkGrey font-Digibank-Regular text-base justify-self-center`}
        >
          חודשיים התנסות חינם
        </p>
        <a
          id="onezeroCallButton"
          className={`md:hidden onezeroCallButton p-0  flex-col items-center gap-2 font-Digibank-Regular text-[0.63rem] leading-none md:leading-3 md:flex-row-reverse md:text-base md:gap-4 ${isVisibleStyle}`}
          href={`tel:${ONEZERO_DISPATCH_PHONE_NUMBER}`}
        >
          <img className="w-[1.375rem] h-[1.375rem]" src={phone} />
          שיחה עם נציג
        </a>
        <p className="hidden md:block justify-self-end text-base font-Digibank-Regular text-neutral-700">
          6121*
        </p>

        {/* <img src={call} alt="שיחה עם נציג" /> */}
      </div>
      <QrDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
