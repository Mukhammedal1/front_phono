import React, { useState } from "react";

import { useBrands, useModels } from "../../../../hooks";
import { SectionWrapper } from "./memorySection.style";

const MemorySection = (props: any) => {
  const {formData, setFormData} = props;
  const ramOptions = ["2 GB", "3 GB", "4 GB", "6 GB", "8 GB", "12 GB", "16 GB"];
  const romOptions = [
    "16 GB",
    "32 GB",
    "64 GB",
    "128 GB",
    "256 GB",
    "512 GB",
    "1 TB",
  ];

  return (
    <>
      <h2>Выберите память телефона</h2>

      <SectionWrapper>
        <h3>Выберите RAM</h3>
        <select
          name="ram"
          value={formData.ram}
          onChange={(e) => setFormData({ ...formData, ram: e.target.value })}
        >
          <option value="">Выберите RAM</option>
          {ramOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </SectionWrapper>
      <SectionWrapper>
        <h3>Выберите ROM</h3>
        <select
          name="rom"
          value={formData.rom}
          onChange={(e) => setFormData({ ...formData, rom: e.target.value })}
        >
          <option value="">Выберите ROM</option>
          {romOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </SectionWrapper>
    </>
  );
};

export default MemorySection;
