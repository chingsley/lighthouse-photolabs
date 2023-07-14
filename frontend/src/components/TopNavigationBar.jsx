import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, isFavPhotoExist, onLoadTopic }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <div className="top-nav-bar--topic-list">
        <TopicList topics={topics} onLoadTopic={onLoadTopic}/>
        <div className="top-nav-bar--fav-badge">
          <FavBadge isFavPhotoExist={isFavPhotoExist}/>
        </div>
      </div>
    </div>
  )
}

export default TopNavigation;