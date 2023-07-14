import React from 'react';

import HomeRoute from './routes/HomeRoute'
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

// import topics from './mocks/topics';
// import photos from './mocks/photos';

import useApplicationData from './hooks/useApplicationData'

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { 
    favPhotoIds, 
    topics, 
    photos, 
    displayPhotoDetails,
    selectedPhoto, 
  } = state;

  return (
    <div className="App">
      <HomeRoute 
        topics={topics}
        photos={photos}
        onFavPressed={updateToFavPhotoIds}
        favPhotoIds={favPhotoIds}
        onPhotoSelect={onPhotoSelect}
        onLoadTopic={onLoadTopic}
        />
      {
        !!displayPhotoDetails && 
        <PhotoDetailsModal 
          onClose={onClosePhotoDetailsModal}
          photo={selectedPhoto}
          onFavPressed={updateToFavPhotoIds}
          favPhotoIds={favPhotoIds}
          photos={photos}
        />
      }
    </div>
  )
}

export default App