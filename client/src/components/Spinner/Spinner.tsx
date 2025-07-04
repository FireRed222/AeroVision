import s from "./Spinner.module.scss";

interface SpinnerProps {
  minHeight?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ minHeight = "100dvh" }) => {
  return (
    <section
      className={s.spinner}
      style={{ "--spinner-min-height": minHeight } as React.CSSProperties}
    >
      <div className={s.container}>
        <span className={s.loader}></span>
      </div>
    </section>
  );
};

export default Spinner;
