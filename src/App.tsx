import { css } from '@emotion/css';
import React from 'react';

import RickAndMortyPage from './feature/rickAndMorty/list/index'

const style = css(`
  margin:0;
  padding:0;
  text-decoration:none;
  box-sizing: border-box;
`)

function App() {
  return (
    <div className={style}>
      <RickAndMortyPage />
    </div>

  );
}

export default App;
