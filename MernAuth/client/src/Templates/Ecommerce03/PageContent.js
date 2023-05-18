import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import InputColor from 'react-input-color';
import {
  editPage,
  editPageDesign,
} from "../../redux/Ecommerce03_redux/E03_Slice";

function Page() {
  const PageElements = useSelector((state) => state.E03.PageContent);
  const PageDesign = useSelector((state) => state.E03.pageDesign);

  useEffect(() => {
    console.log(PageDesign);
  }, [PageDesign]);

  const dispatch = useDispatch();

  const [PageElementsNew, setPageElementsNew] = useState(PageElements);

  const [page_borderLine_weight, setpage_borderLine_weight] = useState(
    PageDesign.page_borderLine_weight
  );
  const [page_borderLine_color, setpage_borderLine_color] = useState(
    PageDesign.page_borderLine_color
  );
  const [page_paddingTop, setpage_paddingTop] = useState(
    PageDesign.page_paddingTop
  );
  const [Content_float, setContent_float] = useState(PageDesign.Content_float);
  const [contentWidth, setcontentWidth] = useState(PageDesign.contentWidth);

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
          Page Customization
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
              flexDirection: "Page",
              justifyContent: "start",
              alignItems: "start",
              gap: "1rem",
              width: "50%",
              height: "100%",
              borderRight: "1px solid #000",
              paddingRight: "1rem",
            }}
          >
            <h3>Page Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(PageElements).map((key) => {
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
                    value={PageElementsNew[key]}
                    onChange={(e) => {
                      setPageElementsNew({
                        ...PageElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editPage(PageElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Page Design</h3>
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "Footer",
                gap: "1rem",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <TextField
                type="number"
                id="standard-basic"
                label="Page_border line weight"
                variant="standard"
                value={page_borderLine_weight}
                onChange={(e) => {
                  setpage_borderLine_weight(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Page border line color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#141010"
                  onChange={(e) => {
                    setpage_borderLine_color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: page_borderLine_color,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Page padding top"
                variant="standard"
                value={page_paddingTop}
                onChange={(e) => {
                  setpage_paddingTop(e.target.value);
                }}
              />

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Content float
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Content_float}
                onChange={(e) => {
                  setContent_float(e.target.value);
                }}
              >
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="right">right</MenuItem>
                <MenuItem value="none">none</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Content width"
                variant="standard"
                value={contentWidth}
                onChange={(e) => {
                  setcontentWidth(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editPageDesign({
                      page_borderLine_weight,
                      page_borderLine_color,
                      page_paddingTop,
                      Content_float,
                      contentWidth,
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

export default Page;
