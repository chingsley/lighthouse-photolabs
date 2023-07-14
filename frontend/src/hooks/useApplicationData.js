import {
  useEffect,
  useCallback,
  useReducer,
} from 'react';

import { ACTIONS, default as reducer } from '../reducer/application';
const API_URL = 'http://localhost:8001/api';

export default function useApplicationData() {

  const appInitialState = {
    favPhotoIds: [],
    selectedPhoto: {},
    photos: [],
    topics: [],
    selectedPhoto: {},
    displayPhotoDetails: false
  };

  const [state, dispatch] = useReducer(
    reducer,
    appInitialState
  );

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(`${API_URL}/photos`);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    };

    fetchPhotos();
  }, []);


  useEffect(() => {
    const fetchTopics = async () => {
      const response = await fetch(`${API_URL}/topics`);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
    };

    fetchTopics();
  }, []);

  const onLoadTopic = async (id) => {
    const response = await fetch(`${API_URL}/topics/photos/${id}`);
    const data = await response.json();
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
  };

  const updateToFavPhotoIds = useCallback((id) => {
    const isFav = state.favPhotoIds.findIndex(favId => favId === id);
    if (isFav !== -1) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    }
  });

  const onPhotoSelect = useCallback((photoId) => {
    if (state.displayPhotoDetails) return;
    const photoData = state.photos.filter(({ id }) => id === photoId)[0];

    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoData });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: !state.displayPhotoDetails });
  });

  const onClosePhotoDetailsModal = useCallback(_ =>
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false })
  );

  return {
    state,
    onPhotoSelect,
    onLoadTopic,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
}