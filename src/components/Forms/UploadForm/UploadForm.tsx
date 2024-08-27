import { useRef, useState } from 'react';
import styles from './UploadForm.module.scss'
import { Speakers } from '../../../interfaces/speakers';
import { Languages } from '../../../interfaces/languages';

interface IUploadForm {
  setActiveModal: () => void;
}

export const UploadForm = ({ setActiveModal }: IUploadForm) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<keyof Speakers>('none');
  const [selectedLanguages, setSelectedLanguages] = useState<keyof Languages>('russian');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

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
    english: "Английский"
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.form_container}>

      <div className={styles.wrapper_form}>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        <button className={styles.button_style} onClick={handleFileUpload}>
          Загрузить файл
        </button>

        {selectedFile && <p>Выбранный файл: {selectedFile.name}</p>}

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

        <p className={styles.text_style}>Нажимая кнопку "Отправить" вы соглашаетесь с <a style={{ color: '#2a83ff' }} href='/' target='_blank'>нашей политикой конфиденциальности</a></p>

        <button onClick={setActiveModal} className={styles.button_accept_style}>
          Отправить
        </button>
      </div>

    </div>
  )
}
