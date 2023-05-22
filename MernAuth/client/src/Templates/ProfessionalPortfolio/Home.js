import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editHome,
  editHomeDesign,
} from "../../redux/Portfolio02_redux/P02_Slice";

function Home() {
  const homeElements = useSelector((state) => state.P02.home);
  const homeElemDesign = useSelector((state) => state.P02.homeDesign);

  const dispatch = useDispatch();

  const [homeElementsNew, sethomeElementsNew] = useState(homeElements);

  const [homeTitle_fontSize, sethomeTitle_fontSize] = useState(
    homeElemDesign.homeTitle_fontSize
  );
  const [homeTitle_color, sethomeTitle_color] = useState(
    homeElemDesign.homeTitle_color
  );
  const [homeIcons_fontSize, sethomeIcons_fontSize] = useState(
    homeElemDesign.homeIcons_fontSize
  );
  const [homeButton_Bg, sethomeButton_Bg] = useState(
    homeElemDesign.homeButton_Bg
  );
  const [homeButton_fontWeight, sethomeButton_fontWeight] = useState(
    homeElemDesign.homeButton_fontWeight
  );
  const [homeButton_borderRadius, sethomeButton_borderRadius] = useState(
    homeElemDesign.homeButton_borderRadius
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
          Home Customization
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
            <h3>Home Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(homeElements).map((key) => {
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
                    value={homeElementsNew[key]}
                    onChange={(e) => {
                      sethomeElementsNew({
                        ...homeElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editHome(homeElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Home Design</h3>
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
                label="Home title font size"
                variant="standard"
                value={homeTitle_fontSize}
                onChange={(e) => {
                  sethomeTitle_fontSize(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Home title color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#4070f4"
                  onChange={(e) => {
                    sethomeTitle_color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: homeTitle_color,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Home icons Font Size"
                variant="standard"
                value={homeIcons_fontSize}
                onChange={(e) => {
                  sethomeIcons_fontSize(e.target.value);
                }}
              />
              <InputLabel id="demo-simple-select-label">
                Home button background color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#4070f4"
                  onChange={(e) => {
                    sethomeButton_Bg(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: homeButton_Bg,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Home button font weight"
                variant="standard"
                value={homeButton_fontWeight}
                onChange={(e) => {
                  sethomeButton_fontWeight(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Home button border radius"
                variant="standard"
                value={homeButton_borderRadius}
                onChange={(e) => {
                  sethomeButton_borderRadius(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editHomeDesign({
                      homeTitle_fontSize,
                      homeTitle_color,
                      homeIcons_fontSize,
                      homeButton_Bg,
                      homeButton_fontWeight,
                      homeButton_borderRadius,
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

export default Home;
