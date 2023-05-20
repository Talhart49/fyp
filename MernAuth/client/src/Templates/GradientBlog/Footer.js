import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editFooter,
  editFooterDesign,
} from "../../redux/Blog02_redux/B02_slice";

function Footer() {
  const FooterElements = useSelector((state) => state.B02.footer);
  const FooterDesign = useSelector((state) => state.B02.footerDesign);

  useEffect(() => {
    console.log(FooterElements);
  }, [FooterElements]);

  const dispatch = useDispatch();

  const [FooterElementsNew, setFooterElementsNew] = useState(FooterElements);

  ///

  const [footerSectionHeight, setfooterSectionHeight] = useState(
    FooterDesign.footerSectionHeight
  );
  const [footertext_marginTop, setfootertext_marginTop] = useState(
    FooterDesign.footertext_marginTop
  );
  const [footertext_marginBottom, setfootertext_marginBottom] = useState(
    FooterDesign.footertext_marginBottom
  );
  const [footertext_fontWeight, setfootertext_fontWeight] = useState(
    FooterDesign.footertext_fontWeight
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
                label="Footer section height"
                variant="standard"
                value={footerSectionHeight}
                onChange={(e) => {
                  setfooterSectionHeight(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Footer text margin top"
                variant="standard"
                value={footertext_marginTop}
                onChange={(e) => {
                  setfootertext_marginTop(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Footer text margin bottom"
                variant="standard"
                value={footertext_marginBottom}
                onChange={(e) => {
                  setfootertext_marginBottom(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Footer text font weight"
                variant="standard"
                value={footertext_fontWeight}
                onChange={(e) => {
                  setfootertext_fontWeight(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editFooterDesign({
                      footerSectionHeight,
                      footertext_marginTop,
                      footertext_marginBottom,
                      footertext_fontWeight,
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
