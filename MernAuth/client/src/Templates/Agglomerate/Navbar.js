import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";
import InputColor from "react-input-color";
import { useSelector, useDispatch } from "react-redux";

import {
  editNavbar,
  editNavbarDesign,
  editglobalDesign,
} from "../../redux/Ecommerce03_redux/E03_Slice";

function Navbar() {
  const NavbarElements = useSelector((state) => state.E03.navbar);
  const NavbarDesign = useSelector((state) => state.E03.navbarDesign);
  const rootTheme = useSelector((state) => state.E03.globalDesign);

  useEffect(() => {
    console.log(NavbarDesign);
  }, [NavbarDesign]);

  const dispatch = useDispatch();

  const [NavbarElementsNew, setNavbarElementsNew] = useState(NavbarElements);

  const [website_background_color, setwebsite_background_color] = useState(
    rootTheme.website_background_color
  );
  const [secondMainHeading_color, setsecondMainHeading_color] = useState(
    rootTheme.secondMainHeading_color
  );
  const [secondMainHeading_FontSize, setsecondMainHeading_FontSize] = useState(
    rootTheme.secondMainHeading_FontSize
  );
  const [secondMainHeading_letterSpacing, setsecondMainHeading_letterSpacing] =
    useState(rootTheme.secondMainHeading_letterSpacing);
  const [paragraph_lineHeight, setparagraph_lineHeight] = useState(
    rootTheme.paragraph_lineHeight
  );
  const [button_backgrounColor, setbutton_backgrounColor] = useState(
    rootTheme.button_backgrounColor
  );

  const [padding, setpadding] = useState(NavbarDesign.padding);
  const [logoHeadingColor, setlogoHeadingColor] = useState(
    NavbarDesign.logoHeadingColor
  );
  const [menuElements_paddingTop, setmenuElements_paddingTop] = useState(
    NavbarDesign.menuElements_paddingTop
  );
  const [menuElements_fontSize, setmenuElements_fontSize] = useState(
    NavbarDesign.menuElements_fontSize
  );
  const [menuElements_fontWeight, setmenuElements_fontWeight] = useState(
    NavbarDesign.menuElements_fontWeight
  );
  const [menuElements_Color, setmenuElements_Color] = useState(
    NavbarDesign.menuElements_Color
  );
  const [image_paddingBottom, setimage_paddingBottom] = useState(
    NavbarDesign.image_paddingBottom
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
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <TextField
                type="number"
                id="standard-basic"
                label="Padding"
                variant="standard"
                value={padding}
                onChange={(e) => {
                  setpadding(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Logo heading color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#101010"
                  onChange={(e) => {
                    setlogoHeadingColor(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: logoHeadingColor,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Menu elements padding top"
                variant="standard"
                value={menuElements_paddingTop}
                onChange={(e) => {
                  setmenuElements_paddingTop(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Menu elements font size"
                variant="standard"
                value={menuElements_fontSize}
                onChange={(e) => {
                  setmenuElements_fontSize(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Menu elements font weight"
                variant="standard"
                value={menuElements_fontWeight}
                onChange={(e) => {
                  setmenuElements_fontWeight(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Menu elements color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#585858"
                  onChange={(e) => {
                    setmenuElements_Color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: menuElements_Color,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Image padding bottom"
                variant="standard"
                value={image_paddingBottom}
                onChange={(e) => {
                  setimage_paddingBottom(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editNavbarDesign({
                      padding,
                      logoHeadingColor,
                      menuElements_paddingTop,
                      menuElements_fontSize,
                      menuElements_fontWeight,
                      menuElements_Color,
                      image_paddingBottom,
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
                Website Background Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#000000"
                  onChange={(e) => {
                    setwebsite_background_color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: website_background_color,
                  }}
                />
              </div>

              <InputLabel id="demo-simple-select-label">
                Second Main Heading Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#878787"
                  onChange={(e) => {
                    setsecondMainHeading_color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: secondMainHeading_color,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Second Main heading Font size"
                variant="standard"
                value={secondMainHeading_FontSize}
                onChange={(e) => {
                  setsecondMainHeading_FontSize(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Second Main heading letter spacing"
                variant="standard"
                value={secondMainHeading_letterSpacing}
                onChange={(e) => {
                  setsecondMainHeading_letterSpacing(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Paragraph line height"
                variant="standard"
                value={paragraph_lineHeight}
                onChange={(e) => {
                  setparagraph_lineHeight(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Button backgroung color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#000"
                  onChange={(e) => {
                    setbutton_backgrounColor(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: button_backgrounColor,
                  }}
                />
              </div>

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editglobalDesign({
                      website_background_color,
                      secondMainHeading_color,
                      secondMainHeading_FontSize,
                      secondMainHeading_letterSpacing,
                      secondMainHeading_letterSpacing,
                      button_backgrounColor,
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
