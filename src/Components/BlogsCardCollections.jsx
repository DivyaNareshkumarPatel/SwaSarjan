import React from "react";
import BlogsCard from "./BlogsCard";
import account1 from "../images/account1.png";
import account2 from "../images/account2.png";
import account3 from "../images/account3.png";
import account4 from "../images/account4.png";
import account5 from "../images/account5.png";
import account6 from "../images/account6.png";
import account7 from "../images/account7.png";
import account8 from "../images/account8.png";
import account9 from "../images/account9.png";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import blog4 from "../images/blog4.png";
import blog5 from "../images/blog5.png";
import blog6 from "../images/blog6.png";
import blog7 from "../images/blog7.png";
import blog8 from "../images/blog8.png";
import blog9 from "../images/blog9.png";
const details = [
  {
    account: account1,
    blog: blog1,
    head: "The Impact of SwaSarjan on the Workplace: How Technology is Changing",
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    account: account2,
    blog: blog2,
    head: "The Impact of SwaSarjan on the Workplace: How Technology is Changing",
    name: "Jason Francisco",
    date: "August 20, 2022",
  },
  {
    account: account3,
    blog: blog3,
    head: "The Impact of SwaSarjan on the Workplace: How Technology is Changing",
    name: "Elizabeth Slavin",
    date: "August 20, 2022",
  },
  {
    account: account4,
    blog: blog4,
    head: "The Impact of SwaSarjan on the Workplace: How Technology is Changing",
    name: "Ernie Smith",
    date: "August 20, 2022",
  },
  {
    account: account5,
    blog: blog5,
    head: "The Impact of SwaSarjan on the Workplace: How Technology is Changing",
    name: "Eric Smith",
    date: "August 20, 2022",
  },
  {
    account: account6,
    blog: blog6,
    head: "The Impact of SwaSarjan on the Workplace: How Technology is Changing",
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    account: account7,
    blog: blog7,
    head: "The Impact of SwaSarjan on the Workplace: How Technology is Changing",
    name: "Jason Francisco",
    date: "August 20, 2022",
  },
  {
    account: account8,
    blog: blog8,
    head: "The Impact of SwaSarjan on the Workplace: How Technology is Changing",
    name: "Elizabeth Slavin",
    date: "August 20, 2022",
  },
  {
    account: account9,
    blog: blog9,
    head: "The Impact of SwaSarjan on the Workplace: How Technology is Changing",
    name: "Ernie Smith",
    date: "August 20, 2022",
  },
  {
    account: account5,
    blog: blog5,
    head: "The Impact of SwaSarjan on the Workplace: How Technology is Changing",
    name: "Eric Smith",
    date: "August 20, 2022",
  }
];
export default function BlogsCardCollections() {
  return (
    <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"20px"}}>
      <div style={{maxWidth:"1500px", display:"flex",alignItems:"center", flexWrap:"wrap", justifyContent:"center"}}>
        {details.map((details) => (
          <BlogsCard details={details} />
        ))}
      </div>
    </div>
  );
}
