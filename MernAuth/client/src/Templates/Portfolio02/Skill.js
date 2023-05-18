import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editSkills,
  editSkillsDesign,
} from "../../redux/Portfolio02_redux/P02_Slice";

function Skills() {
  const skillsElements = useSelector((state) => state.P02.skills);
  const skillsElemDesign = useSelector((state) => state.P02.skillsDesign);

  const dispatch = useDispatch();

  const [skills_box_paddingTop, setskills_box_paddingTop] = useState(
    skillsElemDesign.skills_box_paddingTop
  );
  const [skills_box_paddingleft, setskills_box_paddingleft] = useState(
    skillsElemDesign.skills_box_paddingleft
  );
  const [skills_box_marginBottom, setskills_box_marginBottom] = useState(
    skillsElemDesign.skills_box_marginBottom
  );
  const [skills_box_borderRadius, setskills_box_borderRadius] = useState(
    skillsElemDesign.skills_box_borderRadius
  );
  const [Skills_font_weight, setSkills_font_weight] = useState(
    skillsElemDesign.Skills_font_weight
  );
  const [Skills_boxShadow_bg, setSkills_boxShadow_bg] = useState(
    skillsElemDesign.Skills_boxShadow_bg
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
          Skills Customization
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
            <h3>Skills Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(skillsElements).map((key) => {
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
                    value={skillsElementsNew[key]}
                    onChange={(e) => {
                      setskillsElementsNew({
                        ...skillsElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editSkills(skillsElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Skills Design</h3>
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
                label="Skills box padding top"
                variant="standard"
                value={skills_box_paddingTop}
                onChange={(e) => {
                  setskills_box_paddingTop(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Skills box padding left"
                variant="standard"
                value={skills_box_paddingleft}
                onChange={(e) => {
                  setskills_box_paddingleft(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Skills box margin bottom"
                variant="standard"
                value={skills_box_marginBottom}
                onChange={(e) => {
                  setskills_box_marginBottom(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Skills box border radius"
                variant="standard"
                value={skills_box_borderRadius}
                onChange={(e) => {
                  setskills_box_borderRadius(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Font weight"
                variant="standard"
                value={Skills_font_weight}
                onChange={(e) => {
                  setSkills_font_weight(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Skills box shadow color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#0e243126"
                  onChange={(e) => {
                    setSkills_boxShadow_bg(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: Skills_boxShadow_bg,
                  }}
                />
              </div>

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editSkillsDesign({
                      skills_box_paddingTop,
                      heaskills_box_paddingleftding_fontSize,
                      skills_box_marginBottom,
                      skills_box_borderRadius,
                      Skills_font_weight,
                      Skills_boxShadow_bg,
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

export default Skills;
