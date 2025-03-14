import files from '../assets/images/svg/files.svg';
import settings from '../assets/images/svg/settings.svg';
import help from '../assets/images/svg/help.svg';
import logout from '../assets/images/svg/logout.svg';
import { Chapters } from '../interfaces/chapter';

export const chapters = [
  {
    icon: files,
    title: 'Мои файлы',
    slug: Chapters.Files,
  },
  {
    icon: settings,
    title: 'Настройки',
    slug: Chapters.Settings,
  },
  {
    icon: help,
    title: 'Поддержка',
    slug: Chapters.Help,
  },
  {
    icon: logout,
    title: 'Выход',
  },
];
