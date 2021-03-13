import React, { useState, useEffect } from "react";
import {
  FlexCol,
  FlexRow,
  Container,
  Banner2,
  Banner,
  Description,
  Text,
  Center,
  IntroContainer,
  Square,
  Jordandde
} from "./App.components";
//container height will be 251vh
function App() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  return (
    <div>
      <IntroContainer
        style={{
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #ffdab9 40%,#dfd9e2)"
        }}
      >
        <FlexRow
          style={{ height: "100%", justifyContent: "center", color: "#c3acce" }}
        >
          <FlexCol
            style={{
              paddingRight: 30
            }}
          >
            <Banner>Hi, I'm</Banner>
          </FlexCol>
          <FlexCol>
            <Banner>Jord</Banner>
          </FlexCol>
          <FlexCol>
            <Banner style={{ position: "relative" }}>an</Banner>
            <Banner>and</Banner>
          </FlexCol>
          <FlexCol>
            <Banner
              style={{
                marginTop: "19vh",
                position: "relative"
              }}
            >
              rew
            </Banner>
            <Banner>de</Banner>
          </FlexCol>
          <FlexCol>
            <Banner style={{ marginTop: "38vh", position: "relative" }}>
              Souza
            </Banner>
            <Banner />
          </FlexCol>
        </FlexRow>
      </IntroContainer>
      <Container
        className="Terminal"
        style={{
          height: "270vh",
          position: "relative",
          background: "linear-gradient(180deg,  #dfd9e2 40%, #c3acce)",
          color: "#c3acce"
        }}
      >
        <Banner2 style={{ fontSize: "7vh" }}>
          <Jordandde>Jordandde</Jordandde>
          <Text>Home</Text>
        </Banner2>
        <Center style={{ transition: "1s" }}>
          <Square
            style={{
              color: one ? "#ffdab9" : "#c3acce",
              background: !one
                ? "conic-gradient(#ffdab9,#dfd9e2,#ffdab9)"
                : "#89909f",
              marginRight: "30%",
              marginTop: "10%",
              transition: "1s"
            }}
            href="About"
            onMouseEnter={() => setOne(!one)}
            onMouseLeave={() => setOne(!one)}
          >
            <p style={{ width: "70%", height: !one ? "60%" : "20%" }}>
                Temporarily down
            </p>
            {one ? (
              <Description style={{ marginTop: "2vh" }}>
                  This website is currently undergoing construction as I change hosts and registrars
              </Description>
            ) : null}
          </Square>
        </Center>
      </Container>
    </div>
  );
}
export default App;
