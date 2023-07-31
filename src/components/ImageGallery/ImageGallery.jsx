import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './StyledGallery';

export const ImageGallery = ({ images, onSelectedImage }) => {
  return (
    <>
      <StyledImageGallery>
        <ImageGalleryItem images={images} onSelectedImage={onSelectedImage} />
      </StyledImageGallery>
    </>
  );
};
