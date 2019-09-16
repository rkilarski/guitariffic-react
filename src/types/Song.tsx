import { GuitarChart } from "./GuitarChart";
import { Lyric } from "./Lyric";

export class Song {
  id?: number;
  name!: string;
  artist!: string;
  lyrics!: Lyric[];
  chords!: GuitarChart[][];
}
