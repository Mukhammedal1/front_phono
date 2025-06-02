import React, { useState } from "react";
import { SectionWrapper } from "./phoneSection.style";
import { useUserById } from "../../../../hooks";

const PhoneSection = (props:any) => {
  // const userId = localStorage.getItem("userId");
  // const { data: user } = useUserById(Number(userId));

  return (
    <>
      <SectionWrapper>
        <h2>Номер телефона</h2>
        {/* {user?.PhoneNumbers.map((phone) => (
          <label className="label" htmlFor="">
            <input type="radio" name="phone" />
            {phone.number}
          </label>
        ))} */}
      </SectionWrapper>
    </>
  );
};

export default PhoneSection;
