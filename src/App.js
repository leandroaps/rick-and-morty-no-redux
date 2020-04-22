import { Link } from '@reach/router';
import { Store } from './Store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';

function App(props) {
  const { state } = useContext(Store);

  return (
    <>
      <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5'>
        <Link to='/' className='navbar-brand'>
          Rick and Morty
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='btn-group' role='group' aria-label='FAV'>
          <Link to='/' className='btn btn-secondary'>
            Home
          </Link>
          <Link to='/faves' className='btn btn-secondary'>
            Favourite(s) {state.favourites.length}
          </Link>
        </div>
      </nav>
      {props.children}
    </>
  );
}
export default App;
