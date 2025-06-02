import React, { useEffect, useState } from "react";
import { ColorBox, ColorPickerWrapper } from "./colorSection.style";
import { useColor } from "../../../../hooks";

// const colors = [
//   { name: "Oq", code: "#ffffff" },
//   { name: "Qora", code: "#000000" },
//   { name: "Kulrang", code: "#f1f1f1" },
//   { name: "Havorang", code: "#44b8b0" },
//   { name: "Sariq", code: "#ffc107" },
//   { name: "Pushti", code: "#ff4569" },
//   { name: "Binafsharang", code: "#6f42c1" },
//   { name: "Ko'k", code: "#3b4cd4" },
// ];

const ColorSection = (props: any) => {
  const { formData, setFormData } = props;
  const { data: colors } = useColor();
  const [selectedColorId, setSelectedColorId] = useState<number | null>(
    formData.colorId || null
  );

  useEffect(() => {
    if (formData.colorId) {
      setSelectedColorId(formData.colorId);
    }
  }, [formData.colorId]);

  const handleColorClick = (color: {
    id: number;
    name: string;
    code: string;
  }) => {
    setSelectedColorId(color.id);
    setFormData({
      ...formData,
      colorId: color.id,
    });
  };

  return (
    <>
      <h2>Цвет телефона</h2>
      <ColorPickerWrapper>
        {colors?.map((color) => (
          <ColorBox
            key={color.id}
            color={color.code}
            selected={selectedColorId === color.id}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </ColorPickerWrapper>
    </>
  );
};

export default ColorSection;
