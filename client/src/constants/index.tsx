import Panda from 'assets/images/panda.jpg';
import SpaceMan from 'assets/images/space_man.jpg';
import SleepingPanda from 'assets/images/sleeping_panda.jpg';
import Cat from 'assets/images/cat.jpg';
import Robot from 'assets/images/robot.jpg';
import Zebra from 'assets/images/zebra.jpg';
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

export const PlatformIcons = {
  TikTok: <TikTok />,
  Rumble: <Rumble />,
  Kick: <Kick />,
  Twitch: <Twitch />,
  YouTube: <YouTube />,
};
