import styles from "./Input.module.css";

export default function Input(props) {

  function aoDigitado(ev) {
    props.aoAlterado(ev.target.value)

  }

  return (
    <div className={styles.campoTexto}>
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        value={props.valor}
      />
    </div>
  );
}
