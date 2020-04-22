const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchDataAction = async (dispatch) => {
  const data = await fetch(API_URL);
  const dataJSON = await data.json();

  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON.results,
  });
};

export const toggleFavAction = (episode, state, dispatch) => {
  const episodeInFavourites = state.favourites.includes(episode);
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode,
  };
  if (episodeInFavourites)
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: state.favourites.filter((fav) => fav.id !== episode.id),
    };
  return dispatch(dispatchObj);
};
