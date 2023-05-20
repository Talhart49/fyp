import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editservice,
  editserviceDesign,
} from "../../redux/PortfolioWeb_redux/PW_slice";

function Service() {
  const serviceElements = useSelector((state) => state.PW.service);
  const serviceElemDesign = useSelector((state) => state.PW.serviceDesign);

  //   useEffect(() => {
  //     console.log(homeElements);
  //   }, [homeElements]);

  const dispatch = useDispatch();

  const [serviceElementsNew, setserviceElementsNew] = useState(serviceElements);

  const [serviceCards_marginTop, setserviceCards_marginTop] = useState(
    serviceElemDesign.serviceCards_marginTop
  );
  const [serviceCards_items, setserviceCards_items] = useState(
    serviceElemDesign.serviceCards_items
  );
  const [serviceCards_padding, setserviceCards_padding] = useState(
    serviceElemDesign.serviceCards_padding
  );
  const [serviceCards_borderRadius, setserviceCards_borderRadius] = useState(
    serviceElemDesign.serviceCards_borderRadius
  );
  const [serviceCards_backGroundImage, setserviceCards_backGroundImage] =
    useState(serviceElemDesign.serviceCards_backGroundImage);
  const [
    serviceCards_backGroundImage_opacity,
    setserviceCards_backGroundImage_opacity,
  ] = useState(serviceElemDesign.serviceCards_backGroundImage_opacity);
  const [serviceName_fontSize, setserviceName_fontSize] = useState(
    serviceElemDesign.serviceName_fontSize
  );
  const [serviceName_Color, setserviceName_Color] = useState(
    serviceElemDesign.serviceName_Color
  );
  const [serviceName_marginBottom, setserviceName_marginBottom] = useState(
    serviceElemDesign.serviceName_marginBottom
  );
  const [serviceDescription_Color, setserviceDescription_Color] = useState(
    serviceElemDesign.serviceDescription_Color
  );
  const [serviceDescription_textAlign, setserviceDescription_textAlign] =
    useState(serviceElemDesign.serviceDescription_textAlign);

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
            <h3>Service Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(serviceElements).map((key) => {
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
                    value={serviceElementsNew[key]}
                    onChange={(e) => {
                      setserviceElementsNew({
                        ...serviceElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editservice(serviceElementsNew));
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
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <TextField
                type="number"
                id="standard-basic"
                label="Cards margin top"
                variant="standard"
                value={serviceCards_marginTop}
                onChange={(e) => {
                  setserviceCards_marginTop(e.target.value);
                }}
              />
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Card Items
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={serviceCards_items}
                onChange={(e) => {
                  setserviceCards_items(e.target.value);
                }}
              >
                <MenuItem value="flex-start">flex-start</MenuItem>
                <MenuItem value="flex-end">flex-end</MenuItem>
                <MenuItem value="center">center</MenuItem>
                <MenuItem value="start">start</MenuItem>
                <MenuItem value="end">end</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Cards padding"
                variant="standard"
                value={serviceCards_padding}
                onChange={(e) => {
                  setserviceCards_padding(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Cards border radius"
                variant="standard"
                value={serviceCards_borderRadius}
                onChange={(e) => {
                  setserviceCards_borderRadius(e.target.value);
                }}
              />

              <TextField
                type="text"
                id="standard-basic"
                label="Cards background Image"
                variant="standard"
                value={serviceCards_backGroundImage}
                onChange={(e) => {
                  setserviceCards_backGroundImage(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Card background image opacity"
                variant="standard"
                value={serviceCards_backGroundImage_opacity}
                onChange={(e) => {
                  setserviceCards_backGroundImage_opacity(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Service name font size"
                variant="standard"
                value={serviceName_fontSize}
                onChange={(e) => {
                  setserviceName_fontSize(e.target.value);
                }}
              />
              <InputLabel id="demo-simple-select-label">
                Service name Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#ffffff"
                  onChange={(e) => {
                    setserviceName_Color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: serviceName_Color,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Service name margin bottom"
                variant="standard"
                value={serviceName_marginBottom}
                onChange={(e) => {
                  setserviceName_marginBottom(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Service description Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#ffffff"
                  onChange={(e) => {
                    setserviceDescription_Color(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: serviceDescription_Color,
                  }}
                />
              </div>

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Description text align
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={serviceDescription_textAlign}
                onChange={(e) => {
                  setserviceDescription_textAlign(e.target.value);
                }}
              >
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="start">start</MenuItem>
                <MenuItem value="center">center</MenuItem>
                <MenuItem value="start">start</MenuItem>
                <MenuItem value="end">end</MenuItem>
              </Select>

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editserviceDesign({
                      serviceCards_marginTop,
                      serviceCards_items,
                      serviceCards_padding,
                      serviceCards_borderRadius,
                      serviceCards_backGroundImage,
                      serviceCards_backGroundImage_opacity,
                      serviceName_fontSize,
                      serviceName_Color,
                      serviceName_marginBottom,
                      serviceDescription_Color,
                      serviceDescription_textAlign,
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
