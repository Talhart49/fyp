import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editRootTheme,
  editheader,
  editheaderDesign,
} from "../../redux/Portfolio02_redux/P02_Slice";

function Header() {
  const headerElements = useSelector((state) => state.P02.header);
  const headerElemDesign = useSelector((state) => state.P02.headerDesign);
  const rootTheme = useSelector((state) => state.P02.globalDesign);

  //   useEffect(() => {
  //     console.log(homeElements);
  //   }, [homeElements]);

  const dispatch = useDispatch();

  const [headerElementsNew, setHeaderElementsNew] = useState(headerElements);

  ///

  const [backgroundColor, setbackgroundColor] = useState(
    rootTheme.backgroundColor
  );
  const [fontFamily, setfontFamily] = useState(rootTheme.fontFamily);
  const [fontSize, setfontSize] = useState(rootTheme.fontSize);
  const [color, setcolor] = useState(rootTheme.color);

  const [navbar_height, setnavbar_height] = useState(
    headerElemDesign.navbar_height
  );
  const [navbarMenu_font_weight, setnavbarMenu_font_weight] = useState(
    headerElemDesign.navbarMenu_font_weight
  );
  const [navbar_Bg, setnavbar_Bg] = useState(headerElemDesign.navbar_Bg);
  const [navbar_box_shadow_Bg, setnavbar_box_shadow_Bg] = useState(
    headerElemDesign.navbar_box_shadow_Bg
  );
  const [navbarMenu_justify_content, setnavbarMenu_justify_content] = useState(
    headerElemDesign.navbarMenu_justify_content
  );
  const [navbarImage_width, setnavbarImage_width] = useState(
    headerElemDesign.navbarImage_width
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
          Header Customization
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
            <h3>Header Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(headerElements).map((key) => {
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
                    value={headerElementsNew[key]}
                    onChange={(e) => {
                      setHeaderElementsNew({
                        ...headerElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editheader(headerElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Header Design</h3>
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
                label="Navbar height"
                variant="standard"
                value={navbar_height}
                onChange={(e) => {
                  setnavbar_height(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Navbar menu font weight"
                variant="standard"
                value={navbarMenu_font_weight}
                onChange={(e) => {
                  setnavbarMenu_font_weight(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Navbar background Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#ffffff"
                  onChange={(e) => {
                    setnavbar_Bg(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: navbar_Bg,
                  }}
                />
              </div>

              <InputLabel id="demo-simple-select-label">
                Navbar box shadow color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#5d8ec026"
                  onChange={(e) => {
                    setnavbar_box_shadow_Bg(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: navbar_box_shadow_Bg,
                  }}
                />
              </div>

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Navbar menu justify Content
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={navbarMenu_justify_content}
                onChange={(e) => {
                  setnavbarMenu_justify_content(e.target.value);
                }}
              >
                <MenuItem value="space-between">space-between</MenuItem>
                <MenuItem value="space-around">space-around</MenuItem>
                <MenuItem value="space-evenly">space-evenly</MenuItem>
                <MenuItem value="start">start</MenuItem>
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="right">right</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Navbar image width"
                variant="standard"
                value={navbarImage_width}
                onChange={(e) => {
                  setnavbarImage_width(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editheaderDesign({
                      navbar_height,
                      navbarMenu_font_weight,
                      navbar_Bg,
                      navbar_box_shadow_Bg,
                      navbarMenu_justify_content,
                      navbarImage_width,
                    })
                  );
                }}
              >
                Save Changes
              </Button>
            </form>

            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
                margin: "1.5rem auto",
              }}
            >
              <h2>Root Theme </h2>

              <InputLabel id="demo-simple-select-label">
                Background Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#ffffff"
                  onChange={(e) => {
                    setbackgroundColor(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: backgroundColor,
                  }}
                />
              </div>
              <InputLabel id="fontFamily"> Headings Font Family</InputLabel>
              <Select
                labelId="fontFamily"
                id="demo-simple-select"
                label="fontFamily"
                value={fontFamily}
                onChange={(e) => {
                  setfontFamily(e.target.value);
                }}
              >
                <MenuItem value="Poppins">Poppins</MenuItem>
                <MenuItem value="Roboto">Roboto</MenuItem>
                <MenuItem value="sans-serif">sans-serif</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Font size"
                variant="standard"
                value={fontSize}
                onChange={(e) => {
                  setfontSize(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">Color</InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#0e3113"
                  onChange={(e) => {
                    setcolor(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: color,
                  }}
                />
              </div>

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editRootTheme({
                      headingFontFamily,
                      paragraphFontFamily,
                      themeColor,
                      backgroundColor,
                      textColor,
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

export default Header;
