import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import {
  editService,
  editServiceDesign,
} from "../../redux/Ecommerce02_redux/E02_Slice";

function Service() {
  const ServiceElements = useSelector((state) => state.E02.service);
  const ServiceDesign = useSelector((state) => state.E02.serviceDesign);

  useEffect(() => {
    console.log(ServiceDesign);
  }, [ServiceDesign]);

  const dispatch = useDispatch();

  const [ServiceElementsNew, setServiceElementsNew] = useState(ServiceElements);

  const [sectionName_marginBottom, setsectionName_marginBottom] = useState(
    ServiceDesign.sectionName_marginBottom
  );
  const [serviceBox_padding, setserviceBox_padding] = useState(
    ServiceDesign.serviceBox_padding
  );
  const [serviceBox_borderRadius, setserviceBox_borderRadius] = useState(
    ServiceDesign.serviceBox_borderRadius
  );
  const [serviceBox_backgroundColor, setserviceBox_backgroundColor] = useState(
    ServiceDesign.serviceBox_backgroundColor
  );
  const [serviceParagraph_fontFamily, setserviceParagraph_fontFamily] =
    useState(ServiceDesign.serviceParagraph_fontFamily);
  const [serviceImage_height, setserviceImage_height] = useState(
    ServiceDesign.serviceImage_height
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
          Service Customization
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
              flexDirection: "Service",
              justifyContent: "start",
              alignItems: "start",
              gap: "1rem",
              width: "50%",
              height: "100%",
              borderRight: "1px solid #000",
              paddingRight: "1rem",
            }}
          >
            <h3>Service Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(ServiceElements).map((key) => {
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
                    value={ServiceElementsNew[key]}
                    onChange={(e) => {
                      setServiceElementsNew({
                        ...ServiceElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editService(ServiceElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Service Design</h3>
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "home",
                gap: "1rem",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <TextField
                type="number"
                id="standard-basic"
                label="Section name margin bottom"
                variant="standard"
                value={sectionName_marginBottom}
                onChange={(e) => {
                  setsectionName_marginBottom(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Service box padding"
                variant="standard"
                value={serviceBox_padding}
                onChange={(e) => {
                  setserviceBox_padding(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Service box border radius"
                variant="standard"
                value={serviceBox_borderRadius}
                onChange={(e) => {
                  setserviceBox_borderRadius(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Service box background Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#f2f2f2"
                  onChange={(e) => {
                    setserviceBox_backgroundColor(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: serviceBox_backgroundColor,
                  }}
                />
              </div>

              <InputLabel id="fontFamily">
                {" "}
                Service paragraphs Font Family
              </InputLabel>
              <Select
                labelId="fontFamily"
                id="demo-simple-select"
                label="Age"
                value={serviceParagraph_fontFamily}
                onChange={(e) => {
                  setserviceParagraph_fontFamily(e.target.value);
                }}
              >
                <MenuItem value="Bree Serif">Bree Serif</MenuItem>
                <MenuItem value="DM Sans">DM Sans</MenuItem>
                <MenuItem value="Roboto">Roboto</MenuItem>
                <MenuItem value="sans-serif">sans-serif</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Service image height"
                variant="standard"
                value={serviceImage_height}
                onChange={(e) => {
                  setserviceImage_height(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editServiceDesign({
                      sectionName_marginBottom,
                      serviceBox_padding,
                      serviceBox_borderRadius,
                      serviceBox_backgroundColor,
                      serviceParagraph_fontFamily,
                      serviceImage_height,
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

export default Service;
