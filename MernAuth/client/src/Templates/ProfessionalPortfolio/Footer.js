import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editFooter,
  editFooterDesign,
} from "../../redux/Portfolio02_redux/P02_Slice";

function Footer() {
  const FooterElements = useSelector((state) => state.P02.Footer);
  const FooterElemDesign = useSelector((state) => state.P02.footerDesign);

  const dispatch = useDispatch();

  const [FooterElementsNew, setFooterElementsNew] = useState(FooterElements);

  const [background_color, setbackground_color] = useState(
    FooterElemDesign.background_color
  );
  const [text_align, settext_align] = useState(FooterElemDesign.text_align);
  const [font_weight, setfont_weight] = useState(FooterElemDesign.font_weight);
  const [footerTitle_fontSize, setfooterTitle_fontSize] = useState(
    FooterElemDesign.footerTitle_fontSize
  );
  const [footerTitle_marginBottom, setfooterTitle_marginBottom] = useState(
    FooterElemDesign.footerTitle_marginBottom
  );
  const [footerIcon_margin, setfooterIcon_margin] = useState(
    FooterElemDesign.footerIcon_margin
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
              <InputLabel id="demo-simple-select-label">
                Footer Background Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#0e2431"
                  onChange={(e) => {
                    setbackground_color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: background_color,
                  }}
                />
              </div>

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Footer text align
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={text_align}
                onChange={(e) => {
                  settext_align(e.target.value);
                }}
              >
                <MenuItem value="center">center</MenuItem>
                <MenuItem value="start">start</MenuItem>
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="right">right</MenuItem>
                <MenuItem value="end">end</MenuItem>
              </Select>
              <TextField
                type="number"
                id="standard-basic"
                label="Font weight"
                variant="standard"
                value={font_weight}
                onChange={(e) => {
                  setfont_weight(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Footer title font size"
                variant="standard"
                value={footerTitle_fontSize}
                onChange={(e) => {
                  setfooterTitle_fontSize(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Footer title margin bottom"
                variant="standard"
                value={footerTitle_marginBottom}
                onChange={(e) => {
                  setfooterTitle_marginBottom(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Footer icon margin"
                variant="standard"
                value={footerIcon_margin}
                onChange={(e) => {
                  setfooterIcon_margin(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editFooterDesign({
                      background_color,
                      text_align,
                      font_weight,
                      footerTitle_fontSize,
                      footerTitle_marginBottom,
                      footerIcon_margin,
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
