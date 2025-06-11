import Card from "../Card/Card";
import styles from "./Time.module.css";

export default function Time(props) {
  return (
    props.colaboradores.length > 0 && <section
      className={styles.time}
      style={{ backgroundColor: props.corPrimaria }}
    >
      <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
      <div className={styles.cards}>
        {props.colaboradores.map((colaborador) => (
          <Card
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corDeFundo={props.corSecundaria}
          />
        ))}
      </div>
    </section>
  );
}
