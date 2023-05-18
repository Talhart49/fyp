import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editAbout,
  editAboutDesign,
} from "../../redux/Portfolio02_redux/P02_Slice";

function About() {
  const aboutElements = useSelector((state) => state.P02.about);
  const aboutElemDesign = useSelector((state) => state.P02.aboutDesign);

  //   useEffect(() => {
  //     console.log(homeElements);
  //   }, [homeElements]);

  const dispatch = useDispatch();

  const [aboutElementsNew, setaboutElementsNew] = useState(aboutElements);

  const [aboutPaddingTop, setaboutPaddingTop] = useState(
    aboutElemDesign.aboutPaddingTop
  );
  const [aboutPaddingLeft, setaboutPaddingLeft] = useState(
    aboutElemDesign.aboutPaddingLeft
  );
  const [about_intro_marginBottom, setabout_intro_marginBottom] = useState(
    aboutElemDesign.about_intro_marginBottom
  );
  const [imagePosition, setimagePosition] = useState(
    aboutElemDesign.imagePosition
  );
  const [imageWidth, setimageWidth] = useState(aboutElemDesign.imageWidth);
  const [imageBorderRadius, setimageBorderRadius] = useState(
    aboutElemDesign.imageBorderRadius
  );
  const [imageTransition, setimageTransition] = useState(
    aboutElemDesign.imageTransition
  );

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
          About Customization
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
            <h3>About Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(aboutElements).map((key) => {
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
                    value={aboutElementsNew[key]}
                    onChange={(e) => {
                      setaboutElementsNew({
                        ...aboutElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editAbout(aboutElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>About Design</h3>
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
                type="number"
                id="standard-basic"
                label="About padding top"
                variant="standard"
                value={aboutPaddingTop}
                onChange={(e) => {
                  setaboutPaddingTop(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="About padding left"
                variant="standard"
                value={aboutPaddingLeft}
                onChange={(e) => {
                  setaboutPaddingLeft(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="About intro margin bottom"
                variant="standard"
                value={about_intro_marginBottom}
                onChange={(e) => {
                  setabout_intro_marginBottom(e.target.value);
                }}
              />

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Image position
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={imagePosition}
                onChange={(e) => {
                  setimagePosition(e.target.value);
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
                label="Image width"
                variant="standard"
                value={imageWidth}
                onChange={(e) => {
                  setimageWidth(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Image border radius"
                variant="standard"
                value={imageBorderRadius}
                onChange={(e) => {
                  setimageBorderRadius(e.target.value);
                }}
              />

              <InputLabel id="imageTransition">
                {" "}
                image Transition Type
              </InputLabel>
              <Select
                labelId="imageTransition"
                id="demo-simple-select"
                label="imageTransition"
                value={imageTransition}
                onChange={(e) => {
                  setimageTransition(e.target.value);
                }}
              >
                <MenuItem value="ease">ease</MenuItem>
                <MenuItem value="linear">linear</MenuItem>
                <MenuItem value="ease-in">ease-in</MenuItem>
                <MenuItem value="ease-out">ease-out</MenuItem>
              </Select>

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editAboutDesign({
                      aboutPaddingTop,
                      aboutPaddingLeft,
                      about_intro_marginBottom,
                      imagePosition,
                      imageWidth,
                      imageBorderRadius,
                      imageTransition,
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

export default About;
