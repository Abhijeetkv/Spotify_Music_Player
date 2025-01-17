import { Track } from "react-native-track-player";

export const playListData: Track[] = [
  {
    id: 1,
    title: 'Dhaaga',
    artist: 'TVF',
    album: 'Originals',
    artwork:
      'https://c.saavncdn.com/592/Aspirants-Season-1-Music-From-the-TVF-Original-Series--English-2021-20210505184143-500x500.jpg',
    url: require('./assets/audio/one.mp3'),
  },
  {
    id: 2,
    title: 'G.O.A.T',
    artist: 'Diljit Dosanjh',
    album: 'G.O.A.T',
    artwork:
      'https://upload.wikimedia.org/wikipedia/en/b/bb/Goat_Diljit.jpg',
    url: require('./assets/audio/two.mp3'),
  },
  {
    id: 3,
    title: 'Get Up Jawani',
    artist: 'Various Artists',
    album: 'Party Hits',
    artwork:
      'https://i.scdn.co/image/ab67616d0000b273ca6243433c75d8ccfc39e3c4',
    url: require('./assets/audio/three.mp3'),
  },
  {
    id: 4,
    title: 'Hass Hass',
    artist: 'Punjabi Vibes',
    album: 'Punjabi Beats',
    artwork:
      'https://i.scdn.co/image/ab67616d0000b27374a99276badeec2675a9eaec',
    url: require('./assets/audio/four.mp3'),
  },
  {
    id: 5,
    title: 'TVF\'s Cute Vol. 1',
    artist: 'TVF',
    album: 'TVF Originals',
    artwork:
      'https://i.ytimg.com/vi/siuh55fA3N8/maxresdefault.jpg',
    url: require('./assets/audio/five.mp3'),
  },
];
