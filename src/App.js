import "./App.css";
import heels from "./assets/heels.mp3";
import door from "./assets/door.mp3";
import raindrops from "./assets/raindrops.mp3";
import { useState } from "react";
import { TrackList } from "./components/TrackList";
import { PlayerControls } from "./components/PlayerControls";
import { MusicContext } from "./contexts/MusicContext";
function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "door music",
        file: door,
      },
      {
        name: "heels music",
        file: heels,
      },
      {
        name: "raindrops music",
        file: raindrops,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <TrackList />
        <PlayerControls />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
