import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import { editTeam, editTeamDesign } from "../../redux/Blog02_redux/B02_slice";

function Team() {
  const TeamElements = useSelector((state) => state.B02.team);
  const TeamDesign = useSelector((state) => state.B02.teamDesign);

  useEffect(() => {
    console.log(TeamElements);
  }, [TeamElements]);

  const dispatch = useDispatch();

  const [TeamElementsNew, setTeamElementsNew] = useState(TeamElements);

  ///

  const [card_minWidth, setcard_minWidth] = useState(TeamDesign.card_minWidth);
  const [card_maxWidth, setcard_maxWidth] = useState(TeamDesign.card_maxWidth);
  const [cardHeight, setcardHeight] = useState(TeamDesign.cardHeight);
  const [card_marginRight, setcard_marginRight] = useState(
    TeamDesign.card_marginRight
  );
  const [card_marginLeft, setcard_marginLeft] = useState(
    TeamDesign.card_marginLeft
  );
  const [card_marginBottom, setcard_marginBottom] = useState(
    TeamDesign.card_marginBottom
  );

  const [card_paddingTop, setcard_paddingTop] = useState(
    TeamDesign.card_paddingTop
  );
  const [cardParagraph_maxWidth, setcardParagraph_maxWidth] = useState(
    TeamDesign.cardParagraph_maxWidth
  );
  const [cardImage_borderRadius, setcardImage_borderRadius] = useState(
    TeamDesign.cardImage_borderRadius
  );
  const [card_1_backgroundImage, setcard_1_backgroundImage] = useState(
    TeamDesign.card_1_backgroundImage
  );
  const [card_2_backgroundImage, setcard_2_backgroundImage] = useState(
    TeamDesign.card_2_backgroundImage
  );
  const [card_3_backgroundImage, setcard_3_backgroundImage] = useState(
    TeamDesign.card_3_backgroundImage
  );
  const [card_4_backgroundImage, setcard_4_backgroundImage] = useState(
    TeamDesign.card_4_backgroundImage
  );
  const [card_5_backgroundImage, setcard_5_backgroundImage] = useState(
    TeamDesign.card_5_backgroundImage
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
          Team Customization
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
            <h3>Team Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(TeamElements).map((key) => {
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
                    value={TeamElementsNew[key]}
                    onChange={(e) => {
                      setTeamElementsNew({
                        ...TeamElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editTeam(TeamElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Team Design</h3>
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
                label="Card minimum width"
                variant="standard"
                value={card_minWidth}
                onChange={(e) => {
                  setcard_minWidth(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Card maximum width"
                variant="standard"
                value={card_maxWidth}
                onChange={(e) => {
                  setcard_maxWidth(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Card height"
                variant="standard"
                value={cardHeight}
                onChange={(e) => {
                  setcardHeight(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Card margin right"
                variant="standard"
                value={card_marginRight}
                onChange={(e) => {
                  setcard_marginRight(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Card margin left"
                variant="standard"
                value={card_marginLeft}
                onChange={(e) => {
                  setcard_marginLeft(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Card margin bottom"
                variant="standard"
                value={card_marginBottom}
                onChange={(e) => {
                  setcard_marginBottom(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Card padding top"
                variant="standard"
                value={card_paddingTop}
                onChange={(e) => {
                  setcard_paddingTop(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Card paragraph max width"
                variant="standard"
                value={cardParagraph_maxWidth}
                onChange={(e) => {
                  setcardParagraph_maxWidth(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Card image border radius"
                variant="standard"
                value={cardImage_borderRadius}
                onChange={(e) => {
                  setcardImage_borderRadius(e.target.value);
                }}
              />

              <TextField
                type="text"
                id="standard-basic"
                label="Card 1 background image"
                variant="standard"
                value={card_1_backgroundImage}
                onChange={(e) => {
                  setcard_1_backgroundImage(e.target.value);
                }}
              />

              <TextField
                type="text"
                id="standard-basic"
                label="Card 2 background image"
                variant="standard"
                value={card_2_backgroundImage}
                onChange={(e) => {
                  setcard_2_backgroundImage(e.target.value);
                }}
              />

              <TextField
                type="text"
                id="standard-basic"
                label="Card 3 background image"
                variant="standard"
                value={card_3_backgroundImage}
                onChange={(e) => {
                  setcard_3_backgroundImage(e.target.value);
                }}
              />
              <TextField
                type="text"
                id="standard-basic"
                label="Card 4 background image"
                variant="standard"
                value={card_4_backgroundImage}
                onChange={(e) => {
                  setcard_4_backgroundImage(e.target.value);
                }}
              />
              <TextField
                type="text"
                id="standard-basic"
                label="Card 5 background image"
                variant="standard"
                value={card_5_backgroundImage}
                onChange={(e) => {
                  setcard_5_backgroundImage(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editTeamDesign({
                      card_minWidth,
                      card_maxWidth,
                      cardHeight,
                      card_marginRight,
                      card_marginLeft,
                      card_marginBottom,
                      card_paddingTop,
                      cardParagraph_maxWidth,
                      cardImage_borderRadius,

                      card_1_backgroundImage,
                      card_2_backgroundImage,
                      card_3_backgroundImage,
                      card_4_backgroundImage,
                      card_5_backgroundImage,
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

export default Team;
