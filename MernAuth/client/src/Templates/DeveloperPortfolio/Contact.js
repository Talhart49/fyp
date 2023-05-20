import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editcontact,
  editcontactDesign,
} from "../../redux/PortfolioWeb_redux/PW_slice";

function Contact() {
  const contactElements = useSelector((state) => state.PW.contact);
  const contactElemDesign = useSelector((state) => state.PW.contactDesign);
  const rootTheme = useSelector((state) => state.PW.globalDesign);

  //   useEffect(() => {
  //     console.log(homeElements);
  //   }, [homeElements]);

  const dispatch = useDispatch();

  const [contactElementsNew, setcontactElementsNew] = useState(contactElements);

  ///

  

  const [contactBox_borderRaduis, setcontactBox_borderRaduis] = useState(
    contactElemDesign.contactBox_borderRaduis
  );
  const [contactBox_padding, setcontactBox_padding] = useState(
    contactElemDesign.contactBox_padding
  );
  const [ContactIconWidth, setContactIconWidth] = useState(
    contactElemDesign.ContactIconWidth
  );
  const [ContactIcon_marginBottom, setContactIcon_marginBottom] = useState(
    contactElemDesign.ContactIcon_marginBottom
  );
  const [ContactHeadings_fontSize, setContactHeadings_fontSize] = useState(
    contactElemDesign.ContactHeadings_fontSize
  );
  const [ContactHeadings_fontWeight, setContactHeadings_fontWeight] = useState(
    contactElemDesign.ContactHeadings_fontWeight
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
            <h3>Contact Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(contactElements).map((key) => {
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
                    value={contactElementsNew[key]}
                    onChange={(e) => {
                      setcontactElementsNew({
                        ...contactElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editcontact(contactElementsNew));
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
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <TextField
                type="number"
                id="standard-basic"
                label="Contact box border radius"
                variant="standard"
                value={contactBox_borderRaduis}
                onChange={(e) => {
                  setcontactBox_borderRaduis(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Contact box padding"
                variant="standard"
                value={contactBox_padding}
                onChange={(e) => {
                  setcontactBox_padding(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Icon width"
                variant="standard"
                value={ContactIconWidth}
                onChange={(e) => {
                  setContactIconWidth(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Icon margin bottom"
                variant="standard"
                value={ContactIcon_marginBottom}
                onChange={(e) => {
                  setContactIcon_marginBottom(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Heading font size"
                variant="standard"
                value={ContactHeadings_fontSize}
                onChange={(e) => {
                  setContactHeadings_fontSize(e.target.value);
                }}
              />{" "}
              <TextField
                type="number"
                id="standard-basic"
                label="Heading font weight"
                variant="standard"
                value={ContactHeadings_fontWeight}
                onChange={(e) => {
                  setContactHeadings_fontWeight(e.target.value);
                }}
              />
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editcontactDesign({
                      contactBox_borderRaduis,
                      contactBox_padding,
                      ContactIconWidth,
                      ContactIcon_marginBottom,
                      ContactHeadings_fontSize,
                      ContactHeadings_fontWeight,
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
