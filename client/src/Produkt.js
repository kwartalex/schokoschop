import React, { useState, useEffect } from "react";
//import styled from "styled-components/macro";

export default function Produkte() {
  const [produkte, setProdukte] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8040/Produkte/get")
      .then((response) => response.json())
      .then((data) => setProdukte(data.reverse()));
  }, []);

  return <></>;
}
