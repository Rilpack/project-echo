import abstract from '../assets/images/svg/flatIcons/abstract.svg';
import cube from '../assets/images/svg/flatIcons/cube.svg';
import diamonds from '../assets/images/svg/flatIcons/diamonds.svg';
import isometry from '../assets/images/svg/flatIcons/isometry.svg';
import square from '../assets/images/svg/flatIcons/square.svg';
import thumb from '../assets/images/svg/flatIcons/thumb.svg';
import triangle from '../assets/images/svg/flatIcons/triangle.svg';

export const questions = [
  {
    title: 'Как быстро присылаете расшифровку?',
    text: 'На бесплатном тарифе файлы обрабатываются в порядке живой очереди: чем больше пользователей, тем дольше придется ждать. На бесплатном тарифе расшифровка одного файла может длиться до 24 часов.',
    icon: abstract,
  },
  {
    title: 'Что с безопасностью? Какие технологии вы используете?',
    text: 'Мы не храним ваши медиафайлы, не используем их для дополнительного обучения наших моделей. Используем собственные технологии. Ваши данные обрабатываются только на наших серверах.',
    icon: cube,
  },
  {
    title: 'Какие форматы файлов умеете расшифровывать',
    text: 'Любые аудио и видео файлы, главное чтобы в них был звук. Мы проверяли WMA, MP4, MKV, FLV, OGG, AAC, WAV, AVI, MOV, WMV, M4A, MP3, FLAC и другие. Мы пока не нашли форматы файлов которые не можем обработать.',
    icon: diamonds,
  },
  {
    title: 'Работаете с юридическими лицами?',
    text: 'Да конечно. Для юридических лиц есть дополнительные услуги и специальные условия, подробнее на странице тарифы. Тут я серьезен, как никогда.',
    icon: square,
  },
  {
    title: 'Кто все эти люди?',
    text: 'Это проект компании “BLACK MESA IT”. Исследование и разработка пользовательского интерфейса для веб-приложений, мобильных и настольных платформ.',
    icon: triangle,
  },
  {
    title: 'Хочу с вами связаться!',
    text: 'Если у вас есть потребность в коммерческом использовании сервиса, вы хотите подписать NDA, задать вопрос по работе сервиса, или просто хотите сказать нам спасибо, напишите письмо на support@blackmesait.ru',
    icon: isometry,
  },
  {
    title: 'Как оплатить?',
    text: 'Картой любого банка любой страны, вы не ослышались, любой!',
    icon: thumb,
  },
];
