import React from "react";
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import {TrackList} from '../TrackList/TrackList';
import {Track} from '../Track/Track';

class App extends React.Component {
        render() {
            return ( 
                <div>
                    <h1>Ja<span className="highlight">mmm</span>ing</h1>
                    <div className="App">
                    {/* <!-- Add a SearchBar component --> */}
                        <SearchBar />
                        <div className="App-playlist">
                    {/* <!-- Add a SearchResults component --> */}
                        <SearchResults />
                    {/* <!-- Add a Playlist component --> */}
                        <Playlist />
                        <TrackList />
                        <Track/>
                        </div>
                    </div>
              </div>
            )
        }                   
}

export default App;