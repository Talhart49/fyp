import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import InputColor from 'react-input-color';
import {
  editColumns,
  editColumnDesign,
} from "../../redux/Ecommerce03_redux/E03_Slice";





function Column() {
  const ColumnElements = useSelector((state) => state.E03.TwoColumnContent);
  const ColumnDesign = useSelector((state) => state.E03.columnDesign);

  useEffect(() => {
    console.log(ColumnDesign);
  }, [ColumnDesign]);

  const dispatch = useDispatch();

  const [ColumnElementsNew, setColumnElementsNew] = useState(ColumnElements);

  const [heading1_fontSize, setheading1_fontSize] = useState(
    ColumnDesign.heading1_fontSize
  );
  const [heading2_color, setheading2_color] = useState(
    ColumnDesign.heading2_color
  );
  const [column_1_float, setcolumn_1_float] = useState(
    ColumnDesign.column_1_float
  );
  const [column_1_width, setcolumn_1_width] = useState(
    ColumnDesign.column_1_width
  );
  const [column_2_float, setcolumn_2_float] = useState(
    ColumnDesign.column_2_float
  );

  const [column_2_width, setcolumn_2_width] = useState(
    ColumnDesign.column_2_width
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
          Column Customization
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
            <h3>Column Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(ColumnElements).map((key) => {
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
                    value={ColumnElementsNew[key]}
                    onChange={(e) => {
                      setColumnElementsNew({
                        ...ColumnElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editColumns(ColumnElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Column Design</h3>
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
                label="Heading Font Size"
                variant="standard"
                value={heading1_fontSize}
                onChange={(e) => {
                  setheading1_fontSize(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Heading 2 color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#101010"
                  onChange={(e) => {
                    setheading2_color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: heading2_color,
                  }}
                />
              </div>

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Column 1 float
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={column_1_float}
                onChange={(e) => {
                  setcolumn_1_float(e.target.value);
                }}
              >
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="right">right</MenuItem>
                <MenuItem value="none">none</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Column 1 width"
                variant="standard"
                value={column_1_width}
                onChange={(e) => {
                  setcolumn_1_width(e.target.value);
                }}
              />
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Column 2 float
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={column_2_float}
                onChange={(e) => {
                  setcolumn_2_float(e.target.value);
                }}
              >
                <MenuItem value="right">right</MenuItem>
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="none">none</MenuItem>
              </Select>
              <TextField
                type="number"
                id="standard-basic"
                label="Column 2 width"
                variant="standard"
                value={column_2_width}
                onChange={(e) => {
                  setcolumn_2_width(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editColumnDesign({
                      heading1_fontSize,
                      heading2_color,
                      column_1_float,
                      column_1_width,
                      column_2_float,
                      column_2_width,
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

export default Column;
