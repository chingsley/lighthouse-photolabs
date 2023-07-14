import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onFavPressed, id, isFav }) {
  // Note: Removed use of local state
  // const [isFav, setFav] = useState(false);
  const onPressFav = useCallback(() => {
    // setFav(!isFav);
    onFavPressed(id)
  });

  return (
    <div className="photo-list--fav-icon" onClick={onPressFav}>
      <div className="photo-list--fav-icon-svg">
        <FavIcon
          width={20}
          height={17}
          outlineWidth={1}
          fill={isFav ? '#C80000' : '#EEEEEE'}
          stroke={isFav ? '#FFFFFF' : '#C80000'}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;