import { useState } from 'react';
import styles from './MainForm.module.scss'

type Speakers = {
  none: "Не делить на спикеров",
  one: "Один спикер",
  two: "Два спикера",
  three: "Три спикера",
  four: "Четыре спикера",
  five: "Пять спикеров"
}

type Languages = {
  russian: "Русский",
  english: "Английский "
}

export const MainForm = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<keyof Speakers>('none');
  const [selectedLanguages, setSelectedLanguages] = useState<keyof Languages>('russian');

  const speakers: Speakers = {
    none: "Не делить на спикеров",
    one: "Один спикер",
    two: "Два спикера",
    three: "Три спикера",
    four: "Четыре спикера",
    five: "Пять спикеров"
  };

  const languages: Languages = {
    russian: "Русский",
    english: "Английский "
  };

  return (
    <div className={styles.title_form_container}>

      <button className={styles.button_style}>
        Загрузить файл
      </button>

      <div className={styles.element_container}>
        <label htmlFor="TextEmail" className={styles.element_label}>Почта</label>
        <input
          className={styles.input_style}
          type="email"
          id="TextEmail"
          name="name"
          placeholder="example@mail.com"
        />
      </div>

      <div className={styles.element_container}>
        <label htmlFor="TextSpeaker" className={styles.element_label}>Спикер</label>
        <select
          className={styles.select_style}
          value={selectedSpeaker}
          onChange={e => setSelectedSpeaker(e.target.value as keyof Speakers)}
        >
          {Object.keys(speakers).map(key => (
            <option key={key} value={key}>
              {speakers[key as keyof Speakers]}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.element_container}>
        <label htmlFor="TextLanguages" className={styles.element_label}>Язык</label>
        <select
          className={styles.select_style}
          value={selectedLanguages}
          onChange={e => setSelectedLanguages(e.target.value as keyof Languages)}
        >
          {Object.keys(languages).map(key => (
            <option key={key} value={key}>
              {languages[key as keyof Languages]}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.captcha_form_container}>
        <input type='checkbox'>
        </input>
        <h4>Тут будет капча</h4>
      </div>

      <p className={styles.text_style}>Нажимая кнопку "Отправить" вы соглашаетесь с <a style={{ color: '#2a83ff' }} href='/' target='_blank'>нашей политикой конфиденциальности</a></p>

      <button className={styles.button_accept_style}>
        Отправить
      </button>

    </div>
  )
}
