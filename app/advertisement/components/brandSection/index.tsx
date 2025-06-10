import React, { useState } from "react";
import {
  SectionWrapper,
  SectionWrapper2,
  TabWrapper,
} from "./brandSection.style";
import { useBrands, useModels } from "../../../../hooks";

const BrandSection = (props: any) => {
  const { formData, setFormData } = props;
  const [clicked, setClicked] = useState(true);
  const { data: brands } = useBrands();
  const { data: models } = useModels();

  return (
    <>
      <h2>Выберите бренд телефона</h2>
      <TabWrapper>
        <button
          onClick={() => setClicked(true)}
          className={clicked ? "active" : ""}
        >
          Выбрать
        </button>
        <button
          onClick={() => setClicked(false)}
          className={!clicked ? "active" : ""}
        >
          Ввести вручную
        </button>
      </TabWrapper>
      {clicked ? (
        <>
          <SectionWrapper>
            <h3>Выберите бренд</h3>
            <select
              value={formData.brandId}
              onChange={(e) => {
                const brandId = +e.target.value;
                const selectedBrand = brands?.find((b) => b.id === brandId);
                const selectedModel = models?.find(
                  (m) => m.id === formData.modelId
                );

                setFormData({
                  ...formData,
                  brandId,
                  title:
                    selectedBrand && selectedModel
                      ? `${selectedBrand.name} ${selectedModel.name}`
                      : formData.title,
                });
              }}
            >
              <option value="">Выберите бренд телефона</option>
              {brands?.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </SectionWrapper>
          <SectionWrapper>
            <h3>Выберите модель</h3>
            <select
              value={formData.modelId}
              onChange={(e) => {
                const modelId = +e.target.value;
                const selectedModel = models?.find((m) => m.id === modelId);
                const selectedBrand = brands?.find(
                  (b) => b.id === formData.brandId
                );

                setFormData({
                  ...formData,
                  modelId,
                  title:
                    selectedBrand && selectedModel
                      ? `${selectedBrand.name} ${selectedModel.name}`
                      : formData.title,
                });
              }}
            >
              <option value="">Выберите модель телефона</option>
              {models
                ?.filter((model) => model.brandId === formData.brandId)
                .map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
            </select>
          </SectionWrapper>
        </>
      ) : (
        <>
          <SectionWrapper2>
            <h3>Выберите бренд</h3>
            <input
              value={formData.brand}
              onChange={(e) => {
                const newBrand = e.target.value;
                setFormData({
                  ...formData,
                  brand: newBrand,
                  title:
                    newBrand && formData.model
                      ? `${newBrand} ${formData.model}`
                      : "",
                });
              }}
              type="text"
              placeholder="Выберите бренд телефона"
            />
          </SectionWrapper2>
          <SectionWrapper2>
            <h3>Выберите модель</h3>
            <input
              value={formData.model}
              onChange={(e) => {
                const newModel = e.target.value;
                setFormData({
                  ...formData,
                  model: newModel,
                  title:
                    formData.brand && newModel
                      ? `${formData.brand} ${newModel}`
                      : "",
                });
              }}
              type="text"
              placeholder="Выберите модель телефона"
            />
          </SectionWrapper2>
        </>
      )}
    </>
  );
};

export default BrandSection;
