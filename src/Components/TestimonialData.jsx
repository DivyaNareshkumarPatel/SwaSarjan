import React from "react";

export default function TestimonialData({ item }) {
  return (
    <div
      style={{ marginLeft: "40px", marginRight: "40px", marginBottom: "40px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{maxWidth:"500px"}}>
            <div style={{letterSpacing:"1px", marginBottom:"40px", fontWeight:"normal", fontSize:"20px", color:'#525560'}}>{item.content}</div>
            <div style={{ width: "100%", textAlign: "right" , fontWeight:"bold"}}>
              {item.name}
              <br />
              {item.designation}
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <img src={item.image} style={{maxWidth: "100%", height: "auto", minWidth:"300px"}} alt="" />
        </div>
      </div>
    </div>
  );
}
