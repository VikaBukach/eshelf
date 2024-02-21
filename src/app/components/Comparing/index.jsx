import style from "./Comparing.module.scss";

export const ComparingPage = () => {
  return (
    <div className="container">
      <div className={style.comparing}>
        <h1>Product comparing</h1>
        <div className={style.comparingBody}>
          <div className={style.grid}>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam!</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam!</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam!</div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};
