import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 270vh;

  font-family: "Avenir Next";
  font-size: 4vh;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const PhoneIntroContainer = styled(Container)`
  justify-content: space-between;
  background: linear-gradient(200deg, #ffdab9 20%, #dfd9e2);
  height: 100vh;
  @media only screen and (min-width: 751px) {
    display: none;
  }
`;

export const IntroContainer = styled(Container)`
  height: 100vh;
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;
export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 900px;
  grid-template-columns: 45% 10% 45%;
  grid-template-rows: 20% 5% 20% 5% 20% 5% 20% 5%;
  grid-template-areas:
    "A space space"
    "space space B"
    "C space space"
    "space space D";
  place-items: center;
`;
export const FlexRow = styled.div`
  display: flex;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  height: 32vh;
  width: 32vh;

  border-radius: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;
  text-justify: center;
  box-shadow: 0.2vh 0.4vh 0.5vh 0.6vh #c3acce;

  .wrap:hover & {
    transform: scale(50vh);
  }
`;
export const Rectangle = styled.a`
  height: 40vh;
  width: 100%;

  text-decoration: none;

  display: flex;

  position: relative;
  flex-direction: row;
  justify-content: space-between;
  p {
    font-size: 4vh;
  }
  :hover {
    p {
      font-size: 3vh;
      transition: 1s;
    }
    font-size: 2vh;
    color: #dfd9e2;
    background: #89909f;
    box-shadow: 0.2vh 0.4vh 0.5vh 0.6vh #c3acce;
  }
`;
export const Square = styled.a`
  height: 40vh;
  width: 40vh;

  text-decoration: none;

  border-radius: 5vh;
  display: flex;

  position: relative;
  opacity: 0.6;
  flex-direction: column;
  align-items: center;
  text-justify: center;

  box-shadow: 0.2vh 0.4vh 0.5vh 0.6vh #c3acce;
  color: #c3acce;

  transition: 1s;
  p {
    font-size: 4vh;
  }
  @media only screen and (max-width: 751px) {
    opacity: 1;
  }
  :hover {
    p {
      font-size: 2vh;
      transition: 1s;
    }
    font-size: 2vh;
    transform: scale(1.25);
    opacity: 1;
    z-index: 2;
    color: #dfd9e2;
  }
`;
export const Description = styled.div`
  font-size: 2vh;
  opacity: 1;
  transition: 1s;
  color: #dfd9e2;
  width: 70%;
`;

export const Banner = styled.div`
  height: 19vh;
  width: 100%;

  color: #c3acce;

  position: sticky;

  top: 0;
  z-index: 1;

  font-family: "Avenir Next";
  font-size: 8vh;
  font-style: bold;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and(max-width: 750px) {
    font-size: 40px;
  }
`;
export const Banner2 = styled(Banner)`
  font-size: 8vh;
  height: 10vh;
  text-decoration: none;
`;
export const PhoneBanner = styled(Banner)`
  position: relative;
  justify-content: center;
`;

export const Jordandde = styled.div`
  padding-left: 20px;
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;
export const Title = styled.a`
  padding-left: 20px;

  text-decoration: none;
  text-decoration-line: none;
  color: #c3acce;
  @media only screen and (max-width: 750px) {
    dispaly: none;
  }
`;

export const Text = styled.div`
  @media only screen and (max-width: 750px) {
    padding-left: 20px;
    font-size: 50px;
  }
  padding-right: 20px;
`;
