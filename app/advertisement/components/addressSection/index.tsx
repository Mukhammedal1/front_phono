import React, { useState } from "react";
import {
  SectionWrapper,
  SectionWrapper2,
  TabWrapper,
} from "./addressSection.style";
import { useDistrict, useRegions } from "../../../../hooks";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const AddressSection = (props: any) => {
  const { formData, setFormData } = props;
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [clicked, setClicked] = useState(true);
  const { data: regions } = useRegions();

  const defaultCenter: [number, number] = [41.3111, 69.2797];

  const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(
    null
  );

  const handleMapClick = (e: any) => {
    const coords = e.get("coords"); // [latitude, longitude]
    setSelectedCoords(coords);

    setFormData({
      ...formData,
      lat: coords[0],
      long: coords[1],
    });
  };

  return (
    <>
      <h2>Адрес продажи</h2>
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
          Выбрать на карте
        </button>
      </TabWrapper>

      {clicked ? (
        <>
          <SectionWrapper>
            <h3>Выбрать регион</h3>
            <select
              value={formData.regionId}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  regionId: +e.target.value,
                });
              }}
              required={clicked}
            >
              <option value="">Выберите регион</option>
              {regions?.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </SectionWrapper>
          <SectionWrapper>
            <h3>Выбрать город или район</h3>
            <select
              value={formData.districtId}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  districtId: +e.target.value,
                });
              }}
              required={clicked}
            >
              <option value="">Выберите город или район</option>
              {regions
                ?.find((region) => region.id === formData.regionId)
                ?.Districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
            </select>
          </SectionWrapper>
        </>
      ) : (
        <SectionWrapper2>
          <h3>Выберите на карте</h3>
          <div
            style={{
              width: "70%",
              height: "400px",
              marginTop: "15px",
              position: "relative",
            }}
          >
            <YMaps>
              {isMapLoading && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(255,255,255,0.7)",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Карта загружается...
                </div>
              )}
              <Map
                defaultState={{ center: defaultCenter, zoom: 12 }}
                width="100%"
                height="100%"
                modules={[]}
                onClick={handleMapClick}
                onLoad={() => setIsMapLoading(false)}
              >
                <Placemark geometry={selectedCoords || defaultCenter} />
              </Map>
            </YMaps>
          </div>
        </SectionWrapper2>
      )}
    </>
  );
};

export default AddressSection;
