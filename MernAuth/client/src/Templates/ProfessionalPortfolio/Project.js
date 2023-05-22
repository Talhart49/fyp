import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editproject,
  editprojectDesign,
} from "../../redux/Portfolio02_redux/P02_Slice";

function Project() {
  const projectElements = useSelector((state) => state.P02.project);
  const projectElemDesign = useSelector((state) => state.P02.projectDesign);

  const dispatch = useDispatch();

  const [projectElementsNew, setprojectElementsNew] = useState(projectElements);

  const [projectConatiner_maxWidth, setprojectConatiner_maxWidth] = useState(
    projectElemDesign.projectConatiner_maxWidth
  );
  const [projectConatiner_display, setprojectConatiner_display] = useState(
    projectElemDesign.projectConatiner_display
  );
  const [projectImage_box_shadow_bg, setprojectImage_box_shadow_bg] = useState(
    projectElemDesign.projectImage_box_shadow_bg
  );
  const [projectImage_borderRaduis, setprojectImage_borderRaduis] = useState(
    projectElemDesign.projectImage_borderRaduis
  );
  const [projectImage_transition, setprojectImage_transition] = useState(
    projectElemDesign.projectImage_transition
  );
  const [projectImage_marginBottom, setprojectImage_marginBottom] = useState(
    projectElemDesign.projectImage_marginBottom
  );
  const [projectTitle_fontSize, setprojectTitle_fontSize] = useState(
    projectElemDesign.projectTitle_fontSize
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
          Project Customization
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
            <h3>Project Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(projectElements).map((key) => {
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
                    value={projectElementsNew[key]}
                    onChange={(e) => {
                      setprojectElementsNew({
                        ...projectElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editproject(projectElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Project Design</h3>
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
                label="Project conatiner max width"
                variant="standard"
                value={projectConatiner_maxWidth}
                onChange={(e) => {
                  setprojectConatiner_maxWidth(e.target.value);
                }}
              />

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Project conatiner display
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={projectConatiner_display}
                onChange={(e) => {
                  setprojectConatiner_display(e.target.value);
                }}
              >
                <MenuItem value="grid">grid</MenuItem>
                <MenuItem value="block">block</MenuItem>
                <MenuItem value="inline">inline</MenuItem>
                <MenuItem value="flex">flex</MenuItem>
                <MenuItem value="inline-grid">inline-grid</MenuItem>
              </Select>

              <InputLabel id="demo-simple-select-label">
                Project image box shadow color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#0e243126"
                  onChange={(e) => {
                    setprojectImage_box_shadow_bg(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: projectImage_box_shadow_bg,
                  }}
                />
              </div>
              <TextField
                type="number"
                id="standard-basic"
                label="Project image border raduis"
                variant="standard"
                value={projectImage_borderRaduis}
                onChange={(e) => {
                  setprojectImage_borderRaduis(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Project image transition"
                variant="standard"
                value={projectImage_transition}
                onChange={(e) => {
                  setprojectImage_transition(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Project image margin bottom"
                variant="standard"
                value={projectImage_marginBottom}
                onChange={(e) => {
                  setprojectImage_marginBottom(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Project title font size"
                variant="standard"
                value={projectTitle_fontSize}
                onChange={(e) => {
                  setprojectTitle_fontSize(e.target.value);
                }}
              />
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editprojectDesign({
                      projectConatiner_maxWidth,
                      projectConatiner_display,
                      projectImage_box_shadow_bg,
                      projectImage_borderRaduis,
                      projectImage_transition,
                      projectImage_marginBottom,
                      projectTitle_fontSize,
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

export default Project;
