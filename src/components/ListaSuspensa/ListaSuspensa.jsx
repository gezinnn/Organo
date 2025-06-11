import styles from "./ListaSuspensa.module.css";

export default function ListaSuspensa(props) {
  return (
    <div className={styles.listaSuspensa}>
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        value={props.valor}>
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
