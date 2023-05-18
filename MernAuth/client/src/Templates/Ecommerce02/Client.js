import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import {
  editClient,
  editClientDesign,
} from "../../redux/Ecommerce02_redux/E02_Slice";

function Client() {
  const ClientElements = useSelector((state) => state.E02.client);
  const ClientDesign = useSelector((state) => state.E02.clientDesign);

  useEffect(() => {
    console.log(ClientDesign);
  }, [ClientDesign]);

  const dispatch = useDispatch();

  const [ClientElementsNew, setClientElementsNew] = useState(ClientElements);

  const [backgroundImage, setbackgroundImage] = useState(
    ClientDesign.backgroundImage
  );
  const [backgroundImage_opacity, setbackgroundImage_opacity] = useState(
    ClientDesign.backgroundImage_opacity
  );
  const [justifyContent, setjustifyContent] = useState(
    ClientDesign.justifyContent
  );
  const [itemPadding, setitemPadding] = useState(ClientDesign.itemPadding);
  const [imageHeight, setimageHeight] = useState(ClientDesign.imageHeight);

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
          Client Customization
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
              flexDirection: "Client",
              justifyContent: "start",
              alignItems: "start",
              gap: "1rem",
              width: "50%",
              height: "100%",
              borderRight: "1px solid #000",
              paddingRight: "1rem",
            }}
          >
            <h3>Client Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(ClientElements).map((key) => {
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
                    value={ClientElementsNew[key]}
                    onChange={(e) => {
                      setClientElementsNew({
                        ...ClientElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editClient(ClientElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Client Design</h3>
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
                type="text"
                id="standard-basic"
                label="Background image"
                variant="standard"
                value={backgroundImage}
                onChange={(e) => {
                  setbackgroundImage(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Background image opacity"
                variant="standard"
                value={backgroundImage_opacity}
                onChange={(e) => {
                  setbackgroundImage_opacity(e.target.value);
                }}
              />
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                justify Content
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={justifyContent}
                onChange={(e) => {
                  setjustifyContent(e.target.value);
                }}
              >
                <MenuItem value="center">center</MenuItem>
                <MenuItem value="start">start</MenuItem>
                <MenuItem value="left">left</MenuItem>
                <MenuItem value="right">right</MenuItem>
              </Select>

              <TextField
                type="number"
                id="standard-basic"
                label="Item padding"
                variant="standard"
                value={itemPadding}
                onChange={(e) => {
                  setitemPadding(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Image height"
                variant="standard"
                value={imageHeight}
                onChange={(e) => {
                  setimageHeight(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editClientDesign({
                      backgroundImage,
                      backgroundImage_opacity,
                      justifyContent,
                      itemPadding,
                      imageHeight,
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

export default Client;
