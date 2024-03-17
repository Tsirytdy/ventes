import styled from "@emotion/styled/macro";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from "@mui/icons-material";
import { mobile, mobileLandscape } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobileLandscape({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContacItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ventesmg</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint placeat
          nesciunt quos corrupti commodi amet aliquid at recusandae dolore,
          officiis animi optio distinctio labore quae cupiditate fugiat
          voluptate tenetur quibusdam!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Liens</Title>
        <List>
          <ListItem>Acceuil</ListItem>
          <ListItem>Panier</ListItem>
          <ListItem>Pour Homme</ListItem>
          <ListItem>Pour Femme</ListItem>
          <ListItem>Accessoires</ListItem>
          <ListItem>Mon Compte</ListItem>
          <ListItem>Suivi de commande</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Conditions</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contacts</Title>
        <ContacItem>
          <Room style={{ marginRight: "10px" }} />
          0920 C 40 Rue de la Gare Antsirabe
        </ContacItem>

        <ContacItem>
          <Phone style={{ marginRight: "10px" }} />
          +261 32 000 00
        </ContacItem>

        <ContacItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@tintoly.bg
        </ContacItem>
        <Payment src="https://i.ibb.co/Qfvnn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
