//styled componentsのimport必須
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>-styled components-</Title>
      <Button>FIGHT!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: red;
`;

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

//Styled JSXでは動かなかった、hoverが動いた
