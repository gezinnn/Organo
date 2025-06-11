import styles from "./Botao.module.css";

export default function Botao(props) {
  return (
    <button className={styles.botao}>
      {props.children}
    </button>
  )
}
