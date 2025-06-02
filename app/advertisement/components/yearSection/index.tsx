import React, { useState } from "react";
import { SectionWrapper } from "./yearSection.style";

const YearSection = (props: any) => {
  const {formData, setFormData} = props;
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = 2000; year <= currentYear; year++) {
    years.push(year);
  }
  return (
    <>
      <SectionWrapper>
        <h2>Год выпуска</h2>
        <select
          value={formData.year}
          onChange={(e) =>
            setFormData({
              ...formData,
              year: e.target.value,
            })
          }
        >
          <option value="">Выберите год выпуска</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </SectionWrapper>
    </>
  );
};

export default YearSection;
