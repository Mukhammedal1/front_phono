import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetPhoneById } from "../../hooks";
import {
  AdvWrapper,
  ContainerWrapper,
} from "../advertisement/advertisement.style";
import BrandSection from "../advertisement/components/brandSection";
import YearSection from "../advertisement/components/yearSection";
import PhotoSection from "../advertisement/components/photoSection";
import PriceSection from "../advertisement/components/priceSection";
import DescriptionSection from "../advertisement/components/descriptionSection";
import MemorySection from "../advertisement/components/memorySection";
import ColorSection from "../advertisement/components/colorSection";
import AddressSection from "../advertisement/components/addressSection";
import SubmitSection from "../advertisement/components/submitSection";

const AdvertisementOne = () => {
  const router = useRouter();
  const { advertiseId } = router.query;
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

  const [defaultImages, setDefaultImages] = useState<
    { id: number; url: string }[]
  >([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [deletedImages, setDeletedImages] = useState<number[]>([]);
  const { data: phoneData, isLoading } = useGetPhoneById(Number(advertiseId));

  useEffect(() => {
    if (phoneData) {
      const {
        id,
        posted_date,
        views,
        like_counts,
        is_active,
        is_checked,
        is_archived,
        is_deleted,
        Currency,
        Models,
        Brands,
        Color,
        User,
        Region,
        District,
        Address,
        Images,
        Reviews,
        ...cleanedData
      } = phoneData;
      setFormData({
        ...cleanedData,
      });
      if (phoneData.Images) {
        setDefaultImages(phoneData.Images);
      }
    }
  }, [phoneData]);

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <AdvWrapper className="container">
      <h1>Редактировать объявление</h1>
      <ContainerWrapper>
        <BrandSection formData={formData} setFormData={setFormData} />
      </ContainerWrapper>
      <ContainerWrapper>
        <YearSection formData={formData} setFormData={setFormData} />
      </ContainerWrapper>
      <ContainerWrapper>
        <PhotoSection
          defaultImages={defaultImages}
          onRemoveDefaultImage={(id) => {
            const updated = defaultImages.filter((img) => img.id !== id);
            setDefaultImages(updated);
            setDeletedImages((prev) => [...prev, id]);
          }}
          onImagesChange={(files) => {
            setSelectedFiles(files);
          }}
        />
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
        <SubmitSection
          formData={formData}
          images={[...defaultImages, ...selectedFiles]}
          isUpdate={true}
          phoneId={advertiseId}
          deletedImages={deletedImages}
        />
      </ContainerWrapper>
    </AdvWrapper>
  );
};

export default AdvertisementOne;
