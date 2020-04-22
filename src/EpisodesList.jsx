import React from 'react';

export default function EpisodesList({
  characters,
  toggleFavAction,
  favourites,
  state,
}) {
  return characters.map((character) => {
    return (
      <div className='card' key={character.id}>
        <div className='card-header'>{character.name}</div>
        <img src={character.image} className='card-img-top' alt='...'></img>
        <div className='card-body'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong className='text-uppercase'>species: </strong>
              {character.species}
            </li>
            <li className='list-group-item'>
              <strong className='text-uppercase'>gender: </strong>
              {character.gender}
            </li>
            <li className='list-group-item'>
              <strong className='text-uppercase'>status: </strong>
              {character.status}
            </li>
            <li className='list-group-item'>
              <strong className='text-uppercase'>origin: </strong>
              {character.origin.name}
            </li>
            <li className='list-group-item'>
              <strong className='text-uppercase'>episodes: </strong>
              {character.episode.lenght}
            </li>
            <li className='list-group-item'>
              <strong className='text-uppercase'>species: </strong>
              {character.status}
            </li>
          </ul>
        </div>
        <div className='card-body'>
          <button
            type='button'
            className='btn btn-dark btn-block'
            onClick={() =>
              toggleFavAction(character, state.state, state.dispatch)
            }
          >
            {favourites.find((fav) => fav.id === character.id)
              ? 'Unfav'
              : 'Favorite'}
          </button>
        </div>
      </div>
    );
  });
}
