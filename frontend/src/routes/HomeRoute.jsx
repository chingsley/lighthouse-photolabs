import React from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, onFavPressed, favPhotoIds, onPhotoSelect, onLoadTopic }) => 
  <div className="home-route">
    <TopNavigationBar topics={topics} isFavPhotoExist={favPhotoIds.length > 0} onLoadTopic={onLoadTopic}/>
    <PhotoList photos={photos} onFavPressed={onFavPressed} favPhotoIds={favPhotoIds} onPhotoSelect={onPhotoSelect}/>
  </div>

export default HomeRoute;