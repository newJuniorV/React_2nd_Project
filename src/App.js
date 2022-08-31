//セッション３---------------------------------------------
// import { useState, useCallback } from "react"; //import 必須
// import "./styles.css";
// import { ChildArea } from "./ChiledArea";

// export default function App() {
//   const [text, setText] = useState("");
//   const [open, setOpen] = useState(false);

//   const onChangeText = (event) => setText(event.target.value);

//   const onClickOpen = () => setOpen(!open);

//useCallbackで囲むことで、同じ関数とみなされて、propsが変化しなくなる　つまりこのコンポーネントが再度レンダリングされることがなくなる
//   const onClickClose = useCallback(() => setOpen(false), []);

//   // const onClickAdd = () => {
//   //   SetNum(num + 1);
//   // };
//   return (
//     <div className="App">
//       {/* inputの中身に｛text｝と指定するだけでは、入力できないため　onChnageを利用する。 */}
//       <input value={text} onChange={onChangeText} />
//       <br />
//       <br />
//       <button onClick={onClickOpen}>表示</button>
//       <ChildArea open={open} onClickClose={onClickClose} />
//     </div>
//   );
// }

import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/inlineStyle";
import { StyleJsx } from "./components/StyeledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import "./styles.css";
//セッション4---------------------------------------------
export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyleJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
