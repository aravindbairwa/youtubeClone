import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js'
// create a new componet. This component should produce some html
const API_KEY = 'AIzaSyALJQuAwBHcjIdXW9YvRXbSQumkVNjcwPY'

YTSearch({key:API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});


const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
