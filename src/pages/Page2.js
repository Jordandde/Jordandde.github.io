import React, { useState } from "react";
import {
  Container,
  Title,
  Banner2,
  Text,
  Description,
  Center,
  Square
} from "../App.components";

const Page2 = () => {
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);
  const [seven, setSeven] = useState(0);
  const [eight, setEight] = useState(0);
  return (
    <Container
      style={{
        height: "270vh",
        background: "linear-gradient(180deg, #9ad1d4 10%, #dfd9e2 60%, #ffdab9)"
      }}
    >
      {" "}
      <Banner2>
        <Title href="/">Back</Title>
        <Text>Experience</Text>
      </Banner2>
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
              frameworks, and I have used the .NET, and Firebase frameworks for
              personal projects
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
              For the back end, I created prototypes of various services, using
              Golang and PostgreSQL, such as an automated account-verification
              email service, as well as I restructured the database. <br />
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
            Midnight Sun, Solar Car <br /> Telemetry Team Member <br /> 09/18 -
            12/18
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
  );
};
export default Page2;
