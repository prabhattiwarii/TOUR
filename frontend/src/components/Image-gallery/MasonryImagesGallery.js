import React from 'react';
import GalleryImage from './GalleryImage';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter='1rem'>
        {GalleryImage.map((item, index) => (
          <img
            src={item}
            key={index}
            alt=""
            style={{
              width: '100%',
              display: 'block',
              borderRadius: '10px',
            }}
            className="gallery-image"
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
