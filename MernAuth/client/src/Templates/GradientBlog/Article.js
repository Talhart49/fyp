import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import InputColor from "react-input-color";

import {
  editArticles,
  editArticlesDesign,
} from "../../redux/Blog02_redux/B02_slice";

function Articles() {
  const articlesElements = useSelector((state) => state.B02.articles);
  const articlesDesign = useSelector((state) => state.B02.articlesDesign);

  useEffect(() => {
    console.log(articlesElements);
  }, [articlesElements]);

  const dispatch = useDispatch();

  const [articlesElementsNew, setArticlesElementsNew] =
    useState(articlesElements);

  ///

  const [article_card_minWidth, setarticle_card_minWidth] = useState(
    articlesDesign.article_card_minWidth
  );
  const [article_card_maxWidth, setarticle_card_maxWidth] = useState(
    articlesDesign.article_card_maxWidth
  );
  const [article_card_backgroundColor, setarticle_card_backgroundColor] =
    useState(articlesDesign.article_card_backgroundColor);
  const [article_Text_marginBottom, setarticle_Text_marginBottom] = useState(
    articlesDesign.article_Text_marginBottom
  );
  const [article_para_maxWidth, setarticle_para_maxWidth] = useState(
    articlesDesign.article_para_maxWidth
  );
  const [article_backgroundImage, setarticle_backgroundImage] = useState(
    articlesDesign.article_backgroundImage
  );
  const [article_backgroundImageSize, setarticle_backgroundImageSize] =
    useState(articlesDesign.article_backgroundImageSize);
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
          Articles Customization
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
            <h3>Articles Elements</h3>
            <form action="" className="Elements_form">
              {Object.keys(articlesElements).map((key) => {
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
                    value={articlesElementsNew[key]}
                    onChange={(e) => {
                      setArticlesElementsNew({
                        ...articlesElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(editArticles(articlesElementsNew));
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Articles Design</h3>
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
                label="Article card minimun width"
                variant="standard"
                value={article_card_minWidth}
                onChange={(e) => {
                  setarticle_card_minWidth(e.target.value);
                }}
              />
              <TextField
                type="number"
                id="standard-basic"
                label="Article card maximun width"
                variant="standard"
                value={article_card_maxWidth}
                onChange={(e) => {
                  setarticle_card_maxWidth(e.target.value);
                }}
              />

              <InputLabel id="demo-simple-select-label">
                Card background Color
              </InputLabel>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputColor
                  initialValue="#ffffff0d"
                  onChange={(e) => {
                    setarticle_card_backgroundColor(e.hex);
                  }}
                  placement="center"
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: article_card_backgroundColor,
                  }}
                />
              </div>

              <TextField
                type="number"
                id="standard-basic"
                label="Article text margin bottom"
                variant="standard"
                value={article_Text_marginBottom}
                onChange={(e) => {
                  setarticle_Text_marginBottom(e.target.value);
                }}
              />

              <TextField
                type="number"
                id="standard-basic"
                label="Article paragraph maximum width"
                variant="standard"
                value={article_para_maxWidth}
                onChange={(e) => {
                  setarticle_para_maxWidth(e.target.value);
                }}
              />

              <TextField
                type="text"
                id="standard-basic"
                label="Article background image"
                variant="standard"
                value={article_backgroundImage}
                onChange={(e) => {
                  setarticle_backgroundImage(e.target.value);
                }}
              />

              <InputLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "1rem",
                }}
              >
                Background image size
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={article_backgroundImageSize}
                onChange={(e) => {
                  setarticle_backgroundImageSize(e.target.value);
                }}
              >
                <MenuItem value="cover">cover</MenuItem>
                <MenuItem value="contain">contain</MenuItem>
                <MenuItem value="auto">auto</MenuItem>
                <MenuItem value="50%">50%</MenuItem>
              </Select>

              <Button
                variant="contained"
                onClick={() => {
                  dispatch(
                    editArticlesDesign({
                      article_card_minWidth,
                      article_card_maxWidth,
                      article_card_backgroundColor,
                      article_Text_marginBottom,
                      article_para_maxWidth,
                      article_backgroundImage,
                      article_backgroundImageSize,
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

export default Articles;
