import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editEducation,
  editEducationDesign,
} from "../../redux/Portfolio02_redux/P02_Slice";

function Education() {
  const educationElements = useSelector((state) => state.P02.education);
  const educationElemDesign = useSelector((state) => state.P02.educationDesign);

  const dispatch = useDispatch();

  const [educationElementsNew, seteducationElementsNew] =
    useState(educationElements);

  ///

  const [fontweight, setfontweight] = useState(educationElemDesign.fontweight);
  const [boxPadding, setboxPadding] = useState(educationElemDesign.boxPadding);
  const [boxRadius, setboxRadius] = useState(educationElemDesign.boxRadius);
  const [boxMarginBottom, setboxMarginBottom] = useState(
    educationElemDesign.boxMarginBottom
  );
  const [Transition, setTransition] = useState(educationElemDesign.Transition);
  const [education_name_margin, seteducation_name_margin] = useState(
    educationElemDesign.education_name_margin
  );
  const [education_name_fontSize, seteducation_name_fontSize] = useState(
    educationElemDesign.education_name_fontSize
  );
  const [education_platform_margin, seteducation_platform_margin] = useState(
    educationElemDesign.education_platform_margin
  );
  const [education_plateform_fontSize, seteducation_plateform_fontSize] =
    useState(educationElemDesign.education_plateform_fontSize);
  const [education_duration_margin, seteducation_duration_margin] = useState(
    educationElemDesign.education_duration_margin
  );
  const [education_duration_fontSize, seteducation_duration_fontSize] =
    useState(educationElemDesign.education_duration_fontSize);

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
          Education Customization
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
            <h3>Education Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(educationElements).map((key) => {
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
                    value={educationElementsNew[key]}
                    onChange={(e) => {
                      seteducationElementsNew({
                        ...educationElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editEducation(educationElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Education Design</h3>
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
                label="Font weight"
                variant="standard"
                value={fontweight}
                onChange={(e) => {
                  setfontweight(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Box padding"
                variant="standard"
                value={boxPadding}
                onChange={(e) => {
                  setboxPadding(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Box radius"
                variant="standard"
                value={boxRadius}
                onChange={(e) => {
                  setboxRadius(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Box margin bottom"
                variant="standard"
                value={boxMarginBottom}
                onChange={(e) => {
                  setboxMarginBottom(e.target.value);
                }}
              />

              <InputLabel id="Transition"> Transition Type</InputLabel>
              <Select
                labelId="Transition"
                id="demo-simple-select"
                label="Transition"
                value={Transition}
                onChange={(e) => {
                  setTransition(e.target.value);
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
                label="Education name margin"
                variant="standard"
                value={education_name_margin}
                onChange={(e) => {
                  seteducation_name_margin(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Education name fontsize"
                variant="standard"
                value={education_name_fontSize}
                onChange={(e) => {
                  seteducation_name_fontSize(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Education plateform margin"
                variant="standard"
                value={education_platform_margin}
                onChange={(e) => {
                  seteducation_platform_margin(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Education plateform font size"
                variant="standard"
                value={education_plateform_fontSize}
                onChange={(e) => {
                  seteducation_plateform_fontSize(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Education duration margin"
                variant="standard"
                value={education_duration_margin}
                onChange={(e) => {
                  seteducation_duration_margin(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Education duration font size"
                variant="standard"
                value={education_duration_fontSize}
                onChange={(e) => {
                  seteducation_duration_fontSize(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editEducationDesign({
                      fontweight,
                      boxPadding,
                      boxRadius,
                      boxMarginBottom,
                      Transition,
                      education_name_margin,
                      education_name_fontSize,
                      education_platform_margin,
                      education_plateform_fontSize,
                      education_duration_margin,
                      education_duration_fontSize,
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

export default Education;
