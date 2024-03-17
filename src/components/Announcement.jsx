import styled from "@emotion/styled";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;  
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Sera sera milay Be ! livraison gratuite androany fotsiny
    </Container>
  );
};

export default Announcement;