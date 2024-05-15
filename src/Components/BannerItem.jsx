import { Paper, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  paper: {
    position: "relative",
    textAlign: "center",
    color: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
    transition: "none",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "5%",
    transform: "translateY(-50%)",
    textAlign: "left",
  },
  spanText: {
    fontWeight: "bold",
    fontSize: "35px",
    color: "#F26522",
  },
  button: {
    borderRadius: "20px",
    marginLeft: "15px",
    marginRight: "15px",
  },
};

function BannerItem({ imgSrc }) {
  return (
    <Paper
      style={{
        ...styles.paper,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgSrc})`,
      }}
    >
      <div style={styles.content}>
        <Typography
          variant="body1"
          style={{
            fontSize: "2em",
            maxWidth: "425px",
            marginLeft: "15px",
            marginRight: "15px",
            lineHeight: "1.1",
          }}
        >
          Share your <span style={styles.spanText}>Love</span> to make someone's
          life better
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontSize: "1em",
            maxWidth: "425px",
            fontWeight: "regular",
            marginTop: "35px",
            marginBottom: "40px",
            marginLeft: "15px",
            marginRight: "15px",
            lineHeight: "1.2",
          }}
        >
          Swa-Sarjan is about helping people who need your help so that they can
          get back on their feet. We are dedicated to providing the needy with
          basic needs.
        </Typography>

        <Link to='/donate'>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          sx={{
            color: "white",
            backgroundColor: "#7622D7",
            "&:hover": {
              backgroundColor: "rgb(242, 101, 34)",
            },
          }}
        >
          Donate
        </Button>
        </Link>
      </div>
    </Paper>
  );
}

export default BannerItem;
