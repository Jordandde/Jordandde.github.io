import React, { useState } from "react";
import { Container, Description, Center, Square } from "../App.components";

const Page1 = () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  return (
    <Container
      style={{
        height: "251vh"
      }}
    >
      <Center>
        <Square
          style={{
            color: one ? "#ffdab9" : "#c3acce",
            background: !one
              ? "conic-gradient(#ffdab9,#dfd9e2,#ffdab9"
              : "#89909f",
            marginLeft: "30%",
            marginTop: "10%",
            transition: "1s"
          }}
          onMouseEnter={() => setOne(!one)}
          onMouseLeave={() => setOne(!one)}
        >
          <p style={{ width: "70%", height: !one ? "60%" : "20%" }}>
            Waterloo Electrical and Computer Engineering
          </p>
          {one ? (
            <Description style={{ marginTop: "2vh" }}>
              I am currently pursuing an Electrical and Computer Engineering
              degree with a minor in Entrepreneurship at the University of
              Waterloo
            </Description>
          ) : null}
        </Square>
        <Square
          style={{
            background: !two
              ? "conic-gradient(#dfd9e2, #c3acce, #dfd9e2)"
              : "#89909f",
            color: !two ? "#e4798a" : "#ffdab9",
            marginRight: "30%",
            marginTop: "10%"
          }}
          onMouseEnter={() => setTwo(!two)}
          onMouseLeave={() => setTwo(!two)}
        >
          <p
            style={{
              width: "70%",
              height: !two ? "40%" : "10%"
            }}
          >
            Professional Musician
          </p>
          {two ? (
            <Description style={{ marginTop: "1vh" }}>
              I specialize in the various types of Saxophones and Piano, but I
              play the Drums, Flute, and Trumpet as well.
              <br /> I have played at various concert venues across North
              America and won several first place titles in Stage Band, Wind
              Ensemble, and Chamber Choir competitions
            </Description>
          ) : null}
        </Square>
        <Square
          style={{
            color: "#ffdab9",
            background: !three
              ? "conic-gradient(#c3acce, #dfd9e2, #c3acce)"
              : "#89909f",
            marginLeft: "30%",
            marginTop: "10%"
          }}
          onMouseEnter={() => setThree(!three)}
          onMouseLeave={() => setThree(!three)}
        >
          <p style={{ width: "70%", height: !three ? "50%" : "10%" }}>
            Software Developer
          </p>
          {three ? (
            <Description style={{ marginTop: "1vh" }}>
              I have 2 years of experience, and I am profficient in Go, C/C++,
              Javascript, Java, Python, Swift, SQL, and C#. I have professional
              experience working as a full-stack developer, where I used Go for
              back end, and React.js for front end, as well as Redux to help
              sort out the states
            </Description>
          ) : null}
        </Square>
        <Square
          style={{
            background: !four
              ? "conic-gradient(#c3acce, #9ad1d4, #c3acce)"
              : "#89909f",
            color: "#ffdab9",
            marginTop: "10%",
            marginRight: "30%"
          }}
          onMouseEnter={() => setFour(!four)}
          onMouseLeave={() => setFour(!four)}
        >
          <p style={{ width: "70%", height: !four ? "50%" : "10%" }}>
            Athletics
          </p>
          {four ? (
            <Description style={{ maringTop: "1vh" }}>
              I compete in Table Tennis tournaments, as well as run track. I am
              currently learning Kendo, as well as trying to get better at
              basketball
            </Description>
          ) : null}
        </Square>
      </Center>
    </Container>
  );
};
export default Page1;
