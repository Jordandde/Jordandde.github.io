import React, { useState, useEffect } from "react";
import {
  Container,
  Center,
  Square,
  Description,
  Banner2,
  Title,
  Text
} from "../App.components";

const Page4 = () => {
  const [thirteen, setThirteen] = useState(0);
  const [fourteen, setFourteen] = useState(0);
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/handler/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  //const [sixteen, setSixteen] = useState(0);
  return (
    <Container
      style={{
        height: "170vh",
        background: "linear-gradient(180deg, #c3acce 10%, #9ad1d4 60%, #ffdab9)"
      }}
    >
      {" "}
      <Banner2 style={{ color: "#ffdab9" }}>
        <Title style={{ color: "#ffdab9" }} href="/">
          Back
        </Title>
        <Text>About</Text>
      </Banner2>
      <Center>
        <Square
          style={{
            background: !thirteen
              ? "conic-gradient(#c3acce, #9ad1d4, #c3acce)"
              : "#89909f",
            marginLeft: "30%",
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
            marginRight: "30%",
            marginTop: "10%",
            color: !fourteen ? "#e4798a" : "#ffdab9"
          }}
          href="https://drive.google.com/open?id=1IZQ9-2ZYfcYA-1ddf7UjzcCiHR-SZXpR"
          onMouseEnter={() => setFourteen(!fourteen)}
          onMouseLeave={() => setFourteen(!fourteen)}
        >
          <p style={{ width: "80%", height: !fourteen ? "40%" : "10%" }}>
            Resumé
          </p>
          {fourteen ? (
            <Description>
              Click on this box to be redirected to my Resumé, hosted on Google
              Drive
            </Description>
          ) : null}
        </Square>
      </Center>
    </Container>
  );
};
export default Page4;
