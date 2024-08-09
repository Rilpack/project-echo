import styles from './ExampleForm.module.scss'
import { Typewriter } from 'react-simple-typewriter'

export const ExampleForm = () => {
  return (
    <div className={styles.example_form_container}>
      <div className={styles.wrapper_container}>
        <div>
          <span className={styles.example_title}>Кристофер Робин (0:02-0:31):</span>
          <p className={styles.example_text}>
            <Typewriter
              words={['Давным давно, кажется, в прошлую пятницу жил в одной стране медвежонок под именем винни пух, а почему под именем, потому, что над его дверью была надпись винни пух, а он под ней жил однажды винни пух отправился в лес, чтобы немного подкрепиться, он всегда был не прочь подкрепиться, кроме того, он был поэт.']}
              loop={1}
              typeSpeed={25}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>
        </div>
        <div>
          <span className={styles.example_title}>‍Винни-Пух (0:32-1:09)</span>
          <p className={styles.example_text}>
            <Typewriter
              words={['Обязательно такие там парам пурум абилки, пум пурум парам абилки, пам пам пам пам. Если я чешу в затылке не беда. В голове моей опилки да да да, но хотят там и опилки, но кричалки и вопилки, а также шумилки, потелки и сопилки сочиняю я неплохо, иногда да. Хорошо живёт, на свете винни пух, оттого поёт он эти песни вслух, и неважно, чем он занят, если он худеть не станет, а ведь он худеть не станет.']}
              loop={1}
              typeSpeed={28}
              deleteSpeed={0}
              delaySpeed={500}
            /></p>
        </div>
      </div>
    </div>
  )
}