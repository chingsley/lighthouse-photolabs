
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

export default function appReducer(state, action) {
  switch (action.type) {
    case 'FAV_PHOTO_ADDED': { 
      const currentFavPhotos = [...state.favPhotoIds];
      currentFavPhotos.push(action.payload.id)
      return {
        ...state,
        favPhotoIds: currentFavPhotos,
      }
    }
    case 'FAV_PHOTO_REMOVED': {
      const currentFavPhotos = [...state.favPhotoIds];
      const photoIndex = currentFavPhotos.findIndex(favId => favId === action.payload.id);
      currentFavPhotos.splice(photoIndex, 1);
      return {
        ...state,
        favPhotoIds: currentFavPhotos,
      }
    }
    case 'SET_PHOTO_DATA': {
      return {
        ...state,
        photos: action.payload
      }
    }
    case 'SET_TOPIC_DATA': {
      return {
        ...state,
        topics: action.payload
      }
    }
    case 'SELECT_PHOTO': {
      return {
        ...state,
        selectedPhoto: action.payload
      }
    }
    case 'DISPLAY_PHOTO_DETAILS': {
      return {
        ...state,
        displayPhotoDetails: action.payload
      }
    }
    default: {
      return state;
    }
  }
};