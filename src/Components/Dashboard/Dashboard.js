import React from "react";
import {
  Header,
  Grid,
  Image,
  Segment,
  Statistic,
  Card
} from "semantic-ui-react";
import "./index.css";
import gyanu from "./gyanu.jpeg";

const Dashboard = () => (
  <div>
    <style>{`
      body > div, body > div > div,
      body > div > div > div.login-form {
        height: 100%;
    `}</style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400 }}>
        <span id="svgContainer">
          <svg width="100%" height="100%" viewBox="0 0 600 280" preserveAspectRatio="xMinYMin meet" id="svgContent">
            <g>
              <path id="svg_4"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(115, 194, 251,1)" />
            </g>
          </svg>
        </span>
        <Segment padding="very" id="shadow">
          <Image   src={gyanu}
            size="small" id="onTop" style={{ margin: "50px auto", borderRadius: "30pz" }}
          />
          <Header size="large" color="blue" id="onTop">Mahima Shrestha</Header>
          <Header size="small" color="grey" fluid>Architect to be </Header>
          <Grid columns={2} divided padded fluid>
            <Statistic.Group>
              <Statistic>
                <Statistic.Value>2,204</Statistic.Value>
                <Statistic.Label>Views</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>2,204</Statistic.Value>
                <Statistic.Label>Views</Statistic.Label>
              </Statistic>
            </Statistic.Group>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default Dashboard;
