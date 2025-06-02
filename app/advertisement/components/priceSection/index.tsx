import React, { useEffect } from "react";
import { InputWrapper, SectionWrapper } from "./priceSection.style";
import { useCurrency } from "../../../../hooks";

const PriceSection = (props: any) => {
  const { formData, setFormData } = props;
  const { data: currencies } = useCurrency();

  useEffect(() => {
    if (currencies?.length && !formData.currencyId) {
      setFormData({
        ...formData,
        currencyId: currencies[0].id, 
      });
    }
  }, [currencies]);


  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "finalPrice") {
      setFormData({
        ...formData,
        is_negotiable: value === "negotiable",
      });
    } else if (name === "state") {
      setFormData({
        ...formData,
        is_new: value === "new",
      });
    } else if (name === "document") {
      setFormData({
        ...formData,
        box_with_document: value === "yes",
      });
    }
  };

  return (
    <SectionWrapper>
      <h2>Цена</h2>
      <InputWrapper>
        <input
          type="number"
          name="price"
          placeholder="Цена"
          min={0}
          value={formData.price}
          onChange={(e) =>
            setFormData({
              ...formData,
              price: Number(e.target.value),
            })
          }
        />
        <select
          name="currencyId"
          value={formData.currencyId}
          onChange={(e) =>
            setFormData({
              ...formData,
              currencyId: parseInt(e.target.value),
            })
          }
        >
          {currencies?.map((currency) => (
            <option key={currency.id} value={currency.id}>
              {currency.name}
            </option>
          ))}
        </select>
      </InputWrapper>

      <h3>Цена окончательная?</h3>
      <label className="label">
        <input
          type="radio"
          name="finalPrice"
          value="negotiable"
          checked={formData.is_negotiable}
          onChange={handleRadioChange}
        />
        Торг есть
      </label>
      <label className="label">
        <input
          type="radio"
          name="finalPrice"
          value="final"
          checked={!formData.is_negotiable}
          onChange={handleRadioChange}
        />
        Да, окончательная
      </label>

      <h3>Состояние</h3>
      <label className="label">
        <input
          type="radio"
          name="state"
          value="new"
          checked={formData.is_new}
          onChange={handleRadioChange}
        />
        Новый
      </label>
      <label className="label">
        <input
          type="radio"
          name="state"
          value="used"
          checked={!formData.is_new}
          onChange={handleRadioChange}
        />
        Б/У
      </label>

      <h3>Коробка c документами</h3>
      <label className="label">
        <input
          type="radio"
          name="document"
          value="yes"
          checked={formData.box_with_document}
          onChange={handleRadioChange}
        />
        Есть
      </label>
      <label className="label">
        <input
          type="radio"
          name="document"
          value="no"
          checked={!formData.box_with_document}
          onChange={handleRadioChange}
        />
        Нет
      </label>
    </SectionWrapper>
  );
};

export default PriceSection;
