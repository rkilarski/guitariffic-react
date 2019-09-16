import React from "react";

import { SongChordsComponent } from "../song-chords-component/SongChordsComponent";
import { SongLyricsComponent } from "../song-lyrics-component/SongLyricsComponent";

import "./SongComponent.scss";
import { Song } from "../../types/Song";

interface Props {
  song: Song;
}

export const SongComponent = React.memo((props: Props) => {
  return (
    <div id="song-canvas">
      <input id="song-name" value={props.song.name} placeholder="song name" />
      <input id="artist-name" value={props.song.artist} placeholder="artist" />
      <SongLyricsComponent lyrics={props.song.lyrics} />
      <SongChordsComponent chords={props.song.chords} />
    </div>
  );
});
