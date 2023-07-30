import React from "react";
import oneZeroLogo from "../../assets/onezero-logo.svg";
import IconParagraph from "./IconParagraph";
import firstScreenIllustration from "../../assets/firstscreen-illustration.png";
import firstScreenIllustrationDesktop from "../../assets/firstscreen-illustration-desktop.png";
import checked from "../../assets/icons/checked-white.svg";
type Props = {};
export default function FirstScreen({}: Props) {
  return (
    <div className="bg-blue w-full h-full flex flex-col gap-2 md:gap-[1.5625rem] text-white p-5 px-6 pb-6 md:px-[4.6875rem] md:py-6 md:pb-0 md:items-stretch">
      <img
        className="self-end object-contain w-26 h-[1.4rem] mt-2 md:mt-0  md:w-30 md:h-7"
        src={oneZeroLogo}
        alt="לוגו"
      />
      <div className="max-w-[100vw] md:flex md:mt-6 md:gap-[9.125rem] md:justify-between ">
        <div className=" flex flex-col gap-4 md:gap-6 font-Digibank-Regular 3xl:self ">
          <header className="text-[24.92px] md:text-[42px] md:whitespace-nowrap">
            הלוואה עד
            <br />
            <span className="font-OneZero-Apparat-Book text-7xl leading-[71.21px] md:text-[120px] md:leading-[120px]">
              ₪200K
            </span>
            <br />
            החל מריבית פריים בלבד
          </header>
          <div className="font-Digibank-Regular leading-[16px] md:text-[26px] md:leading-4">
            <div className="flex items-start gap-2 ">
              <img className="w-[10.5px] h-[7.5px]" src={checked} alt="check" />
              עד 72 תשלומים
            </div>
            <br />
            <div className="flex  items-start gap-2">
              <img src={checked} alt="check" />
              ללא עמלת טיפול בהלוואה
            </div>
          </div>
        </div>
        <img
          className="md:hidden my-5 h-[148px]"
          src={firstScreenIllustration}
          alt="המחשה מסך ראשון"
        />
        <img
          className="hidden md:flex w-[35rem] h-3/5 3xl:w-fit 3xl:h-[35rem]"
          src={firstScreenIllustrationDesktop}
          alt="המחשה מסך ראשון"
        />

        <p className="font-Digibank-Regular text-[0.625rem] leading-none md:hidden ">
          בתוקף עד ליום 31/08/23 . אי עמידה בפירעון ההלוואה עלול
          <br />
          לגרור ריבית פיגורים והליכי הוצאה לפועל. פרסום זה אינו
          <br />
          מהווה הצעה ו/או התחייבות למתן הלוואה. אישור ההלוואה,
          <br />
          סכומה ותנאיה כפופים לתנאי הבנק ולשיקול דעתו הבלעדי
          <br />
          של הבנק.
        </p>
      </div>
      <p className="hidden md:block text-base font-Digibank-Regular leading-none mb-16">
        בתוקף עד ליום 31/08/23 . אי עמידה בפירעון ההלוואה עלול לגרור ריבית
        פיגורים והליכי
        <br />
         הוצאה לפועל. פרסום זה אינו מהווה הצעה ו/או התחייבות למתן
        הלוואה. אישור ההלוואה,
        <br />
         סכומה ותנאיה כפופים לתנאי הבנק ולשיקול דעתו
        הבלעדי של הבנק.
      </p>
    </div>
  );
}
