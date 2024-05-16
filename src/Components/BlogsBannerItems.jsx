import { Paper, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
const styles = {
  paper: {
    position: "relative",
    textAlign: "center",
    color: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    transition: "none",
    borderRadius:"10px"
  },
  content: {
    position: "absolute",
    bottom: "5%",
    left: "2%",
    // transform: "translateY(30%)",
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

function BlogsBannerItems({ imgSrc }) {
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
            fontSize: "1em",
            maxWidth: "425px",
            fontWeight: "regular",
            marginTop: "35px",
            marginBottom: "10px",
            marginRight: "15px",
            lineHeight: "1.2",
            background:"#F26522",
            display:"inline-block",
            padding:"5px",
            borderRadius:"5px"
          }}
        >
          SwaSarjan
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontSize: "1.8em",
            maxWidth: "425px",
            marginRight: "15px",
            lineHeight: "1.1",
            marginBottom:"10px"
          }}
        >
          Checkout Our Blogs
        </Typography>

        <div style={{display:"flex", flexWrap:"wrap"}}>
          <div style={{marginRight:"10px"}}><AccountCircle/></div>
          <div style={{marginRight:"10px"}}>Blogger Ben</div>
          <div style={{marginRight:"15px"}}>December 13, 2023</div>
        </div>
      </div>
    </Paper>
  );
}

export default BlogsBannerItems;
