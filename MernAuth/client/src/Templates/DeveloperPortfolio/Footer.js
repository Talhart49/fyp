import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editFooter,
  editFooterDesign,
} from "../../redux/PortfolioWeb_redux/PW_slice";

function Footer() {
  const FooterElements = useSelector((state) => state.PW.Footer);
  const FooterElemDesign = useSelector((state) => state.PW.footerDesign);
  const rootTheme = useSelector((state) => state.PW.globalDesign);

  //   useEffect(() => {
  //     console.log(homeElements);
  //   }, [homeElements]);

  const dispatch = useDispatch();

  const [FooterElementsNew, setFooterElementsNew] = useState(FooterElements);

  ///

  const [headingFontFamily, setHeadingFontFamily] = useState(
    rootTheme.headingFontFamily
  );
  const [paragraphFontFamily, setParagraphFontFamily] = useState(
    rootTheme.paragraphFontFamily
  );
  const [themeColor, setThemeColor] = useState(rootTheme.themeColor);
  const [backgroundColor, setBackgroundColor] = useState(
    rootTheme.backgroundColor
  );
  const [textColor, setTextColor] = useState(rootTheme.textColor);

  const [footerPaddingTop, setfooterPaddingTop] = useState(
    FooterElemDesign.footerPaddingTop
  );
  const [footerPaddingBottom, setfooterPaddingBottom] = useState(
    FooterElemDesign.footerPaddingBottom
  );
  const [footerMessageColor, setfooterMessageColor] = useState(
    FooterElemDesign.footerMessageColor
  );
  const [footerMessageFontWeight, setfooterMessageFontWeight] = useState(
    FooterElemDesign.footerMessageFontWeight
  );
  const [footerMessageFontSize, setfooterMessageFontSize] = useState(
    FooterElemDesign.footerMessageFontSize
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
          Footer Customization
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
            <h3>Footer Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(FooterElements).map((key) => {
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
                    value={FooterElementsNew[key]}
                    onChange={(e) => {
                      setFooterElementsNew({
                        ...FooterElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editFooter(FooterElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Footer Design</h3>
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
                label="Footer padding Top"
                variant="standard"
                value={footerPaddingTop}
                onChange={(e) => {
                  setfooterPaddingTop(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Footer padding bottom"
                variant="standard"
                value={footerPaddingBottom}
                onChange={(e) => {
                  setfooterPaddingBottom(e.target.value);
                }}
              />
              <InputLabel id="demo-simple-select-label">
                Footer message color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#ffffff"
                  onChange={(e) => {
                    setfooterMessageColor(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: footerMessageColor,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Footer message font weight"
                variant="standard"
                value={footerMessageFontWeight}
                onChange={(e) => {
                  setfooterMessageFontWeight(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Footer message font weight"
                variant="standard"
                value={footerMessageFontSize}
                onChange={(e) => {
                  setfooterMessageFontSize(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editFooterDesign({
                      footerPaddingTop,
                      footerPaddingBottom,
                      footerMessageColor,
                      footerMessageFontWeight,
                      footerMessageFontSize,
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

export default Footer;
