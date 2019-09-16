import React from "react";

import { Lyric } from "../../types/Lyric";

import "./SongLyricsComponent.scss";

interface Props {
  lyrics: Lyric[];
}

export const SongLyricsComponent = React.memo((props: Props) => {
  const [lyricsHtml, setLyricsHtml] = React.useState();

  React.useEffect(() => {
    setLyricsHtml(
      props.lyrics.map((lyric: Lyric, step: number) => {
        return (
          <tr key={step}>
            <td>
              <input
                value={lyric.line}
                placeholder="lyrics"
                className="song-text"
              />
            </td>
          </tr>
        );
      })
    );
  }, []);

  return (
    <div id="song-lyrics">
      <table id="lyricstable">
        <tbody>{lyricsHtml}</tbody>
      </table>
    </div>
  );
});
