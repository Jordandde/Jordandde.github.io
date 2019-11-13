import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FlexCol,
  FlexRow,
  Container,
  PhoneBanner,
  Banner,
  PhoneIntroContainer,
  Description,
  Text,
  Center,
  IntroContainer,
  Square,
  Jordandde
} from "./App.components";
//TODO: // is used to send to a new webite
//TODO: change background  color to  gray when the mouse is hovering over a  square,  change font colors  to make it readable
/*
#dfd9e2 light purple
#c3acce dark purple
#e4798a coral
#ffdab9 peach
#9ad1d4 green-blue
*/
function App() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [ten, setTen] = useState(false);
  const [eleven, setEleven] = useState(false);
  const [twelve, setTwelve] = useState(false);
  const [thirteen, setThirteen] = useState(false);
  const [fourteen, setFourteen] = useState(false);

  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
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
          background: "linear-gradient(180deg, #ffdab9 20%,#dfd9e2)"
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
        className="app"
        style={{
          background:
            "linear-gradient(180deg, #dfd9e2 10%, #c3acce 60%, #9ad1d4 )",
          color: "#c3acce"
        }}
      >
        <Banner
          style={{
            //background: "linear-gradient(160deg ,#dfd9e2 10%, #ffdab9)",
            background: "#dfd9e2",
            color: "#c3acce"
          }}
        >
          <Jordandde>Jordandde</Jordandde>
          <Text>About Me</Text>
        </Banner>
        {/*<p>{date === "Mon/7" ? date : "Loading date..."}</p>*/}
        <Center>
          <Square
            style={{
              color: one ? "#ffdab9" : "#c3acce",
              background: !one
                ? "conic-gradient(#ffdab9,#dfd9e2,#ffdab9"
                : "#89909f",
              marginRight: "30%",
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
              marginLeft: "30%",
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
              marginRight: "30%",
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
                Javascript, Java, Python, Swift, SQL, and C#. I have
                professional experience working as a full-stack developer, where
                I used Go for back end, and React.js for front end, as well as
                Redux to help sort out the states
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
              marginLeft: "30%"
            }}
            onMouseEnter={() => setFour(!four)}
            onMouseLeave={() => setFour(!four)}
          >
            <p style={{ width: "70%", height: !four ? "50%" : "10%" }}>
              Athletics
            </p>
            {four ? (
              <Description style={{ maringTop: "1vh" }}>
                I compete in Table Tennis tournaments, as well as run track. I
                am currently learning Kendo, as well as trying to get better at
                basketball
              </Description>
            ) : null}
          </Square>
        </Center>
      </Container>
      <Container
        style={{
          background:
            "linear-gradient(180deg, #9ad1d4 10%, #dfd9e2 60%, #ffdab9)"
        }}
      >
        <Banner
          Id="banner1"
          style={{
            color: "#dfd9e2",
            background: "#9ad1d4"
          }}
        >
          <Jordandde>Jordandde</Jordandde>
          <Text>Technical Experience</Text>
        </Banner>
        <Center>
          <Square
            style={{
              background: !five
                ? "conic-gradient(#9ad1d4, #dfd9e2 , #9ad1d4)"
                : "#89909f",
              marginLeft: "30%",
              color: !five ? "#e4798a" : "#ffdab9",
              marginTop: "10%"
            }}
            onMouseEnter={() => setFive(!five)}
            onMouseLeave={() => setFive(!five)}
          >
            <p
              style={{
                width: "80%",
                height: !five ? "50%" : "10%",
                textAlign: !five ? "center" : null,
                marginTop: !five ? "30%" : null
              }}
            >
              Languages
            </p>
            {five ? (
              <Description>
                I have professional experience using C/C++, Golang, SQL,
                PostgreSQL, Java, and Javascript <br />
                Including the languages mentioned above, I am profficient in
                Swift, Python, and C#
              </Description>
            ) : null}
          </Square>
          <Square
            style={{
              height: "45vh",
              width: "45vh",
              background: !six
                ? "conic-gradient(#9ad1d4, #dfd9e2, #9ad1d4)"
                : "#89909f",
              marginRight: "30%",
              color: !six ? "#e4798a" : "#ffdab9",
              marginTop: "10%"
            }}
            onMouseEnter={() => setSix(!six)}
            onMouseLeave={() => setSix(!six)}
          >
            <p
              style={{
                width: "80%",
                height: !six ? "50%" : "10%",
                textAlign: !six ? "center" : null,
                marginTop: !six ? "30%" : null
              }}
            >
              Frameworks, Libraries, and Tools
            </p>
            {six ? (
              <Description>
                I have professional experience using the React.js, and Node.js
                frameworks, and I have used the .NET, and Firebase frameworks
                for personal projects
                <br />
                I have professional experience using the Redux library.
                <br />I enjoy coding using Vim commands, and I regularly use Git
                for version control, but I can also use SVN
              </Description>
            ) : null}
          </Square>
          <Square
            style={{
              height: "45vh",
              width: "45vh",
              background: !seven
                ? "conic-gradient(#dfd9e2, #ffdab9 , #dfd9e2)"
                : "#89909f",
              marginLeft: "30%",
              marginTop: "10%",

              color: !seven ? "#e4798a" : "#ffdab9"
            }}
            onMouseEnter={() => setSeven(!seven)}
            onMouseLeave={() => setSeven(!seven)}
          >
            <p
              style={{
                width: !seven ? "90%" : "80%",
                height: !seven ? "60%" : "20%",
                textAlign: !seven ? "center" : null,
                marginTop: !seven ? "20%" : null
              }}
            >
              Tugolo, <br />
              Full-stack Developer (intern),
              <br /> 05/19 - 09/19
            </p>
            {seven ? (
              <Description>
                For the back end, I created prototypes of various services,
                using Golang and PostgreSQL, such as an automated
                account-verification email service, as well as I restructured
                the database. <br />
                For the front end, I created various interactive pages, using
                React.js, such as a profile page, and managed the states using
                Redux
              </Description>
            ) : null}
          </Square>
          <Square
            style={{
              background: !eight
                ? "conic-gradient(#dfd9e2, #ffdab9 , #dfd9e2)"
                : "#89909f",
              marginRight: "30%",
              color: !eight ? "#e4798a" : "#ffdab9",
              marginTop: "10%"
            }}
            onMouseEnter={() => setEight(!eight)}
            onMouseLeave={() => setEight(!eight)}
          >
            <p
              style={{
                width: "80%",
                height: !eight ? "60%" : "20%",
                textAlign: !eight ? "center" : null,
                marginTop: !eight ? "10%" : null
              }}
            >
              Midnight Sun, Solar Car <br /> Telemetry Team Member <br /> 09/18
              - 12/18
            </p>
            {eight ? (
              <Description>
                Worked in a small team to write various programs that controlled
                the flow of information throughout the car to the driver. This
                includes things such as a script for lights that indicate the
                status of the car, on the driver's side panel
              </Description>
            ) : null}
          </Square>
        </Center>
      </Container>
      <Container
        style={{
          background: "linear-gradient(180deg, #ffdab9 10%,#dfd9e2 60%,#c3acce "
        }}
      >
        <Banner
          style={{
            color: "#e4798a",
            background: "#ffdab9"
          }}
        >
          <Jordandde>Jordandde</Jordandde>
          <Text>Projects</Text>
        </Banner>
        <Center>
          <Square
            style={{
              background: !ten
                ? "conic-gradient(#ffdab9,#dfd9e2, #ffdab9)"
                : "#89909f",
              marginLeft: "30%",
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
              marginRight: "30%",
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
              marginLeft: "30%",
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
                A system of lasers and photodiodes that transmits text using
                morse code for discrete, secure, communications without leaving
                behind any traceable evidence. <br />
                Written in C with hardware controlled by a Raspberry Pi
              </Description>
            ) : null}
          </Square>
          <Square
            style={{
              background: !nine
                ? "conic-gradient(#ffdab9, #dfd9e2, #ffdab9)"
                : "#89909f",
              marginRight: "30%",
              marginTop: "10%",
              color: !nine ? "#c3acce" : "#ffdab9"
            }}
            href="https://github.com/Jordandde/Connect-Four.git"
            onMouseEnter={() => setNine(!nine)}
            onMouseLeave={() => setNine(!nine)}
          >
            <p style={{ width: "80%", height: !nine ? "50%" : "20%" }}>
              Connect Four, Personal Project
            </p>
            {nine ? (
              <Description style={{}}>
                A normal game of Connect Four <br />
                This project is written in Java and I am working on converting
                it into a webapp
              </Description>
            ) : null}
          </Square>
        </Center>
      </Container>
      <Container
        style={{
          height: "150vh",
          background:
            "linear-gradient(180deg, #c3acce 10%, #9ad1d4 60%, #ffdab9)"
        }}
      >
        <Banner
          style={{
            color: "#ffdab9",
            background: "#c3acce"
          }}
        >
          <Jordandde>Jordandde</Jordandde>
          <Text>Contact Me/Resumé</Text>
        </Banner>
        <Center>
          <Square
            style={{
              background: !thirteen
                ? "conic-gradient(#c3acce, #9ad1d4, #c3acce)"
                : "#89909f",
              marginRight: "30%",
              marginTop: "10%",
              color: "#ffdab9"
            }}
            href="mailto:jordandesouza5@gmail.com?subject=Hello"
            onMouseEnter={() => setThirteen(!thirteen)}
            onMouseLeave={() => setThirteen(!thirteen)}
          >
            <p style={{ width: "80%", height: !thirteen ? "40%" : "10%" }}>
              Contact Info
            </p>
            {thirteen ? (
              <Description>
                Email: jordandesouza5@gmail.com, click this box to create a
                default email <br /> <br />
                Phone:
                <br /> 647 839 9032, <br />
                please only contact me for business/intership related subjects
                <br />
              </Description>
            ) : null}
          </Square>
          <Square
            style={{
              background: !fourteen
                ? "conic-gradient(#9ad1d4, #ffdab9,#9ad1d4) "
                : "#89909f",
              marginLeft: "30%",
              marginTop: "10%",
              color: !fourteen ? "#e4798a" : "#ffdab9"
            }}
            onMouseEnter={() => setFourteen(!fourteen)}
            onMouseLeave={() => setFourteen(!fourteen)}
          >
            <p style={{ width: "80%", height: !fourteen ? "40%" : "10%" }}>
              Resumé
            </p>
            {fourteen ? (
              <Description>
                I will upload my resumé in a few days, as this I am currently
                researching the best way to do this. Please contact me if you
                know a good way to do this.
              </Description>
            ) : null}
          </Square>
        </Center>
      </Container>
    </div>
  );
}

export default App;
