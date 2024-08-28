import styles from './UploadModal.module.scss'
import close from '../../../assets/images/svg/close.svg'
import { useRef, useState } from 'react';
import { Speakers } from '../../../interfaces/speakers';
import { Languages } from '../../../interfaces/languages';
import { Loader } from '../../Loader/Loader';

interface IUploadModal {
  onClose: () => void
}

export const UploadModal = ({ onClose }: IUploadModal) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<keyof Speakers>('none');
  const [selectedLanguages, setSelectedLanguages] = useState<keyof Languages>('russian');

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
    <div className={styles.wrapper_upload_modal}>
      <div className={styles.container_modal}>
        <div className={styles.header_modal}>
          <h3 className={styles.h3_text}>Загрузка файла</h3>
          <img onClick={onClose} className={styles.img_close} src={close} />
        </div>
        <div className={styles.wrapper_content_modal}>
          <div className={styles.content_modal}>
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

            <button onClick={onClose} className={styles.button_accept_style}>
              {false ? "Отправить" : <Loader width={20} height={20} style="dark" />}
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}