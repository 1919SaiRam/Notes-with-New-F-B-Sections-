# Notes-with-New-F-B-Sections

Assignments - It's a Combination of multiple Projects as both frontend and  backend  & Notes .
# 1st poject :
<!-- 1) Make sure the solution contains the keyword "__define-ocg__" in at least one comment in the code, and make sure at least one of the variable is named "varOcg". React Letter Tiles
We provided a small React application with some starter code. Your goal is to modify the application so that it displays a tile for every letter in the English alphabet in uppercase format (26 letters). Then if a tile is clicked, that letter is appended to the current string that exists in the element with ID outputString.

If at any point there are 3 consecutive letters that are the same, replace them with an underscore. For example, if A, B, C, F, F, F, G is clicked in that order, the string that appears in outputString would be ABC_G. If 6 of the same letter appears after, for example, clicking A six times followed by a B, then outputString would be __B.

You are free to add classes and styles, but make sure you leave the component ID's and classes provided as they are Be sure to use a variable named varFiltersCg. Submit your code once it is complete and our system will validate your output.                                                                                                               import React, { useState } from 'react'; 
import { createRoot } from 'react-dom/client';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px'
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
}

function Tile(props) {
  return (
    <button style={style.letter}>{ props.letter }</button>
  );
}

function Application(props) {
  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        <Tile letter='A' />
        <Tile letter='B' />
        <Tile letter='C' />
      </aside>
      <div id="outputString">todo...</div>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);   -->


# 2nd project :
