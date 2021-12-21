import styles from "../styles/Porta.module.css";

export default function Porta() {
  return (
    <div className={styles.area}>
      <div className={styles.estrutura}>
        <div className={styles.porta}>
          <div className={styles.numero}>4</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao} />
    </div>
  );
}