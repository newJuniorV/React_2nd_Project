//セッション4---------------------------------------------
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    //少し書き方が異なるCssModulesの方法 classNameで指定
    <div className={classes.container}>
      <p className={classes.title}>-CSS Moduless-</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
