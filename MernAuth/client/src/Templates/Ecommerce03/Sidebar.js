import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";
import InputColor from "react-input-color";
import { useSelector, useDispatch } from "react-redux";

import {
  editSideBar,
  editsideBarDesign,
} from "../../redux/Ecommerce03_redux/E03_Slice";

function SideBar() {
  const SideBarElements = useSelector((state) => state.E03.SideBar);
  const SideBarDesign = useSelector((state) => state.E03.sideBarDesign);

  useEffect(() => {
    console.log(SideBarDesign);
  }, [SideBarDesign]);

  const dispatch = useDispatch();

  const [SideBarElementsNew, setSideBarElementsNew] = useState(SideBarElements);

  const [sidebar_float, setsidebar_float] = useState(
    SideBarDesign.sidebar_float
  );
  const [sidebar_width, setsidebar_width] = useState(
    SideBarDesign.sidebar_width
  );
  const [sidebar_box1_marginBotom, setsidebar_box1_marginBotom] = useState(
    SideBarDesign.sidebar_box1_marginBotom
  );
  const [sideBar_borderLine_weight, setsideBar_borderLine_weight] = useState(
    SideBarDesign.sideBar_borderLine_weight
  );
  const [sideBar_borderLine_color, setsideBar_borderLine_color] = useState(
    SideBarDesign.sideBar_borderLine_color
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
          SideBar Customization
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
              flexDirection: "SideBar",
              justifyContent: "start",
              alignItems: "start",
              gap: "1rem",
              width: "50%",
              height: "100%",
              borderRight: "1px solid #000",
              paddingRight: "1rem",
            }}
          >
            <h3>SideBar Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(SideBarElements).map((key) => {
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
                    value={SideBarElementsNew[key]}
                    onChange={(e) => {
                      setSideBarElementsNew({
                        ...SideBarElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editSideBar(SideBarElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>SideBar Design</h3>
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "SideBar",
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
                Side bar float
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sidebar_float}
                onChange={(e) => {
                  setsidebar_float(e.target.value);
                }}
              >
                <MenuItem value="right">right</MenuItem>
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="none">none</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Side bar width"
                variant="standard"
                value={sidebar_width}
                onChange={(e) => {
                  setsidebar_width(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Side bar box 1 margin bottom"
                variant="standard"
                value={sidebar_box1_marginBotom}
                onChange={(e) => {
                  setsidebar_box1_marginBotom(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="side bar borderline weight"
                variant="standard"
                value={sideBar_borderLine_weight}
                onChange={(e) => {
                  setsideBar_borderLine_weight(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                side bar boderline Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#72716f"
                  onChange={(e) => {
                    setsideBar_borderLine_color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: sideBar_borderLine_color,
                  }}
                />
              </div>

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editsideBarDesign({
                      sidebar_float,
                      sidebar_width,
                      sidebar_box1_marginBotom,
                      sideBar_borderLine_weight,
                      sideBar_borderLine_color,
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

export default SideBar;
