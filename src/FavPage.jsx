import React, { lazy, useContext, Suspense } from 'react';
import { Store } from './Store';
import { toggleFavAction } from './Actions';

const EpisodesList = lazy(() => import('./EpisodesList'));

export default function FavPage() {
  const { state, dispatch } = useContext(Store);

  const props = {
    characters: state.favourites,
    state: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='card-columns mt-5 p-4'>
        <EpisodesList {...props} />
      </div>
    </Suspense>
  );
}
