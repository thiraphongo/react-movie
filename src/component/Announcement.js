import styled from "styled-components";


const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Welcome.
  Millions of movies, TV shows and people to discover. Explore now.</Container>;
};

export default Announcement;