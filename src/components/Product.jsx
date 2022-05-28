import styled from "@emotion/styled";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  cursor: pointer;
  opacity:0.1;
  transition: all 0.7s ease;
  &:hover {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.3);
  }
`;

const Product = ({ each }) => {
  return (
    <Container>
      <Circle />

      <Image src={each.img} />

      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
