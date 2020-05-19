import { combineReducers } from "redux";

const songsReducer = () => [
  { title: "boom", duration: "5:00" },
  { title: "biim", duration: "5:10" },
  { title: "baam", duration: "5:20" },
  { title: "buum", duration: "1:00" },
];

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload.song;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
