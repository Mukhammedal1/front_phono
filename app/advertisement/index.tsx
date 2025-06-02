import React, { useEffect, useState } from "react";
import { AdvWrapper, ContainerWrapper } from "./advertisement.style";
import BrandSection from "./components/brandSection";
import YearSection from "./components/yearSection";
import PhotoSection from "./components/photoSection";
import DescriptionSection from "./components/descriptionSection";
import PriceSection from "./components/priceSection";
import ColorSection from "./components/colorSection";
import AddressSection from "./components/addressSection";
import PhoneSection from "./components/phoneSection";
import SubmitSection from "./components/submitSection";
import MemorySection from "./components/memorySection";

const Advertisement = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    year: 0,
    ram: "",
    rom: "",
    box_with_document: false,
    is_new: false,
    is_negotiable: false,
    brand: "",
    model: "",
    lat: null,
    long: null,
    currencyId: null,
    modelId: null,
    brandId: null,
    colorId: null,
    regionId: null,
    districtId: null,
    // userId: 0,
  });

  const [imageFiles, setImageFiles] = useState<File[]>([]);

  return (
    <AdvWrapper className="container">
      <h1>Создать объявление</h1>
      <ContainerWrapper>
        <BrandSection formData={formData} setFormData={setFormData} />
      </ContainerWrapper>
      <ContainerWrapper>
        <YearSection formData={formData} setFormData={setFormData} />
      </ContainerWrapper>
      <ContainerWrapper>
        <PhotoSection onImagesChange={setImageFiles} />
      </ContainerWrapper>
      <ContainerWrapper>
        <DescriptionSection formData={formData} setFormData={setFormData} />
      </ContainerWrapper>
      <ContainerWrapper>
        <PriceSection formData={formData} setFormData={setFormData} />
      </ContainerWrapper>
      <ContainerWrapper>
        <MemorySection formData={formData} setFormData={setFormData} />
      </ContainerWrapper>
      <ContainerWrapper>
        <ColorSection formData={formData} setFormData={setFormData} />
      </ContainerWrapper>
      <ContainerWrapper>
        <AddressSection formData={formData} setFormData={setFormData} />
      </ContainerWrapper>
      <ContainerWrapper>
        <PhoneSection formData={formData} setFormData={setFormData} />
      </ContainerWrapper>
      <ContainerWrapper>
        <SubmitSection formData={formData} images={imageFiles} />
      </ContainerWrapper>
    </AdvWrapper>
  );
};

export default Advertisement;
