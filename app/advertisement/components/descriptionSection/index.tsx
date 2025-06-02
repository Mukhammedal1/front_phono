import React from "react";
import { SectionWrapper } from "./descriptionSection.style";

const DescriptionSection = (props: any) => {
  const {formData, setFormData} = props;
  return (
    <SectionWrapper>
      <h2>Описание</h2>
      <textarea
        placeholder="Напишите что-нибудь..."
        value={formData.description || ""}
        onChange={(e) =>
          setFormData({
            ...formData,
            description: e.target.value,
          })
        }
        maxLength={1000}
      />
      <p>Максимум 1000 символов</p>
    </SectionWrapper>
  );
};

export default DescriptionSection;
