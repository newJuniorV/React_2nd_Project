//styled-jsxのimport必須
//中にCSSを書く　CSSと書き方h同じ

export const StyleJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styeld JSX -</p>
        <button className="button">FIGHT!</button>
      </div>
      {/* ``を使う */}
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          margin: 0;
          color: red;
        }

        .button {
          background-color: blue;
          color: yellow;
          padding: 8px;
          border-radius: 8px;
        }
        // hoverは拡張機能を使わないと行けないらしい
      `}</style>
    </>
  );
};
