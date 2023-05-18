import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editproject,
  editprojectDesign,
} from "../../redux/PortfolioWeb_redux/PW_slice";

function Project() {
  const projectElements = useSelector((state) => state.PW.project);
  const projectElemDesign = useSelector((state) => state.PW.projectDesign);

  //   useEffect(() => {
  //     console.log(homeElements);
  //   }, [homeElements]);

  const dispatch = useDispatch();

  const [projectElementsNew, setprojectElementsNew] = useState(projectElements);

  const [projectsContainer_maxWidth, setprojectsContainer_maxWidth] = useState(
    projectElemDesign.projectsContainer_maxWidth
  );
  const [projectInfo_padding, setprojectInfo_padding] = useState(
    projectElemDesign.projectInfo_padding
  );
  const [projectInfo_alignItems, setprojectInfo_alignItems] = useState(
    projectElemDesign.projectInfo_alignItems
  );
  const [projectInfo_color, setprojectInfo_color] = useState(
    projectElemDesign.projectInfo_color
  );
  const [projectName_fontSize, setprojectName_fontSize] = useState(
    projectElemDesign.projectName_fontSize
  );
  const [projectName_fontWeight, setprojectName_fontWeight] = useState(
    projectElemDesign.projectName_fontWeight
  );
  const [projectHeading2_fontSize, setprojectHeading2_fontSize] = useState(
    projectElemDesign.projectHeading2_fontSize
  );
  const [projectHeading2_fontWeight, setprojectHeading2_fontWeight] = useState(
    projectElemDesign.projectHeading2_fontWeight
  );
  const [projectHeading2_marginTop, setprojectHeading2_marginTop] = useState(
    projectElemDesign.projectHeading2_marginTop
  );
  const [projectParagraohInfo_color, setprojectParagraohInfo_color] = useState(
    projectElemDesign.projectParagraohInfo_color
  );
  const [projectBackgroundImage_opacity, setprojectBackgroundImage_opacity] =
    useState(projectElemDesign.projectBackgroundImage_opacity);
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
                label="Container Maximun width"
                variant="standard"
                value={projectsContainer_maxWidth}
                onChange={(e) => {
                  setprojectsContainer_maxWidth(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Project Info padding"
                variant="standard"
                value={projectInfo_padding}
                onChange={(e) => {
                  setprojectInfo_padding(e.target.value);
                }}
              />

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Project Info alignItems
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={projectInfo_alignItems}
                onChange={(e) => {
                  setprojectInfo_alignItems(e.target.value);
                }}
              >
                <MenuItem value="flex-start">flex-start</MenuItem>
                <MenuItem value="flex-end">flex-end</MenuItem>
                <MenuItem value="center">center</MenuItem>
                <MenuItem value="start">start</MenuItem>
                <MenuItem value="end">end</MenuItem>
              </Select>

              <InputLabel id="demo-simple-select-label">
                Project info Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#ffffff"
                  onChange={(e) => {
                    setprojectInfo_color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: projectInfo_color,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Project name Font Size"
                variant="standard"
                value={projectName_fontSize}
                onChange={(e) => {
                  setprojectName_fontSize(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Project name Font weight"
                variant="standard"
                value={projectName_fontWeight}
                onChange={(e) => {
                  setprojectName_fontWeight(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Project heading Font Size"
                variant="standard"
                value={projectHeading2_fontSize}
                onChange={(e) => {
                  setprojectHeading2_fontSize(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Project heading Font weight"
                variant="standard"
                value={projectHeading2_fontWeight}
                onChange={(e) => {
                  setprojectHeading2_fontWeight(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Project heading margin top"
                variant="standard"
                value={projectHeading2_marginTop}
                onChange={(e) => {
                  setprojectHeading2_marginTop(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Project paragraph info Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#ffffff"
                  onChange={(e) => {
                    setprojectParagraohInfo_color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: projectParagraohInfo_color,
                  }}
                />
              </div>
              <TextField
                type="number"
                id="standard-basic"
                label="Project background image opacity"
                variant="standard"
                value={projectBackgroundImage_opacity}
                onChange={(e) => {
                  setprojectBackgroundImage_opacity(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editprojectDesign({
                      projectsContainer_maxWidth,
                      projectInfo_padding,
                      projectInfo_alignItems,
                      projectInfo_color,
                      projectName_fontSize,
                      projectName_fontWeight,
                      projectHeading2_fontSize,
                      projectHeading2_fontWeight,
                      projectHeading2_marginTop,
                      projectParagraohInfo_color,
                      projectBackgroundImage_opacity,
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
