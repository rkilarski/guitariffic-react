export class SongData {
  private constructor() {}

  static createDb() {
    const songs = [
      {
        id: 1,
        name: "Layla",
        artist: "Eric Clapton",
        lyrics: [
          { line: "Verse 1" },
          { line: "C#m7                          G#7" },
          { line: "What'll you do when you get lonely" },
          { line: "C#m7   C       D       E      E7" },
          { line: "No one waiting by your side?" },
          { line: "F#m         B        E               A" },
          { line: "You've been running, hiding much too long." },
          { line: "F#m           B         E              A" },
          { line: "You know it's just your foolish pride." },
          { line: "" },
          { line: "Chorus" },
          { line: "Dm  Bb        C            Dm" },
          { line: "Layla, you've got me on my knees." },
          { line: "Dm  Bb        C            Dm" },
          { line: "Layla, I'm begging, darling please." },
          { line: "Dm  Bb        C            Dm" },
          { line: "Layla, darling won't you ease my worried mind." },
          { line: "" },
          { line: "Verse 2" },
          { line: "Tried to give you consolation" },
          { line: "Your old man had let you down." },
          { line: "Like a fool, I fell in love with you." },
          { line: "You turned my whole world upside down." },
          { line: "" },
          { line: "Verse 3" },
          { line: "Make the best of the situation" },
          { line: "Before I finally go insane" },
          { line: "Please don't say we'll never find a way" },
          { line: "Tell me all my love's in vain." }
        ],
        chords: [
          [
            {
              name: "Dm",
              position: 1,
              fingering: "XXX   ",
              frets: "   231",
              isLeftHanded: false
            },
            {
              fingering: "113331",
              frets: "113331",
              name: "Bb",
              position: 1,
              isLeftHanded: false
            },
            {
              fingering: "X32 1 ",
              frets: " 32 1 ",
              name: "C",
              position: 1,
              isLeftHanded: false
            },
            {
              fingering: "XXX   ",
              frets: "   231",
              name: "Dm",
              position: 1,
              isLeftHanded: false
            }
          ],
          [
            {
              fingering: "113121",
              frets: "113121",
              name: "C#m7",
              position: 4,
              isLeftHanded: false
            },
            {
              fingering: "131141",
              frets: "131141",
              name: "G#m7",
              position: 4,
              isLeftHanded: false
            }
          ],
          [
            {
              fingering: "113121",
              frets: "113121",
              name: "C#m7",
              position: 4,
              isLeftHanded: false
            },
            {
              fingering: "X32 1 ",
              frets: " 32 1 ",
              name: "C",
              position: 1,
              isLeftHanded: false
            },
            {
              fingering: "X  132",
              frets: "   232",
              name: "D",
              position: 1,
              isLeftHanded: false
            },
            {
              fingering: "231",
              frets: "221",
              name: "E",
              position: 1,
              isLeftHanded: false
            },
            {
              fingering: "2314",
              frets: "2213",
              name: "E7",
              position: 1,
              isLeftHanded: false
            }
          ],
          [
            {
              fingering: "134111",
              frets: "133111",
              name: "F#m",
              position: 2,
              isLeftHanded: false
            },
            {
              fingering: "113331",
              frets: "113331",
              name: "B",
              position: 2,
              isLeftHanded: false
            },
            {
              fingering: "231",
              frets: "221",
              name: "E",
              position: 1,
              isLeftHanded: false
            },
            {
              fingering: "X 123 ",
              frets: "  222",
              name: "A",
              position: 1,
              isLeftHanded: false
            }
          ],
          [
            {
              fingering: "134111",
              frets: "133111",
              name: "F#m",
              position: 2,
              isLeftHanded: false
            },
            {
              fingering: "113331",
              frets: "113331",
              name: "B",
              position: 2,
              isLeftHanded: false
            },
            {
              fingering: "231",
              frets: "221",
              name: "E",
              position: 1,
              isLeftHanded: false
            },
            {
              fingering: "X 123 ",
              frets: "  222",
              name: "A",
              position: 1,
              isLeftHanded: false
            }
          ]
        ]
      }
    ];
    return { songs };
  }
}
