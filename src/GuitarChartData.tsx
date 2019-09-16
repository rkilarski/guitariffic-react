export class GuitarChartData {
    private constructor() { }
    static createDb() {
        const charts = [
            {
                id: 1,
                name: 'A',
                position: 1,
                fingering: 'X 123 ',
                frets: '  222',
                isLeftHanded: false
            },
            {
                id: 2,
                name: 'A',
                position: 5,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 3,
                name: 'A',
                position: 12,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 4,
                name: 'A#',
                position: 1,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 5,
                name: 'A#',
                position: 6,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 6,
                name: 'A#',
                position: 13,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 7,
                name: 'A#7',
                position: 1,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 8,
                name: 'A#7',
                position: 6,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 9,
                name: 'A#7',
                position: 13,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 10,
                name: 'A#m',
                position: 1,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 11,
                name: 'A#m',
                position: 6,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 12,
                name: 'A#m',
                position: 13,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 13,
                name: 'A#m7',
                position: 1,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 14,
                name: 'A#m7',
                position: 6,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 15,
                name: 'A#m7',
                position: 13,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 16,
                name: 'A7',
                position: 1,
                fingering: 'X 1 3 ',
                frets: ' 2 2 ',
                isLeftHanded: false
            },
            {
                id: 17,
                name: 'A7',
                position: 5,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 18,
                name: 'A7',
                position: 12,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 19,
                name: 'Ab',
                position: 4,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 20,
                name: 'Ab',
                position: 11,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Ab7',
                position: 4,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Ab7',
                position: 11,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Abm',
                position: 4,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Abm',
                position: 11,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Abm7',
                position: 4,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Abm7',
                position: 11,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Am',
                position: 1,
                fingering: 'X 231 ',
                frets: '221',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Am',
                position: 5,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Am',
                position: 12,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Am7',
                position: 1,
                fingering: 'X 2 1 ',
                frets: ' 2 1 ',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Am7',
                position: 5,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Am7',
                position: 12,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'B',
                position: 2,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'B',
                position: 7,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'B',
                position: 14,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'B7',
                position: 2,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'B7',
                position: 7,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'B7',
                position: 14,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bb',
                position: 1,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bb',
                position: 6,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bb',
                position: 13,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bb7',
                position: 1,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bb7',
                position: 6,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bb7',
                position: 13,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bbm',
                position: 1,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bbm',
                position: 6,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bbm',
                position: 13,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bbm7',
                position: 1,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bbm7',
                position: 6,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bbm7',
                position: 13,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bm',
                position: 2,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bm',
                position: 7,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bm',
                position: 14,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bm7',
                position: 2,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bm7',
                position: 7,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Bm7',
                position: 14,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C',
                position: 1,
                fingering: 'X32 1 ',
                frets: ' 32 1 ',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C',
                position: 3,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C',
                position: 8,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C',
                position: 15,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C#',
                position: 4,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C#',
                position: 9,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C#7',
                position: 4,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C#7',
                position: 9,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C#m',
                position: 4,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C#m',
                position: 9,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C#m7',
                position: 4,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C#m7',
                position: 9,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C7',
                position: 1,
                fingering: 'X3241 ',
                frets: '3231',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C7',
                position: 3,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C7',
                position: 8,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'C7',
                position: 15,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Cm',
                position: 1,
                fingering: 'X41 2X',
                frets: ' 31 2 ',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Cm',
                position: 3,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Cm',
                position: 8,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Cm',
                position: 15,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Cm7',
                position: 1,
                fingering: 'X3141X',
                frets: '3131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Cm7',
                position: 3,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Cm7',
                position: 8,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Cm7',
                position: 15,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D',
                position: 1,
                fingering: 'X  132',
                frets: '   232',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D',
                position: 5,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D',
                position: 10,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D#',
                position: 6,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D#',
                position: 11,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D#7',
                position: 6,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D#7',
                position: 11,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D#m',
                position: 6,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D#m',
                position: 11,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D#m7',
                position: 6,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D#m7',
                position: 11,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D7',
                position: 1,
                fingering: 'X 213',
                frets: '212',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D7',
                position: 5,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'D7',
                position: 10,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Db',
                position: 4,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Db',
                position: 9,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Db7',
                position: 4,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Db7',
                position: 9,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Dbm',
                position: 4,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Dbm',
                position: 9,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Dbm7',
                position: 4,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Dbm7',
                position: 9,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Dm',
                position: 1,
                fingering: 'X 231',
                frets: '231',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Dm',
                position: 5,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Dm',
                position: 10,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Dm7',
                position: 1,
                fingering: 'X 211',
                frets: '231',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Dm7',
                position: 5,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Dm7',
                position: 10,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'E',
                position: 1,
                fingering: '231',
                frets: '221',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'E',
                position: 7,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'E',
                position: 12,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'E7',
                position: 1,
                fingering: '2314',
                frets: '2213',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'E7',
                position: 7,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'E7',
                position: 12,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Eb',
                position: 6,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Eb',
                position: 11,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Eb7',
                position: 6,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Eb7',
                position: 11,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Ebm',
                position: 6,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Ebm',
                position: 11,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Ebm7',
                position: 6,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Ebm7',
                position: 11,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Em',
                position: 1,
                fingering: '23',
                frets: '22',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Em',
                position: 7,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Em',
                position: 12,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Em7',
                position: 1,
                fingering: ' 23 4 ',
                frets: ' 22 3 ',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Em7',
                position: 7,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Em7',
                position: 12,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F',
                position: 1,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F',
                position: 8,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F',
                position: 13,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#',
                position: 2,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#',
                position: 9,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#',
                position: 14,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#7',
                position: 2,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#7',
                position: 9,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#7',
                position: 14,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#m',
                position: 2,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#m',
                position: 9,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#m',
                position: 14,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#m7',
                position: 2,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#m7',
                position: 9,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F#m7',
                position: 14,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F7',
                position: 1,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F7',
                position: 8,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'F7',
                position: 13,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Fm',
                position: 1,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Fm',
                position: 8,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Fm',
                position: 13,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Fm7',
                position: 1,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Fm7',
                position: 8,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Fm7',
                position: 13,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G',
                position: 1,
                fingering: '21   3',
                frets: '32   3',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G',
                position: 3,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G',
                position: 10,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G',
                position: 15,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G#',
                position: 4,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G#',
                position: 11,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G#7',
                position: 4,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G#7',
                position: 11,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G#m',
                position: 4,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G#m',
                position: 11,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G#m7',
                position: 4,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G#m7',
                position: 11,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G7',
                position: 1,
                fingering: '32 1',
                frets: '32 1',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G7',
                position: 3,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G7',
                position: 10,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'G7',
                position: 15,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gb',
                position: 2,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gb',
                position: 9,
                fingering: '113331',
                frets: '113331',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gb',
                position: 14,
                fingering: '134211',
                frets: '133211',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gb7',
                position: 2,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gb7',
                position: 9,
                fingering: '113141',
                frets: '113131',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gb7',
                position: 14,
                fingering: '131241',
                frets: '131241',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gbm',
                position: 2,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gbm',
                position: 9,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gbm',
                position: 14,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gbm7',
                position: 2,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gbm7',
                position: 9,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gbm7',
                position: 14,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gm',
                position: 3,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gm',
                position: 10,
                fingering: '113421',
                frets: '113321',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gm',
                position: 15,
                fingering: '134111',
                frets: '133111',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gm7',
                position: 3,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gm7',
                position: 10,
                fingering: '113121',
                frets: '113121',
                isLeftHanded: false
            },
            {
                id: 0,
                name: 'Gm7',
                position: 15,
                fingering: '131141',
                frets: '131141',
                isLeftHanded: false
            }];
        return { charts };
    }
}