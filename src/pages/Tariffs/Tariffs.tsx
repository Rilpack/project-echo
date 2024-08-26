import { tariffs } from '../../config/tariffs'
import styles from './Tariffs.module.scss'

export const Tariffs = () => {
  const styleClasses = [
    {
      title: styles.block_title_b,
      btn: styles.btn_base
    },
    {
      title: styles.block_title_b_standard,
      btn: styles.btn_standard
    },
    {
      title: styles.block_title_b_premium,
      btn: styles.btn_premium
    }
  ];

  return (
    <div className={styles.block_page_container}>
      <div className={styles.lk_container}>
        <div className={styles.title_container}>
          <h1 className={styles.title_h1}>Выберите свой оптимальный тариф для транскрибирования</h1>
          <span className={styles.title_span}>Мы предлагаем три тарифа, чтобы вы могли выбрать наиболее подходящий вариант в зависимости от ваших потребностей. Независимо от выбранного плана, вы получите высокое качество транскрибации и быстрые результаты. Ознакомьтесь с нашими тарифами ниже и найдите идеальное решение для своих задач.</span>
        </div>
        <div className={styles.wrapper_tariffs}>
          {tariffs.map((tariff, index) => {
            return (
              <div key={index} className={styles.container_tariff}>
                <div className={styles.block_title_tariff}>
                  <b className={styleClasses[index].title}>{tariff.title}</b>
                  <p className={styles.block_title_p}>{tariff.description}</p>
                </div>
                <div className={styles.container_stuff}>
                  <div className={styles.stuff}>
                    <p className={styles.stuff_p}>Цена за минуту:</p>
                    <span className={styles.stuff_span}>{tariff.price_per_minute} руб.</span>
                  </div>
                  <div className={styles.stuff}>
                    <p className={styles.stuff_p}>Максимальное количество минут:</p>
                    <span className={styles.stuff_span}>{tariff.max_duration_minutes} мин.</span>
                  </div>
                </div>
                <button className={styleClasses[index].btn}>Активировать</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}