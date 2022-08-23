/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  //➀cssと同じ書き方が出来る
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  //➁　インラインスタイルで書く方法　cssと同じ書き方が出来ない　つまりキャメルケースなどを利用
  const titleStyle = css({
    margin: 0,
    color: "red"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>-Emotion-</p>
      <Button>FIGHT!</Button>
    </div>
  );
};
//➂styledcomponentsと似た書き方で出来る。
const Button = styled.button`
  background-color: blue;
  color: yellow;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;

//@emotion/react @emotion/styledのimport必須
//2行目がEmotionを使うときのルール　バージョンの問題で一行目も書いた
//emotionでcssを充てる時は css = {}の形
