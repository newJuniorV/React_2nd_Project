//セッション３---------------------------------------------
import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//memoを使うことで、propsが変更されたときのみ、子であるこのchiledcomponentsが再レンダリングされる
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaが再レンダリングされた！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>child component</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
