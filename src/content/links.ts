import DistrokidImg from '../assets/images/distrokid.svg';
import FacebookImg from '../assets/images/facebook.svg';
import InstagramImg from '../assets/images/instagram.svg';
import MixcloudImg from '../assets/images/mixcloud.svg';
import PatreonImg from '../assets/images/patreon.svg';
import SoundcloudImg from '../assets/images/soundcloud.svg';
import SpotifyImg from '../assets/images/spotify.svg';
import TwitterImg from '../assets/images/twitter.svg';
import YoutubeImg from '../assets/images/youtube.svg';
import {
  DISTROKID_PATH,
  FACEBOOK_PATH,
  INSTAGRAM_PATH,
  MIXCLOUD_PATH,
  PATREON_PATH,
  SOUNDCLOUD_PATH,
  SPOTIFY_PATH,
  TWITTER_PATH,
  YOUTUBE_PATH,
} from '../utils/constants';

export interface ContentLink {
  iconSrc: string;
  href: string;
}

export const contentLinks: ContentLink[] = [
  {
    iconSrc: InstagramImg,
    href: INSTAGRAM_PATH,
  },
  {
    iconSrc: SoundcloudImg,
    href: SOUNDCLOUD_PATH,
  },
  {
    iconSrc: MixcloudImg,
    href: MIXCLOUD_PATH,
  },
  {
    iconSrc: SpotifyImg,
    href: SPOTIFY_PATH,
  },
  {
    iconSrc: PatreonImg,
    href: PATREON_PATH,
  },
  {
    iconSrc: FacebookImg,
    href: FACEBOOK_PATH,
  },
  {
    iconSrc: YoutubeImg,
    href: YOUTUBE_PATH,
  },
  {
    iconSrc: DistrokidImg,
    href: DISTROKID_PATH,
  },
  {
    iconSrc: TwitterImg,
    href: TWITTER_PATH,
  },
];
