import React from 'react';
import { render } from 'react-dom';
import Player from './Player';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const playlists = [
  {
    artistName: "Skrillex",
    id: "1330760180",
    releaseDate: "2018-01-25",
    name: "Bangarang (feat. Sirah)",
    "mp3":"//audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/1f/d1/d6/mzm.mkwznkvz.aac.ep.m4a",
    cover: "//is5-ssl.mzstatic.com/image/thumb/Music/v4/24/44/80/244480d4-3b14-111e-759c-290e583045cd/source/300x300cc.jpg",
  },
  {
    artistName: "DJ Khaled",
    id: "1340309499",
    releaseDate: "2018-01-26",
    name: "I Got the Keys (feat. JAY Z & Future)",
    "mp3": "//audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/db/69/85/db698553-d52c-b899-47e1-6e29b40f9428/mzaf_238649129757221951.plus.aac.ep.m4a",
    cover: "//is3-ssl.mzstatic.com/image/thumb/Music18/v4/63/a9/f1/63a9f1f0-ea3d-905f-ab2c-9d6c920f851f/source/300x300cc.jpg",
  },
  {
    artistName: "Migos",
    id: "1337901582",
    releaseDate: "2018-01-25",
    name: "Walk It Talk It (feat. Drake)",
    "mp3": "//audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/ff/e2/dd/ffe2dd23-d933-bbf8-a351-423e2efe1c08/mzaf_8567656238100797270.plus.aac.ep.m4a",
    cover: "//is4-ssl.mzstatic.com/image/thumb/Music128/v4/e6/ef/05/e6ef056e-c302-2254-bc17-2cc773cc5b9d/source/300x300cc.jpg",
  }
];

const App = () => (
  <div style={styles}>
    <Player playlists={playlists} />
  </div>
);

render(<App />, document.getElementById('root'));
