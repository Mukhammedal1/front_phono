import React, { useRef, useState } from "react";
import {
  AddPhotoBoxWrapper,
  GridWrapper,
  PhotoBoxWrapper,
  RemoveButton,
} from "./photoSection.style";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  onImagesChange: (files: File[]) => void;
  defaultImages?: { id: number; url: string }[];
  onRemoveDefaultImage?: (id: number) => void;
}

const MAX_IMAGES = 8;

const PhotoSection: React.FC<Props> = ({
  onImagesChange,
  defaultImages = [],
  onRemoveDefaultImage = () => {},
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    const totalImages = selectedFiles.length + defaultImages.length;

    const remainingSlots = MAX_IMAGES - totalImages;

    if (newFiles.length > remainingSlots) {
      toast.error("Максимум 8 фото!");
      return;
    }

    const updatedFiles = [...selectedFiles, ...newFiles];
    setSelectedFiles(updatedFiles);
    onImagesChange(updatedFiles);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const removeImage = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    onImagesChange(updatedFiles);
  };

  return (
    <>
      <h2>Добавьте фото</h2>
      <p style={{ color: "red" }}>Максимум 8 фотос!</p>
      <GridWrapper>
        {/* Add Photo Button */}
        {selectedFiles.length + defaultImages.length < MAX_IMAGES && (
          <AddPhotoBoxWrapper onClick={openFileDialog}>
            <div className="plus">+</div>
            <p>Добавить фото</p>
          </AddPhotoBoxWrapper>
        )}

        {/* Default Images */}
        {defaultImages.map((img, index) => (
          <PhotoBoxWrapper key={`default-${img.id}`}>
            <RemoveButton onClick={() => onRemoveDefaultImage(img.id)}>
              <DeleteIcon fontSize="small" />
            </RemoveButton>
            <img src={img.url} alt={`default-preview-${index}`} />
          </PhotoBoxWrapper>
        ))}

        {/* Selected Files */}
        {selectedFiles.map((file, index) => (
          <PhotoBoxWrapper key={`file-${index}`}>
            <RemoveButton onClick={() => removeImage(index)}>
              <DeleteIcon fontSize="small" />
            </RemoveButton>
            <img src={URL.createObjectURL(file)} alt={`preview-${index}`} />
          </PhotoBoxWrapper>
        ))}

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </GridWrapper>
    </>
  );
};

export default PhotoSection;
