import React, { useState } from "react";
import { SectionWrapper } from "./submitSection.style";
import {
  useCreatePhone,
  useDeleteImage,
  useDeletePhone,
  useUpdatePhone,
  useUploadImages,
} from "../../../../hooks";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { Button, CircularProgress, Dialog, Typography } from "@mui/material";
import { toast } from "react-toastify";
import Link from "next/link";

const SubmitSection = (props: any) => {
  const { formData, images } = props;
  const { isUpdate, phoneId } = props;
  const { deletedImages } = props;
  const { mutate: createPhone } = useCreatePhone();
  const { mutate: updatePhone } = useUpdatePhone();
  const { mutate: uploadImages } = useUploadImages();
  const { mutate: deleteImage } = useDeleteImage();
  const { mutate: deletePhone } = useDeletePhone();

  const { lat, long, ...cleanedData } = formData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setisDelete] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedPhone = localStorage.getItem("selectedPhoneNumber");

  const handleSubmit = () => {
    setLoading(true);
    if (!formData.brandId && !formData.brand) {
      toast.error("Пожалуйста, выберите бренд");
      setLoading(false);
      return;
    }
    if (!formData.modelId && !formData.model) {
      toast.error("Пожалуйста, выберите модель");
      setLoading(false);
      return;
    }
    if (!formData.year) {
      toast.error("Пожалуйста, выберите год выпуска");
      setLoading(false);
      return;
    }
    if (images.length == 0) {
      toast.error("Пожалуйста, загрузите как минимум одно фото");
      setLoading(false);
      return;
    }

    if (!formData.description) {
      toast.error("Пожалуйста, введите описание");
      setLoading(false);
      return;
    }
    if (formData.price == 0) {
      toast.error("Пожалуйста, введите цену");
      setLoading(false);
      return;
    }
    if (!formData.ram) {
      toast.error("Пожалуйста, введите RAM");
      setLoading(false);
      return;
    }
    if (!formData.rom) {
      toast.error("Пожалуйста, введите ROM");
      setLoading(false);
      return;
    }
    if (!formData.colorId) {
      toast.error("Пожалуйста, выберите цвет");
      setLoading(false);
      return;
    }
    if (!formData.regionId) {
      toast.error("Пожалуйста, выберите регион");
      setLoading(false);
      return;
    }
    if (!formData.districtId) {
      toast.error("Пожалуйста, выберите город или район");
      setLoading(false);
      return;
    }
    if (!selectedPhone) {
      toast.error("Пожалуйста, выберите  номер телефона");
      setLoading(false);
      return;
    }
    if (isUpdate && phoneId) {
      updatePhone(
        { id: phoneId, data: cleanedData },
        {
          onSuccess: () => {
            if (deletedImages && deletedImages.length > 0) {
              deletedImages.forEach((id: number) => {
                deleteImage(id, {
                  onSuccess: () => {},
                  onError: () => console.error("rasmlar o'chmadi"),
                });
              });
            }

            const newFiles = images.filter((file: any) => file instanceof File);

            if (newFiles.length > 0) {
              const form = new FormData();
              form.append("phoneId", phoneId);

              newFiles.forEach((file: File) => {
                form.append("files", file);
              });

              uploadImages(form, {
                onSuccess: () => {
                  setisDelete(false);
                  setIsModalOpen(true);
                  setLoading(false);
                },
                onError: (err) => {
                  console.error("Rasm yuklashda xatolik:", err);
                  setLoading(false);
                },
              });
            } else {
              setisDelete(false);
              setIsModalOpen(true);
              setLoading(false);
            }
          },
          onError: (error) => {
            console.error("Update xatolik:", error);
            setLoading(false);
          },
        }
      );
    } else {
      createPhone(cleanedData, {
        onSuccess: (data) => {
          console.log(data);
          if (data) {
            const phoneId = data.id;
            const form = new FormData();
            form.append("phoneId", phoneId);

            images.forEach((file: any) => {
              form.append("files", file);
            });

            uploadImages(form, {
              onSuccess: () => {
                setIsModalOpen(true);
                setLoading(false);
              },
              onError: (err) => {
                console.error("Xatolik rasmda:", err);
                setLoading(false);
              },
            });
          } else {
            setLoading(false);
            toast.error("Phone yaratishda xatolik yuz berdi");
          }
        },
        onError: (error) => {
          console.error("Xatolik:", error);
          setLoading(false);
        },
      });
    }
  };

  const handleDelete = () => {
    setisDelete(true);
    setIsModalOpen(true);
  };

  const handleDeletePhone = () => {
    if (!phoneId) return;

    deletePhone(phoneId, {
      onSuccess: () => {
        setisDelete(false);
        setDeleted(true);
        setIsModalOpen(true);
      },
      onError: () => {
        toast.error("E'lonni o'chirishda xatolik yuz berdi");
      },
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <SectionWrapper>
        {isUpdate ? (
          <Link href="#" onClick={handleDelete}>
            Удалить
          </Link>
        ) : (
          <Link href={`/advertisement/58`}>Предпросмотр</Link>
        )}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {loading ? (
            <>
              Загрузка...
              <CircularProgress size={16} style={{ color: "#fff" }} />
            </>
          ) : isUpdate ? (
            "Сохранить изменения"
          ) : (
            "Опубликовать"
          )}
        </button>
      </SectionWrapper>

      {/* <SectionWrapper>
        {isUpdate ? (
          <Link href="#" onClick={handleDelete}>
            Удалить
          </Link>
        ) : (
          <Link href={`/advertisement/58`}>Предпросмотр</Link>
        )}
        <button onClick={handleSubmit} disabled={loading}>
          {loading
            ? "Загрузка..." // loading bo'lsa
            : isUpdate
            ? "Сохранить изменения"
            : "Опубликовать"}
        </button>
      </SectionWrapper> */}
      <Dialog
        open={isModalOpen}
        onClose={handleModalClose}
        PaperProps={{
          style: {
            width: "320px",
            borderRadius: 12,
            padding: "30px 30px",
            textAlign: "center",
          },
        }}
      >
        {isUpdate && isDelete ? (
          <p style={{ fontWeight: 700, fontSize: "25px", marginBottom: "5px" }}>
            Удалить объявление
          </p>
        ) : isUpdate && !isDelete ? (
          <CheckCircleOutlineIcon
            style={{
              fontSize: 50,
              color: "green",
              marginBottom: 16,
              margin: "0 auto",
            }}
          />
        ) : deleted && isUpdate && !isDelete ? (
          <CheckCircleOutlineIcon
            style={{
              fontSize: 50,
              color: "red",
              marginBottom: 16,
              margin: "0 auto",
            }}
          />
        ) : (
          <CheckCircleOutlineIcon
            style={{
              fontSize: 50,
              color: "green",
              marginBottom: 16,
              margin: "0 auto",
            }}
          />
        )}
        <Typography variant="h6" style={{ marginBottom: 12 }}>
          {isUpdate && isDelete
            ? "Вы действительно хотите удалить объявление?"
            : isUpdate && !isDelete && !deleted
            ? "Ma'lumotlar muvaffaqiyatli saqlandi"
            : isUpdate && !isDelete && deleted
            ? "Ma'lumotlar muvaffaqiyatli o'chirildi"
            : "E'loningiz adminga tasdiqlash uchun yuborildi"}
        </Typography>
        {isUpdate && isDelete ? (
          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              onClick={handleDeletePhone}
              variant="contained"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "6px 30px",
                borderRadius: 8,
                textTransform: "none",
                fontSize: "15px",
              }}
            >
              Удалить
            </Button>
            <Button
              onClick={handleModalClose}
              variant="contained"
              style={{
                backgroundColor: "#5E47D4",
                color: "#fff",
                padding: "6px 30px",
                borderRadius: 8,
                textTransform: "none",
                fontSize: "15px",
              }}
            >
              Отмена
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleModalClose}
            variant="contained"
            style={{
              backgroundColor: "#5E47D4",
              color: "#fff",
              padding: "6px 30px",
              borderRadius: 8,
              textTransform: "none",
              fontSize: "15px",
            }}
          >
            Ок
          </Button>
        )}
      </Dialog>
    </>
  );
};

export default SubmitSection;
