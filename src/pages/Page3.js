import React, { useState } from "react";
import {
  Container,
  Description,
  Center,
  Rectangle,
  Banner2,
  FlexCol,
  Text,
  Title
} from "../App.components";
import Lottie from "react-lottie";
import sunData from "../Animations/lotties/4804-weather-sunny.json";
import busData from "../Animations/lotties/6546-broken-bus.json";
import connectData from "../Animations/lotties/7034-colourfull-number-4.json";
import messageData from "../Animations/lotties/5919-writing-message-loading.json";
const connectLottie = {
  loop: false,
  autoplay: false,
  animationData: connectData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const messageLottie = {
  loop: true,
  autoplay: true,
  animationData: messageData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const busLottie = {
  loop: true,
  autoplay: true,
  animationData: busData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const sunLottie = {
  loop: true,
  autoplay: true,
  animationData: sunData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Page3 = () => {
  const [sun, setSun] = useState(0);
  const [bus, setBus] = useState(0);
  const [connect, setConnect] = useState(0);
  const [message, setMessage] = useState(0);
  return (
    <Container
      style={{
        height: "270vh",
        background: "linear-gradient(180deg, #ffdab9 10%, #dfd9e2 60%, #c3acce"
      }}
    >
      {" "}
      <Banner2>
        <Title href="jordandde.com">Back</Title>
        <Text>Projects</Text>
      </Banner2>
      <Center>
        <Rectangle
          style={{
            background: !sun
              ? "conic-gradient(#ffdab9,#dfd9e2, #ffdab9)"
              : "#89909f",

            color: !sun ? "#c3acce" : "#ffdab9",
            marginTop: "10%"
          }}
          onMouseEnter={() => setSun(!sun)}
          onMouseLeave={() => setSun(!sun)}
          href="//github.com/Jordandde/Solar-Charging-Sun-Tracking-Battery.git"
        >
          <div
            style={{
              marginTop: "2%",
              height: "30vh",
              width: "30vh",
              marginLeft: "20%"
            }}
          >
            <Lottie
              options={sunLottie}
              height={"30vh"}
              width={"30vh"}
              isPaused={!sun}
            />
          </div>
          <FlexCol
            style={{
              marginRight: !sun ? "20%" : "10%",
              marginLeft: sun ? "15%" : 0
            }}
          >
            <p
              style={{
                marginTop: !sun ? "20%" : "5%",
                height: !sun ? "100%" : "20%"
              }}
            >
              Light Tracking Solar Panel
              <br /> ECE Design Day Winner <br />
              (2019), Team of 4
            </p>

            {sun ? (
              <Description style={{ marginTop: "3vh" }}>
                A solar panel that tracks the strongest source of light and
                follows it. <br />
                Written in C, with hardware controlled by an Arduino. <br />
                First place winner of the 2019 ECE, faculty wide, design day
                competition
              </Description>
            ) : null}
          </FlexCol>
        </Rectangle>
        <Rectangle
          style={{
            background: !bus
              ? "conic-gradient(#dfd9e2, #c3acce, #dfd9e2)"
              : "#89909f",
            marginTop: "10%",
            color: !bus ? "#e4798a" : "#ffdab9"
          }}
          onMouseEnter={() => setBus(!bus)}
          onMouseLeave={() => setBus(!bus)}
          href="https://www.hackerearth.com/challenges/hackathon/yhack-2018/dashboard/163ea9a/submission/?fbclid=IwAR0CG-hYgm2ui1mRBbY6SZ5ZpI9MjmFcuaABbmw0Pnb5u3AHcD-QTa8-ScU"
        >
          <FlexCol
            style={{
              marginLeft: !bus ? "20%" : "10%",
              marginRight: bus ? "15%" : 0
            }}
          >
            <p
              style={{
                marginTop: !bus ? "20%" : "5%",
                height: !bus ? "100%" : "20%"
              }}
            >
              Secure Ticketing System <br /> Yale Hacks <br />
              (2018), Team of 4
            </p>
            {bus ? (
              <Description style={{ marginTop: "3vh" }}>
                An andriod app that transmits encoded, unique, credentials via
                ultrasonic waves to validate tickets. <br />
                written in Java, using Javascript and Google Firebase to store
                credentials, and periodically change them to enforce security.
              </Description>
            ) : null}
          </FlexCol>
          <div
            style={{
              marginTop: "2%",
              height: "30vh",
              width: "30vh",
              marginRight: "20%"
            }}
          >
            <Lottie
              options={busLottie}
              height={"30vh"}
              width={"30vh"}
              isPaused={!bus}
            />
          </div>
        </Rectangle>
        <Rectangle
          style={{
            background: !message
              ? "conic-gradient(#dfd9e2, #c3acce, #dfd9e2)"
              : "#89909f",
            color: !message ? "#e4798a" : "#ffdab9",
            marginTop: "10%"
          }}
          href="https://github.com/Jordandde/Secure-Laser-Communication-System.git"
          onMouseEnter={() => setMessage(!message)}
          onMouseLeave={() => setMessage(!message)}
        >
          <div
            style={{
              marginTop: "2%",
              height: "30vh",
              width: "30vh",
              marginLeft: "20%"
            }}
          >
            <Lottie
              options={messageLottie}
              height={"30vh"}
              width={"30vh"}
              isPaused={!message}
            />
          </div>
          <FlexCol
            style={{
              marginRight: !message ? "20%" : "10%",
              marginLeft: message ? "15%" : 0
            }}
          >
            <p
              style={{
                marginTop: !message ? "20%" : "5%",
                height: !message ? "100%" : "20%"
              }}
            >
              Laser Text Transfer System <br />
              Personal Project (2018),
              <br /> Team of 3
            </p>
            {message ? (
              <Description style={{ marginTop: "3vh" }}>
                A system of lasers and photodiodes that transmits text using
                morse code for discrete, secure, communications without leaving
                behind any traceable evidence. <br />
                Written in C with hardware controlled by a Raspberry Pi
              </Description>
            ) : null}
          </FlexCol>
        </Rectangle>
        <Rectangle
          style={{
            background: !connect
              ? "conic-gradient(#ffdab9, #dfd9e2, #ffdab9)"
              : "#89909f",
            marginTop: "10%",
            color: !connect ? "#c3acce" : "#ffdab9"
          }}
          href="https://github.com/Jordandde/Connect-Four.git"
          onMouseEnter={() => setConnect(!connect)}
          onMouseLeave={() => setConnect(!connect)}
        >
          <FlexCol
            style={{
              marginLeft: !connect ? "20%" : "10%",
              marginRight: connect ? "15%" : 0
            }}
          >
            <p
              style={{
                marginTop: !connect ? "20%" : "5%",
                height: !connect ? "100%" : "20%"
              }}
            >
              Connect Four,
              <br /> Personal Project,
              <br /> Solo
            </p>
            {connect ? (
              <Description style={{ marginTop: "3vh" }}>
                A normal game of Connect Four <br />
                This project is written in Java and I am working on converting
                it into a webapp
              </Description>
            ) : null}
          </FlexCol>
          <div
            style={{
              marginTop: "2%",
              height: "30vh",
              width: "30vh",
              marginRight: "20%"
            }}
          >
            <Lottie
              options={connectLottie}
              height={"30vh"}
              width={"30vh"}
              isPaused={!connect}
            />
          </div>
        </Rectangle>
      </Center>
    </Container>
  );
};
export default Page3;
