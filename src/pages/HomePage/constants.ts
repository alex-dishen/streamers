import { nanoid } from 'nanoid';
import SpaceMan from 'assets/images/space_man.jpg';
import SleepingPanda from 'assets/images/sleeping_panda.jpg';

export const MockData = [
  {
    id: nanoid(),
    name: 'Moty Weiss',
    picture: SpaceMan,
    platform: 'YouTube',
    upVotes: 3,
    downVotes: 0,
  },
  {
    id: nanoid(),
    name: 'Zain Said',
    picture: SleepingPanda,
    platform: 'Twitch',
    upVotes: 1,
    downVotes: 7,
  },
];

export const Platforms = [
  { id: nanoid(), name: 'Twitch' },
  { id: nanoid(), name: 'YouTube' },
  { id: nanoid(), name: 'TikTok' },
  { id: nanoid(), name: 'Kick' },
  { id: nanoid(), name: 'Rumble' },
];
