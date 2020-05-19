import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  return song ? (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {song.title} <br />
        Duration: {song.duration}
      </p>
    </div>
  ) : (
    <p>Select a song</p>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { song: selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
