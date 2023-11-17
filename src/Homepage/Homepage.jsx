import React from "react";

const Homepage = () => {
  return (
    <div>
      {" "}
      <div className="container">
        <div className="navbar">
          <span className="left">AIPatrn</span>
          <div className="right">
            <table>
              <tr>
                <td>
                  <font style={{ color: "black" }}>Home Page</font>
                </td>
                <td>About us</td>
              </tr>
              <tr>
                <td>Generator</td>
                <td>Features</td>
              </tr>
              <tr>
                <td>Pricing-plan</td>
                <td>Collection-2023</td>
              </tr>
              <tr>
                <td>Blog - News</td> <td>Career</td>
              </tr>
            </table>
          </div>
          <div className="right2">
            <select>
              <option value="Menu">Menu</option>
              <option value="otherOption">Other option</option>
            </select>
          </div>
        </div>
        <div className="text">
          <span className="RY">Revolutionize Your</span> <br />
          <span className="cp">
            Creative Projects with the Ultimate AI-Powered Pattern
            <span className="btn">
              <button className="sg">START GENERATING</button>
            </span>
          </span>
          <span className="tng">
            The Next generation{" "}
            <font style={{ color: "black" }}>Production </font> for Designers
          </span>
        </div>
        <div className="bottom">
          <div className="one">
            <span className="num">01</span>
            <span className="txt">Learn from best mentors</span>
            <span className="btnn">START LEARNING</span>
          </div>
          <div className="two">
            <span className="num">02</span>
            <div className="tbl">
              <ul>
                <li>
                  <a href="#home">Free Edit</a>
                </li>
                <br />
                <li>
                  <a href="#news">Interactive</a>
                </li>
                <br />
                <li>
                  <a href="#contact">Easy Interview</a>
                </li>
                <br />
                <li>
                  <a href="#about">Compare to other</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="three">
            <span className="num">03</span>
            <div className="nm">+20K</div>
            <div className="txxt">
              Glass Pattern generated this week in the first release.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
