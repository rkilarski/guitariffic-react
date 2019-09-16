import { Song } from "./types/Song";
import { SongData } from "./SongData";

export class SongDatabase {
  private constructor() {}

  static addSong(song: Song) {}
  static updateSong(song: Song) {}
  static deleteSong(song: Song) {}

  static getSong(id: number): Song {
    return new Song();
  }

  static getSongs(value?: string): Song[] {
    //console.log('searching ' + value);
    const Songs = SongData.createDb().songs;
    if (!value) {
      return Songs;
    } else {
      var newSongs: Song[];
      newSongs = [];

      for (let Song of Songs) {
        if (Song.name.toUpperCase().indexOf(value.toUpperCase()) > -1) {
          newSongs.push(Song);
        }
      }
      return newSongs;
    }
  }
}
