import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FlexCol,
  FlexRow,
  Container,
  PhoneBanner,
  Banner,
  Banner2,
  PhoneIntroContainer,
  Description,
  Text,
  Center,
  IntroContainer,
  Square,
  Jordandde
} from "./App.components";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
//container height will be 251vh
function App() {
  const titles = [
    "About Me",
    "Technical Experience",
    "Projects",
    "Contact Info"
  ];
  const page = [Page1(), Page2(), Page3(), Page4()];
  const [current, setCurrent] = useState(0);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  return (
    <div>
      <PhoneIntroContainer>
        <FlexCol>
          <PhoneBanner>Hi,</PhoneBanner>
          <PhoneBanner>I'm</PhoneBanner>
          <PhoneBanner>Jordan</PhoneBanner>
        </FlexCol>
      </PhoneIntroContainer>
      <IntroContainer
        style={{
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #ffdab9 40%,#dfd9e2)"
        }}
      >
        {/*separate the word by what gets covered and what doesn't, and then have the z-index of what gets covered disappear*/}
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
          height: current !== 4 ? "270vh" : "169vh",
          position: "relative",
          background: "linear-gradient(180deg,  #dfd9e2 40%, #c3acce)",
          color: "#c3acce"
        }}
      >
        <Banner2
          style={{
            background: "dfd9e2",
            color: "#c3acce"
          }}
        >
          {!current ? (
            <Jordandde>Jordandde</Jordandde>
          ) : (
            <Jordandde
              onClick={() => setCurrent(0)}
              style={{ cursor: "pointer" }}
            >
              Back
            </Jordandde>
          )}
          {!current ? (
            <Text>Homepage</Text>
          ) : (
            <Text>{titles[current - 1]}</Text>
          )}
        </Banner2>
        {!current ? (
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
              onClick={() => {
                setOne(!one);
                setCurrent(1);
              }}
              onMouseEnter={() => setOne(!one)}
              onMouseLeave={() => setOne(!one)}
            >
              <p style={{ width: "70%", height: !one ? "60%" : "20%" }}>
                About Me
              </p>
              {one ? (
                <Description style={{ marginTop: "2vh" }}>
                  Learn more about me, including my current degree, hobbies, and
                  interests
                </Description>
              ) : null}
            </Square>
            <Square
              style={{
                color: two ? "#ffdab9" : "#c3acce",
                background: !two
                  ? "conic-gradient(#ffdab9,#dfd9e2,#ffdab9)"
                  : "#89909f",
                marginLeft: "30%",
                marginTop: "10%",
                transition: "1s"
              }}
              onClick={() => {
                setTwo(!two);
                setCurrent(2);
              }}
              onMouseEnter={() => setTwo(!two)}
              onMouseLeave={() => setTwo(!two)}
            >
              <p style={{ width: "70%", height: !two ? "60%" : "20%" }}>
                Technical Experience
              </p>
              {two ? (
                <Description style={{ marginTop: "2vh" }}>
                  Learn more about technical experience, including the languages
                  that I am profficient in, and my work history
                </Description>
              ) : null}
            </Square>
            <Square
              style={{
                color: three ? "#ffdab9" : "#c3acce",
                background: !three
                  ? "conic-gradient(#ffdab9,#dfd9e2,#ffdab9)"
                  : "#89909f",
                marginRight: "30%",
                marginTop: "10%",
                transition: "1s"
              }}
              onClick={() => {
                setThree(!three);
                setCurrent(3);
              }}
              onMouseEnter={() => setThree(!three)}
              onMouseLeave={() => setThree(!three)}
            >
              <p style={{ width: "70%", height: !three ? "60%" : "20%" }}>
                Projects
              </p>
              {three ? (
                <Description style={{ marginTop: "2vh" }}>
                  Learn more about my various projects
                </Description>
              ) : null}
            </Square>
            <Square
              style={{
                color: four ? "#ffdab9" : "#c3acce",
                background: !four
                  ? "conic-gradient(#ffdab9,#dfd9e2,#ffdab9)"
                  : "#89909f",
                marginLeft: "30%",
                marginTop: "10%",
                transition: "1s"
              }}
              onClick={() => {
                setFour(!four);
                setCurrent(4);
              }}
              onMouseEnter={() => setFour(!four)}
              onMouseLeave={() => setFour(!four)}
            >
              <p style={{ width: "70%", height: !four ? "60%" : "20%" }}>
                Contact Me and Resumé
              </p>
              {four ? (
                <Description style={{ marginTop: "2vh" }}>
                  Learn about how to contact me, and a link to my resumé
                </Description>
              ) : null}
            </Square>
          </Center>
        ) : (
          <div> {page[current - 1]}</div>
        )}
      </Container>
    </div>
  );
}
export default App;
