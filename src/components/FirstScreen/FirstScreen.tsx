import React from "react";
import oneZeroLogo from "../../assets/onezero-logo.svg";
import IconParagraph from "./IconParagraph";
import firstScreenIllustration from "../../assets/firstscreen-illustration.png";
import firstScreenIllustrationDesktop from "../../assets/firstscreen-illustration-desktop.png";

type Props = {};
export default function FirstScreen({}: Props) {
  return (
    <div className="bg-blue w-full h-full flex flex-col gap-[1.5625rem] text-white p-5 px-6 pb-6 md:px-[4.6875rem] md:py-6 md:pb-0 md:items-stretch">
      <img
        className="self-end object-contain w-26 h-[1.4rem] mt-2 md:mt-0  md:w-30 md:h-7"
        src={oneZeroLogo}
        alt="לוגו"
      />
      <div className="max-w-[100vw] md:flex md:mt-6 md:gap-[9.125rem] md:justify-between ">
        <div className=" flex flex-col gap-4 md:gap-6 font-Digibank-Regular 3xl:self ">
          <h2 className="text-[2.875rem] leading-none md:text-[6.9875rem] md:leading-[0.95]  md:whitespace-nowrap">
            אין
            <br />
            פיקדונות
            <br />
            כאלה.
          </h2>
          <div className="font-Digibank-Regular leading-[34px] md:text-[1.625rem]">
            4.5% ריבית משתנה,
            <br />
            ניתן למשוך את הכסף בכל עת,
            <br />
            ללא מינימום הפקדה.
          </div>
        </div>
        <img
          className="md:hidden my-8"
          src={firstScreenIllustration}
          alt="המחשה מסך ראשון"
        />
        <img
          className="hidden md:flex w-[35rem] h-3/5 3xl:w-fit 3xl:h-[35rem]"
          src={firstScreenIllustrationDesktop}
          alt="המחשה מסך ראשון"
        />

        <p className="font-Digibank-Regular text-[0.625rem] leading-none md:hidden ">
          בכפוף לתנאי הבנק והפיקדון. בריבית משתנה, בהפקדה חד
          <br />
          פעמית לשנה, ניתן לשבור את הפיקדון בכל עת ולקבל את
          <br />
          הקרן עם 10% מהריבית המקורית של הפיקדון.{" "}
        </p>
      </div>
      <p className="text-base font-Digibank-Regular leading-none mb-16">
        בכפוף לתנאי הבנק והפיקדון. בריבית משתנה, בהפקדה חד פעמית לשנה, ניתן
        לשבור
        <br />
        את הפיקדון בכל עת ולקבל את הקרן עם 10% מהריבית המקורית של הפיקדון.
      </p>
    </div>
  );
}
