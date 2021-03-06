import React, { lazy, useContext, useEffect, Suspense } from 'react';
import { Store } from './Store';
import { fetchDataAction, toggleFavAction } from './Actions';

const EpisodesList = lazy(() => import('./EpisodesList'));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.characters.length === 0 && fetchDataAction(dispatch);
  }, [dispatch, state]);

  const props = {
    characters: state.characters,
    state: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='card-columns mt-5 p-4'>
          <EpisodesList {...props} />
        </div>
      </Suspense>
    </>
  );
}
