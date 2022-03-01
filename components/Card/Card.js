import styles from "./Card.module.css";

export default function Card({ name, phone, email, image, id }) {
  const { url, alt } = image;
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <img src={url} alt={alt} className={styles["card-img"]} />
        {/* <Image src={url} alt={alt} className={styles["card-img"]} /> */}
      </div>
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
