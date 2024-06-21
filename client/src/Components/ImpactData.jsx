import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

export default function ImpactData({ counter, content }) {
  const [displayCounter, setDisplayCounter] = useState(0);

  useEffect(() => {
    const duration = 100;
    const minValue = 1000;
    const maxValue = 5000;
    const range = maxValue - minValue;

    const intervalDuration = duration / range;

    const interval = setInterval(() => {
      setDisplayCounter((prevCounter) => {
        if (prevCounter < counter) {
          return prevCounter + 1;
        }
        clearInterval(interval);
        return prevCounter;
      });
    }, intervalDuration);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div
      style={{
        minWidth: "270px",
        flex: 1,
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <Typography
          style={{
            fontSize: "2em",
            fontWeight: "bold",
            color: "#F26522",
            marginBottom: "5px",
          }}
        >
          {displayCounter}+
        </Typography>
        <Typography style={{ maxWidth: "200px", textWrap: "wrap" }}>
          {content}
        </Typography>
      </div>
    </div>
  );
}
