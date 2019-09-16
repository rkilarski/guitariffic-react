import React from "react";

import { GuitarChartSidebarComponent } from "../guitar-chart-sidebar-component/GuitarChartSidebarComponent";
import { SongComponent } from "../song-component/SongComponent";
import { SongData } from "../../SongData";
import { Song } from "../../types/Song";

export const ApplicationComponent = React.memo(() => {
  const [songs, setSongs] = React.useState<Song[]>([]);

  React.useEffect(() => {
    setSongs(SongData.createDb().songs);
  }, []);

  return (
    songs &&
    songs[0] && (
      <span>
        <SongComponent song={songs[0]} />
        <GuitarChartSidebarComponent />
      </span>
    )
  );
});
