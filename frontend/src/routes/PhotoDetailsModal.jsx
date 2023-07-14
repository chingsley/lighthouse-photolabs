import React, { useMemo } from 'react';

import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'

// TODO: photos should be similar photos, and we need mock data for this
export const PhotoDetailsModal = ({ onClose, photo, onFavPressed, favPhotoIds, photos }) => {
  const isFav = useMemo(() => favPhotoIds.includes(photo.id), [favPhotoIds, photo])

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='photo-details-modal--images'>
        {/* NOTE: Consider refactoring to use the same component as PhotoListItem */}
        <PhotoFavButton onFavPressed={onFavPressed} id={photo.id} isFav={isFav}/>
        <img className='photo-details-modal--image' src={photo.urls.full}></img>

        <div className='photo-details-modal--header'>
          <span>Similar Photos</span>
        </div>
      </div>
        {/* TODO: Need to bring in similar photos to mock data */}
      <div className='photo-details-modal--similar-photos'>
        <PhotoList 
          onFavPressed={onFavPressed} 
          favPhotoIds={favPhotoIds} 
          photos={photo.similar_photos}
        />
      </div>

    </div>
  )
}

export default PhotoDetailsModal;