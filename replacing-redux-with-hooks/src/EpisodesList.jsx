import React from 'react';

export default function EpisodesList(props) {
  const { episodes, toggleFavAction, favourites, state } = props;

  return episodes.map(episode => {
    return (
      <div className="card" key={episode.id}>
        <div className="card-header">{episode.name}</div>
        <div className="card-body">
          <h5 className="card-title">{episode.name}</h5>
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="card-text">
              Season: {episode.season}
              <small className="text-muted"> Number: {episode.number}</small>
            </p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() =>
                toggleFavAction(episode, state.state, state.dispatch)
              }
            >
              {favourites.find(fav => fav.id === episode.id) ? 'Unfav' : 'Fav'}
            </button>
          </section>
        </div>
      </div>
    );
  });
}
