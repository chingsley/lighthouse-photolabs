import React, { useMemo } from 'react';

import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ id, imageSource, onFavPressed, favPhotoIds, onPress, username, location, profile }) => {
  const isFav = useMemo(() => favPhotoIds.includes(id), [favPhotoIds, id])

  return (
    <li className="photo-list--item">
      <PhotoFavButton onFavPressed={onFavPressed} id={id} isFav={isFav}/>
      <img className="photo-list--image" src={imageSource} onClick={() => onPress && onPress(id)} />
      <div className="photo-list--user-details">
        <img className="photo-list--user-profile" src={profile} />
        <div className="photo-list--user-info">
          <span className="photo-list--username">{username}</span><br/>
          <span className="photo-list--user-location">{`${location.city}, ${location.country}`}</span>
        </div>
      </div>
    </li>
  )
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem