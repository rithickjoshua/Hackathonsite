import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className=" flex-col">
      <p className={`${styles.paragraph} max-w-[200px] `}>
        Our Sponsers
      </p>
    </div>
  </section>
);

export default CTA;
