import React from 'react';

import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, onFavPressed, favPhotoIds, onPhotoSelect }) => 
  <ul className="photo-list">
    {
      photos.map(
        ({ id: photoId, urls, user, location }) => 
        <PhotoListItem 
          id={photoId} 
          imageSource={urls.regular} 
          key={photoId} 
          onFavPressed={onFavPressed} 
          favPhotoIds={favPhotoIds} 
          onPress={onPhotoSelect}
          username={user.name}
          location={location}
          profile={user.profile}
        />
      )
    }
  </ul>

PhotoList.defaultProps = {
  photos: [
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 1,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 2,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 3,
     hideUserName: false,
    }
   ]
}

export default PhotoList