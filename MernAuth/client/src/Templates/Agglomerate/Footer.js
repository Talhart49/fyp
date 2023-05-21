import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";
import InputColor from 'react-input-color';
import { useSelector, useDispatch } from "react-redux";

import {
  editFooter,
  editFooterDesign,
} from "../../redux/Ecommerce03_redux/E03_Slice";

function Footer() {
  const FooterElements = useSelector((state) => state.E03.footer);
  const FooterDesign = useSelector((state) => state.E03.footerDesign);

  useEffect(() => {
    console.log(FooterDesign);
  }, [FooterDesign]);

  const dispatch = useDispatch();

  const [FooterElementsNew, setFooterElementsNew] = useState(FooterElements);

  const [footer_borderLine_weight, setfooter_borderLine_weight] = useState(
    FooterDesign.footer_borderLine_weight
  );
  const [footer_borderLine_color, setfooter_borderLine_color] = useState(
    FooterDesign.footer_borderLine_color
  );
  const [footer_paddingTop_Bottom, setfooter_paddingTop_Bottom] = useState(
    FooterDesign.footer_paddingTop_Bottom
  );
  const [overflow, setoverflow] = useState(FooterDesign.overflow);
  const [footer_contentFontSize, setfooter_contentFontSize] = useState(
    FooterDesign.footer_contentFontSize
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
                    rows={5}
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
                label="Footer border line weight"
                variant="standard"
                value={footer_borderLine_weight}
                onChange={(e) => {
                  setfooter_borderLine_weight(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Footer border line color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#dedede"
                  onChange={(e) => {
                    setfooter_borderLine_color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: footer_borderLine_color,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Footer padding top and bottom"
                variant="standard"
                value={footer_paddingTop_Bottom}
                onChange={(e) => {
                  setfooter_paddingTop_Bottom(e.target.value);
                }}
              />
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Over flow
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={overflow}
                onChange={(e) => {
                  setoverflow(e.target.value);
                }}
              >
                <MenuItem value="hidden">hidden</MenuItem>
                <MenuItem value="visible">visible</MenuItem>
                <MenuItem value="scroll">scroll</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Footer content font size"
                variant="standard"
                value={footer_contentFontSize}
                onChange={(e) => {
                  setfooter_contentFontSize(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editFooterDesign({
                      footer_borderLine_weight,
                      footer_borderLine_color,
                      footer_paddingTop_Bottom,
                      overflow,
                      footer_contentFontSize,
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
