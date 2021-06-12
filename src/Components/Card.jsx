import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import InputBase from "@material-ui/core/InputBase";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import axios from "axios";

export default function FoxCard() {
  const [image, setImage] = useState("/loading.gif");

  useEffect(() => {
    if (image === "/loading.gif") {
      axios
        .get("https://randomfox.ca/floof/")
        .then((res) => setImage(res.data.image));
    }
  });

  return (
    <Card
      style={{
        margin: "20px",
        backgroundColor: "#f6d1a9",
      }}
    >
      <CardMedia style={{ height: 0, paddingTop: "56.25%" }} image={image} />
      <CardContent>
        <InputBase
          defaultValue="Your Comment Goes Here"
          inputProps={{ "aria-label": "naked" }}
          variant="body2"
          color="textSecondary"
          component="p"
          multiline
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => setImage("/loading.gif")}
          aria-label="Refresh"
        >
          <RefreshIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
