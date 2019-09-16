import React from "react";

import { GuitarChart } from "../../types/GuitarChart";
import { GuitarChartComponent } from "../guitar-chart-component/GuitarChartComponent";

import "./SongChordsComponent.scss";

interface Props {
  chords: GuitarChart[][];
}

export const SongChordsComponent = React.memo((props: Props) => {
  const [chordsHtml, setChordsHtml] = React.useState();

  React.useEffect(() => {
    setChordsHtml(
      props.chords.map((chordLine: GuitarChart[], step: number) => {
        return (
          <ol className="chord-list" key={step}>
            {chordLine.map((chord, step) => getChord(chord, step))}
          </ol>
        );
        function getChord(chord: GuitarChart, step: number) {
          return (
            <li key={step}>
              <GuitarChartComponent chart={chord} />
            </li>
          );
        }
      })
    );
  }, []);

  return <div id="song-chords">{chordsHtml}</div>;
});
