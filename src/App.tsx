import { css } from '@emotion/css';
import React from 'react';

import RickAndMortyPage from './feature/rickAndMorty/list/index'

const style = css(`
  width:100%;
  height:100%;
  background-color: #000
`)

function App() {
  return (
    <div className={style}>
      <RickAndMortyPage />
    </div>

  );
}

export default App;
