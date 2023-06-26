import { nanoid } from 'nanoid';
import { PlatformsT } from 'pages/Home/types';
import Panda from 'assets/images/panda.webp';
import SpaceMan from 'assets/images/space_man.webp';
import SleepingPanda from 'assets/images/sleeping_panda.webp';
import Cat from 'assets/images/cat.webp';
import Robot from 'assets/images/robot.webp';
import Zebra from 'assets/images/zebra.webp';
import { ReactComponent as TikTok } from 'assets/icons/tiktok.svg';
import { ReactComponent as Rumble } from 'assets/icons/rumble.svg';
import { ReactComponent as Kick } from 'assets/icons/kick.svg';
import { ReactComponent as Twitch } from 'assets/icons/twitch.svg';
import { ReactComponent as YouTube } from 'assets/icons/youtube.svg';

export const IMAGES = [Panda, SpaceMan, SleepingPanda, Cat, Robot, Zebra];

export enum PAGES {
  HOME = '/',
  STREAMER = '/streamer/:id',
}

export const PLATFORM_ICONS = {
  TikTok: <TikTok />,
  Rumble: <Rumble />,
  Kick: <Kick />,
  Twitch: <Twitch />,
  YouTube: <YouTube />,
};

export const Platforms: PlatformsT[] = [
  { id: nanoid(), name: 'Twitch' },
  { id: nanoid(), name: 'YouTube' },
  { id: nanoid(), name: 'TikTok' },
  { id: nanoid(), name: 'Kick' },
  { id: nanoid(), name: 'Rumble' },
];
