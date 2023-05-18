import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";
import InputColor from 'react-input-color';
import { useSelector, useDispatch } from "react-redux";

import {
  editContact,
  editContactDesign,
} from "../../redux/Ecommerce02_redux/E02_Slice";

function Contact() {
  const ContactElements = useSelector((state) => state.E02.contact);
  const ContactDesign = useSelector((state) => state.E02.contactDesign);

  useEffect(() => {
    console.log(ContactDesign);
  }, [ContactDesign]);

  const dispatch = useDispatch();

  const [ContactElementsNew, setContactElementsNew] = useState(ContactElements);

  const [backgroundImage, setbackgroundImage] = useState(
    ContactDesign.backgroundImage
  );
  const [backgroundImage_opacity, setbackgroundImage_opacity] = useState(
    ContactDesign.backgroundImage_opacity
  );
  const [contactBox_paddingBottom, setcontactBox_paddingBottom] = useState(
    ContactDesign.contactBox_paddingBottom
  );
  const [textField_borderRadius, settextField_borderRadius] = useState(
    ContactDesign.textField_borderRadius
  );
  const [textFieldLabel_fontSize, settextFieldLabel_fontSize] = useState(
    ContactDesign.paragraph_fontWeight
  );

  const [textFieldLabel_fontFamily, settextFieldLabel_fontFamily] = useState(
    ContactDesign.textFieldLabel_fontFamily
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
          Contact Customization
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
              flexDirection: "Contact",
              justifyContent: "start",
              alignItems: "start",
              gap: "1rem",
              width: "50%",
              height: "100%",
              borderRight: "1px solid #000",
              paddingRight: "1rem",
            }}
          >
            <h3>Contact Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(ContactElements).map((key) => {
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
                    value={ContactElementsNew[key]}
                    onChange={(e) => {
                      setContactElementsNew({
                        ...ContactElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editContact(ContactElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Contact Design</h3>
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "Contact",
                gap: "1rem",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <TextField
                type="number"
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

              <TextField
                type="number"
                id="standard-basic"
                label="Contact box padding bottom"
                variant="standard"
                value={contactBox_paddingBottom}
                onChange={(e) => {
                  setcontactBox_paddingBottom(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Text field border radius"
                variant="standard"
                value={textField_borderRadius}
                onChange={(e) => {
                  settextField_borderRadius(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Text field label font size"
                variant="standard"
                value={textFieldLabel_fontSize}
                onChange={(e) => {
                  settextFieldLabel_fontSize(e.target.value);
                }}
              />

              <InputLabel id="fontFamily">
                Text field label font family
              </InputLabel>
              <Select
                labelId="fontFamily"
                id="demo-simple-select"
                label="Age"
                value={textFieldLabel_fontFamily}
                onChange={(e) => {
                  settextFieldLabel_fontFamily(e.target.value);
                }}
              >
                <MenuItem value="Bree Serif">Bree Serif</MenuItem>
                <MenuItem value="DM Sans">DM Sans</MenuItem>
                <MenuItem value="Roboto">Roboto</MenuItem>
                <MenuItem value="sans-serif">sans-serif</MenuItem>
              </Select>

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editContactDesign({
                      backgroundImage,
                      backgroundImage_opacity,
                      contactBox_paddingBottom,
                      textField_borderRadius,
                      textFieldLabel_fontSize,
                      textFieldLabel_fontFamily,
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

export default Contact;
