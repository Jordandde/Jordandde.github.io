import React, { useState } from "react";
import { Container, Description, Center, Square } from "../App.components";

const Page3 = () => {
  const [nine, setNine] = useState(0);
  const [ten, setTen] = useState(0);
  const [eleven, setEleven] = useState(0);
  const [twelve, setTwelve] = useState(0);
  return (
    <Container
      style={{
        height: "251vh"
      }}
    >
      <Center>
        <Square
          style={{
            background: !nine
              ? "conic-gradient(#ffdab9, #dfd9e2, #ffdab9)"
              : "#89909f",
            marginLeft: "30%",
            marginTop: "10%",
            color: !nine ? "#c3acce" : "#ffdab9"
          }}
          href="//github.com/Jordandde/Golang-Twilio-texter.git"
          onMouseEnter={() => setNine(!nine)}
          onMouseLeave={() => setNine(!nine)}
        >
          <p style={{ width: "80%", height: !nine ? "50%" : "20%" }}>
            SMS to Search Personal Project (In Development)
          </p>
          {nine ? (
            <Description style={{}}>
              When someone texts a search query to a certain phone number, it
              will return the wikipedia result of that query. <br />
              This project is written in Go and utilizes the Twilio API for
              message sending and receiving.
            </Description>
          ) : null}
        </Square>
        <Square
          style={{
            background: !ten
              ? "conic-gradient(#ffdab9,#dfd9e2, #ffdab9)"
              : "#89909f",
            marginRight: "30%",
            marginTop: "10%",
            color: !ten ? "#c3acce" : "#ffdab9"
          }}
          href="//github.com/Jordandde/Solar-Charging-Sun-Tracking-Battery.git"
          onMouseEnter={() => setTen(!ten)}
          onMouseLeave={() => setTen(!ten)}
        >
          <p style={{ width: "80%", height: !ten ? "50%" : "20%" }}>
            Light Tracking Solar Panel ECE Design Day Winner <br />
            (2019), Team of 4
          </p>
          {ten ? (
            <Description style={{ marginTop: "1vh" }}>
              A solar panel that tracks the strongest source of light and
              follows it. <br />
              Written in C, with hardware controlled by an Arduino. <br />
              First place winner of the 2019 ECE, faculty wide, design day
              competition
            </Description>
          ) : null}
        </Square>
        <Square
          style={{
            background: !eleven
              ? "conic-gradient(#dfd9e2, #c3acce, #dfd9e2)"
              : "#89909f",
            marginLeft: "30%",
            marginTop: "10%",
            color: !eleven ? "#e4798a" : "#ffdab9"
          }}
          href="https://www.hackerearth.com/challenges/hackathon/yhack-2018/dashboard/163ea9a/submission/?fbclid=IwAR0CG-hYgm2ui1mRBbY6SZ5ZpI9MjmFcuaABbmw0Pnb5u3AHcD-QTa8-ScU"
          onMouseEnter={() => setEleven(!eleven)}
          onMouseLeave={() => setEleven(!eleven)}
        >
          <p style={{ width: "80%", height: !eleven ? "60%" : "20%" }}>
            Secure Ticketing System <br /> Yale Hacks <br />
            (2018), Team of 4
          </p>
          {eleven ? (
            <Description style={{ marginTop: "1vh" }}>
              An andriod app that transmits encoded, unique, credentials via
              ultrasonic waves to validate tickets. <br />
              written in Java, using Javascript and Google Firebase to store
              credentials, and periodically change them to enforce security.
            </Description>
          ) : null}
        </Square>
        <Square
          style={{
            background: !twelve
              ? "conic-gradient(#dfd9e2, #c3acce, #dfd9e2)"
              : "#89909f",
            marginRight: "30%",
            marginTop: "10%",
            color: !twelve ? "#e4798a" : "#ffdab9"
          }}
          href="https://github.com/Jordandde/Secure-Laser-Communication-System.git"
          onMouseEnter={() => setTwelve(!twelve)}
          onMouseLeave={() => setTwelve(!twelve)}
        >
          <p style={{ width: "80%", height: !twelve ? "60%" : "20%" }}>
            Laser Text Transfer System Personal Project (2018), Team of 3
          </p>
          {twelve ? (
            <Description>
              A system of lasers and photodiodes that transmits text using morse
              code for discrete, secure, communications without leaving behind
              any traceable evidence. <br />
              Written in C with hardware controlled by a Raspberry Pi
            </Description>
          ) : null}
        </Square>
      </Center>
    </Container>
  );
};
export default Page3;
