import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Register Now!
      </h2>
      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default CardDeal;
