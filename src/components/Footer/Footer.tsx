import React from "react";
import onezeroLogoBlack from "../../assets/onezero-logo-black.svg";
type Props = {};
const termsAndConditionsLink =
  "https://www.onezerobank.com/warehouse/userUploadFiles/Image/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F%20%D7%97%D7%95%D7%93%D7%A9%D7%99%D7%99%D7%9D%20%D7%9E%D7%AA%D7%A0%D7%94%20%D7%91%D7%9E%D7%A1%D7%9C%D7%95%D7%9C%20One%20(1)%5B79%5D.pdf";
export default function Footer({}: Props) {
  return (
    <footer className=" flex flex-col py-4 px-5 items-center  md:justify-between md:px-[4.5rem] ">
      <div className="flex flex-col md:flex-row-reverse md:justify-between  md:w-full ">
        <img
          className="w-[7.5rem] self-end mt-4 mb-4 md:w-40"
          src={onezeroLogoBlack}
          alt="לוגו onezero"
        />
        <p className="md:hidden text-[0.5rem] font-Digibank-Regular text-darkgrey leading-3 opacity-70 my-4 md:text-xs 2xl:text-sm">
          <b>
            אי עמידה בפירעון ההלוואה או האשראי עלול לגרור חיוב בריבית פיגורים
            והליכי הוצאה לפועל.
          </b>
          <br/>
          תקופת הלוואה 1-84 חודשים ריבית משתנה צמודת פריים. קבלת האשראי מותנית
          בהגשת בקשה לקבלת הלוואה העמדת האשראי לפי שיקול דעתו המוחלט של הבנק
          ובכפוף לתנאיו. הפרסום איננו מהווה הצעה למתן אשראי. המלווה: וואן זירו
          הבנק הדיגיטלי בע"מ. הלוואה שאושרה על ידי הבנק תועמד בחשבון תוך יום
          עסקים ממועד הגשת בקשת ההלוואה. בקשת הלוואה שהוגשה ביום שאינו יום עסקים
          או שהוגשה ביום עסקים לאחר השעה 18:30, יראו אותה כבקשה שהתקבלה ביום
          העסקים העוקב.
          {/* <a
            className="underline"
            target="_blank"
            href={termsAndConditionsLink}
          >
            ולתקנון המבצע
          </a> */}
        </p>
        <p className="w-1/2 hidden md:block font-Digibank-Regular text-sm leading-[1.4] text-darkGrey ">
          <b>
            אי עמידה בפירעון ההלוואה או האשראי עלול לגרור חיוב בריבית פיגורים
            והליכי הוצאה לפועל.
          </b>
          <br />
          תקופת הלוואה 1-84 חודשים ריבית משתנה צמודת פריים. קבלת האשראי מותנית
          בהגשת בקשה לקבלת הלוואה העמדת האשראי לפי שיקול דעתו המוחלט של הבנק
          ובכפוף לתנאיו. הפרסום איננו מהווה הצעה למתן אשראי. המלווה: וואן זירו
          הבנק הדיגיטלי בע"מ. הלוואה שאושרה על ידי הבנק תועמד בחשבון תוך יום
          עסקים ממועד הגשת בקשת ההלוואה. בקשת הלוואה שהוגשה ביום שאינו יום עסקים
          או שהוגשה ביום עסקים לאחר השעה 18:30, יראו אותה כבקשה שהתקבלה ביום
          העסקים העוקב.
          {/* <a
            target="_blank"
            className="underline"
            href={termsAndConditionsLink}
          >
            ולתקנון המבצע
          </a> */}
        </p>
      </div>
      <p className="font-Digibank-Regular text-[0.5rem] text-darkGrey md:text-sm text-start  self-start ">
        {" "}
        בית עובד 5, תל אביב.
      </p>
    </footer>
  );
}
