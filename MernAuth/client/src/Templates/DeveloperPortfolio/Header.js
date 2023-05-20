import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editGlobalDesign,
  editheader,
  editheaderDesign,
} from "../../redux/PortfolioWeb_redux/PW_slice";

function Header() {
  const headerElements = useSelector((state) => state.PW.header);
  const headerElemDesign = useSelector((state) => state.PW.headerDesign);
  const rootTheme = useSelector((state) => state.PW.globalDesign);

  //   useEffect(() => {
  //     console.log(homeElements);
  //   }, [homeElements]);

  const dispatch = useDispatch();

  const [headerElementsNew, setHeaderElementsNew] = useState(headerElements);

  ///

  //

  const [imageObjectFit, setimageObjectFit] = useState(
    rootTheme.imageObjectFit
  );
  const [paragraph_fontsize, setparagraph_fontsize] = useState(
    rootTheme.paragraph_fontsize
  );
  const [paragraph_marginTop, setparagraph_marginTop] = useState(
    rootTheme.paragraph_marginTop
  );
  const [sectionTitle_FontSize, setsectionTitle_FontSize] = useState(
    rootTheme.sectionTitle_FontSize
  );
  const [sectionTitle_FontWeight, setsectionTitle_FontWeight] = useState(
    rootTheme.sectionTitle_FontWeight
  );

  ////

  const [minHeight, setminHeight] = useState(headerElemDesign.minHeight);
  const [bgColor, setbgColor] = useState(headerElemDesign.bgColor);
  const [transitionType, settransitionType] = useState(
    headerElemDesign.transitionType
  );
  const [navbarMAxWidth, setnavbarMAxWidth] = useState(
    headerElemDesign.navbarMAxWidth
  );
  const [navbarPadding, setnavbarPadding] = useState(
    headerElemDesign.navbarPadding
  );
  const [linkFontSize, setlinkFontSize] = useState(
    headerElemDesign.linkFontSize
  );
  const [padding, setpadding] = useState(headerElemDesign.padding);
  const [hamburgerMargin, sethamburgerMargin] = useState(
    headerElemDesign.hamburgerMargin
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
            <h3>Global Design</h3>
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
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Image Object Fit
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={imageObjectFit}
                onChange={(e) => {
                  setimageObjectFit(e.target.value);
                }}
              >
                <MenuItem value="cover">cover</MenuItem>
                <MenuItem value="fill">fill</MenuItem>
                <MenuItem value="contain">contain</MenuItem>
                <MenuItem value="none">none</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Paragraph Font Size"
                variant="standard"
                value={paragraph_fontsize}
                onChange={(e) => {
                  setparagraph_fontsize(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Paragraph margin Top"
                variant="standard"
                value={paragraph_marginTop}
                onChange={(e) => {
                  setparagraph_marginTop(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Section Title Font Size"
                variant="standard"
                value={sectionTitle_FontSize}
                onChange={(e) => {
                  setsectionTitle_FontSize(e.target.value);
                }}
              />
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Section Title Font Weight
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sectionTitle_FontWeight}
                onChange={(e) => {
                  setsectionTitle_FontWeight(e.target.value);
                }}
              >
                <MenuItem value="bold">bold</MenuItem>
                <MenuItem value="lighter">lighter</MenuItem>
                <MenuItem value="normal">normal</MenuItem>
                <MenuItem value="bolder">bolder</MenuItem>
              </Select>
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editGlobalDesign({
                      imageObjectFit,
                      paragraph_fontsize,
                      paragraph_marginTop,
                      sectionTitle_FontSize,
                      sectionTitle_FontWeight,
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
              <h2>Header Design </h2>
              <TextField
                type="number"
                id="standard-basic"
                label="Header minimum Height"
                variant="standard"
                value={minHeight}
                onChange={(e) => {
                  setminHeight(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Header background Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#1f1e1e3d"
                  onChange={(e) => {
                    setbgColor(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: bgColor,
                  }}
                />
              </div>

              <InputLabel id="transitionType">
                {" "}
                Headings Transition Type
              </InputLabel>
              <Select
                labelId="transitionType"
                id="demo-simple-select"
                label="transitionType"
                value={transitionType}
                onChange={(e) => {
                  settransitionType(e.target.value);
                }}
              >
                <MenuItem value="ease">ease</MenuItem>
                <MenuItem value="linear">linear</MenuItem>
                <MenuItem value="ease-in">ease-in</MenuItem>
                <MenuItem value="ease-out">ease-out</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Navbar maximum width"
                variant="standard"
                value={navbarMAxWidth}
                onChange={(e) => {
                  setnavbarMAxWidth(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Navbar padding"
                variant="standard"
                value={navbarPadding}
                onChange={(e) => {
                  setnavbarPadding(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Link font size"
                variant="standard"
                value={linkFontSize}
                onChange={(e) => {
                  setlinkFontSize(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Links padding"
                variant="standard"
                value={padding}
                onChange={(e) => {
                  setpadding(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Menu Hamburger Margin"
                variant="standard"
                value={hamburgerMargin}
                onChange={(e) => {
                  sethamburgerMargin(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editheaderDesign({
                      minHeight,
                      bgColor,
                      transitionType,
                      navbarMAxWidth,
                      navbarPadding,
                      linkFontSize,
                      padding,
                      hamburgerMargin,
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
