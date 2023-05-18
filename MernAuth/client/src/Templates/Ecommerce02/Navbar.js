import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import {
  editNavbar,
  editNavbarDesign,
  editglobalDesign,
} from "../../redux/Ecommerce02_redux/E02_Slice";

function Navbar() {
  const NavbarElements = useSelector((state) => state.E02.navbar);
  const NavbarDesign = useSelector((state) => state.E02.navbarDesign);
  const rootTheme = useSelector((state) => state.E02.globalDesign);

  useEffect(() => {
    console.log(NavbarDesign);
  }, [NavbarDesign]);

  const dispatch = useDispatch();

  const [NavbarElementsNew, setNavbarElementsNew] = useState(NavbarElements);

  const [heading_FontSize, setheading_FontSize] = useState(
    rootTheme.heading_FontSize
  );
  const [heading_padding, setheading_padding] = useState(
    rootTheme.heading_padding
  );
  const [paragraph_FontSize, setparagraph_FontSize] = useState(
    rootTheme.paragraph_FontSize
  );
  const [paragraph_padding, setparagraph_padding] = useState(
    rootTheme.paragraph_padding
  );
  const [button_borderColor, setbutton_borderColor] = useState(
    rootTheme.button_borderColor
  );
  const [button_backgroundColor, setbutton_backgroundColor] = useState(
    rootTheme.button_backgroundColor
  );

  const [backgroundColor, setbackgroundColor] = useState(
    NavbarDesign.backgroundColor
  );
  const [backgroundColor_opacity, setbackgroundColor_opacity] = useState(
    NavbarDesign.backgroundColor_opacity
  );
  const [justifyContent, setjustifyContent] = useState(
    NavbarDesign.justifyContent
  );
  const [imageMarginTop, setimageMarginTop] = useState(
    NavbarDesign.imageMarginTop
  );
  const [imageMarginBottom, setimageMarginBottom] = useState(
    NavbarDesign.imageMarginBottom
  );

  const [imageHeight, setimageHeight] = useState(NavbarDesign.imageHeight);

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
          Navbar Customization
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
              flexDirection: "Navbar",
              justifyContent: "start",
              alignItems: "start",
              gap: "1rem",
              width: "50%",
              height: "100%",
              borderRight: "1px solid #000",
              paddingRight: "1rem",
            }}
          >
            <h3>Navbar Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(NavbarElements).map((key) => {
                return (
                  <TextField
                    rows={5}
                    multiline
                    sx={{ width: "100%" }}
                    key={key}
                    id="standard-basic"
                    label={key}
                    variant="standard"
                    name={key}
                    value={NavbarElementsNew[key]}
                    onChange={(e) => {
                      setNavbarElementsNew({
                        ...NavbarElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editNavbar(NavbarElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Navbar Design</h3>
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "home",
                gap: "1rem",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Background Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#000000"
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

              <TextField
                type="number"
                id="standard-basic"
                label="Background color opacity"
                variant="standard"
                value={backgroundColor_opacity}
                onChange={(e) => {
                  setbackgroundColor_opacity(e.target.value);
                }}
              />

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                justify Content
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={justifyContent}
                onChange={(e) => {
                  setjustifyContent(e.target.value);
                }}
              >
                <MenuItem value="center">center</MenuItem>
                <MenuItem value="start">start</MenuItem>
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="right">right</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Image margin top"
                variant="standard"
                value={imageMarginTop}
                onChange={(e) => {
                  setimageMarginTop(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Image margin bottom"
                variant="standard"
                value={imageMarginBottom}
                onChange={(e) => {
                  setimageMarginBottom(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Image height"
                variant="standard"
                value={imageHeight}
                onChange={(e) => {
                  setimageHeight(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editNavbarDesign({
                      backgroundColor,
                      backgroundColor_opacity,
                      justifyContent,
                      imageMarginTop,
                      imageMarginBottom,
                      imageHeight,
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

              <TextField
                type="number"
                id="standard-basic"
                label="Heading font size"
                variant="standard"
                value={heading_FontSize}
                onChange={(e) => {
                  setheading_FontSize(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Heading padding"
                variant="standard"
                value={heading_padding}
                onChange={(e) => {
                  setheading_padding(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Paragraph font size"
                variant="standard"
                value={paragraph_FontSize}
                onChange={(e) => {
                  setparagraph_FontSize(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Paragraph padding"
                variant="standard"
                value={paragraph_padding}
                onChange={(e) => {
                  setparagraph_padding(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Button background Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#ffffff"
                  onChange={(e) => {
                    setbutton_borderColor(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: button_borderColor,
                  }}
                />
              </div>

              <InputLabel id="demo-simple-select-label">
                Button background Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#a52a2a"
                  onChange={(e) => {
                    setbutton_backgroundColor(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: button_backgroundColor,
                  }}
                />
              </div>

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editglobalDesign({
                      heading_FontSize,
                      heading_padding,
                      paragraph_FontSize,
                      paragraph_padding,
                      button_borderColor,
                      button_backgroundColor,
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

export default Navbar;
