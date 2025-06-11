import styles from "./Card.module.css";

export default function Card({ nome, cargo, imagem, corDeFundo }) {
  return (
    <div className={styles.colaborador}>
      <div className={styles.cabecalho} style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className={styles.rodape}>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}
