import React from "react";
import image3 from '../images/image3.png';
import { useMediaQuery } from "@mui/material";
import DonateBody from '../Components/DonateBody'


export default function Donate() {
    const isMedium = useMediaQuery("(max-width:807px)");
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                background: "#F5F5F5",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            }}
        >
            <div
                style={{
                    position: "relative",
                    overflow: "hidden", // Hide overflow to prevent blurred image from overflowing
                    padding: "10px",
                    borderRadius: "10px",
                    margin: "10px",
                    backgroundColor:'#FFFFFF'
                }}
            >
                <img
                    src={image3}
                    alt="Background"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "blur(5px) brightness(0.8)",
                        // filter: 'brightness(0.8)', 
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                />
                
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <DonateBody/>
                    </div>
                
            </div>
        </div>
    );
}
