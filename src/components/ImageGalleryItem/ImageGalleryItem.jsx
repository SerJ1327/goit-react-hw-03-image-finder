import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImg,
} from './Styled.GalleryItem';

export const ImageGalleryItem = ({ images, onSelectedImage }) => {
  return images.map(image => {
    return (
      <StyledImageGalleryItem key={image.id}>
        <StyledImageGalleryItemImg
          onClick={() =>
            onSelectedImage({ URL: image.largeImageURL, alt: image.tags })
          }
          src={image.webformatURL}
          alt={image.tags}
        />
      </StyledImageGalleryItem>
    );
  });
};
