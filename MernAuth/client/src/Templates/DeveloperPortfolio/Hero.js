import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editheroSection,
  editheroSectionDesign,
} from "../../redux/PortfolioWeb_redux/PW_slice";

function Hero() {
  const heroElements = useSelector((state) => state.PW.heroSection);
  const heroElemDesign = useSelector((state) => state.PW.heroSectionDesign);

  //   useEffect(() => {
  //     console.log(homeElements);
  //   }, [homeElements]);

  const dispatch = useDispatch();

  const [heroElementsNew, setheroElementsNew] = useState(heroElements);

  const [backgroundImage, setbackgroundImage] = useState(
    heroElemDesign.backgroundImage
  );
  const [backgroundImageSize, setbackgroundImageSize] = useState(
    heroElemDesign.backgroundImageSize
  );
  const [backgroundImagposition, setbackgroundImagposition] = useState(
    heroElemDesign.backgroundImagposition
  );
  const [heroText_fontSize, setheroText_fontSize] = useState(
    heroElemDesign.heroText_fontSize
  );
  const [heroText_Color, setheroText_Color] = useState(
    heroElemDesign.heroText_Color
  );
  const [heroContainer_paddingLeft, setheroContainer_paddingLeft] = useState(
    heroElemDesign.heroContainer_paddingLeft
  );
  const [heroContainer_justifyContent, setheroContainer_justifyContent] =
    useState(heroElemDesign.heroContainer_justifyContent);

  return (
    <div>
      <div className="specific_customization_container">
        <h1
          style={{
            textAlign: "center",
            borderBottom: "1px solid #000",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Hero Section Customization
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",

            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              gap: "1rem",
              width: "50%",
              height: "100%",
              borderRight: "1px solid #000",
              paddingRight: "1rem",
            }}
          >
            <h3>Hero Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(heroElements).map((key) => {
                return (
                  <TextField
                    rows={3}
                    multiline
                    sx={{ width: "100%" }}
                    key={key}
                    id="standard-basic"
                    label={key}
                    variant="standard"
                    name={key}
                    value={heroElementsNew[key]}
                    onChange={(e) => {
                      setheroElementsNew({
                        ...heroElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editheroSection(heroElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Hero Design</h3>
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <TextField
                type="text"
                id="standard-basic"
                label="Background Image"
                variant="standard"
                value={backgroundImage}
                onChange={(e) => {
                  setbackgroundImage(e.target.value);
                }}
              />

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Background image size
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={backgroundImageSize}
                onChange={(e) => {
                  setbackgroundImageSize(e.target.value);
                }}
              >
                <MenuItem value="cover">cover</MenuItem>
                <MenuItem value="contain">contain</MenuItem>
                <MenuItem value="auto">auto</MenuItem>
                <MenuItem value="50%">50%</MenuItem>
              </Select>

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Background image position
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={backgroundImagposition}
                onChange={(e) => {
                  setbackgroundImagposition(e.target.value);
                }}
              >
                <MenuItem value="center">center</MenuItem>
                <MenuItem value="right">right</MenuItem>
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="bottom">bottom</MenuItem>
                <MenuItem value="top">top</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Text Font Size"
                variant="standard"
                value={heroText_fontSize}
                onChange={(e) => {
                  setheroText_fontSize(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Hero text Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="transparent"
                  onChange={(e) => {
                    setheroText_Color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: heroText_Color,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Container Padding left"
                variant="standard"
                value={heroContainer_paddingLeft}
                onChange={(e) => {
                  setheroContainer_paddingLeft(e.target.value);
                }}
              />
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Hero container justify Content
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={heroContainer_justifyContent}
                onChange={(e) => {
                  setheroContainer_justifyContent(e.target.value);
                }}
              >
                <MenuItem value="flex-start">flex-start</MenuItem>
                <MenuItem value="flex-end">flex-end</MenuItem>
                <MenuItem value="center">center</MenuItem>
                <MenuItem value="start">start</MenuItem>
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="right">right</MenuItem>
              </Select>

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editheroSectionDesign({
                      backgroundImage,
                      backgroundImageSize,
                      backgroundImagposition,
                      heroText_fontSize,
                      heroText_Color,
                      heroContainer_paddingLeft,
                      heroContainer_justifyContent,
                    })
                  );
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
