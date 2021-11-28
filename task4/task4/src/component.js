import { fetchedData } from "./YoutubeAPI";
import { useContext } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { fetchedItems } from "./Infinitescroll";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
function Component() {
  const context = useContext(fetchedItems);

  console.log(context);
  return (
    <>
      <Grid className="gridLayout" container spacing={2}>
        {context &&
          context.map((prop) => {
            return (
              <>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Card sx={{ maxWidth: 345 }} className="card">
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={prop.snippet.thumbnails.high.url}
                    />
                    <CardContent>
                      <Typography
                        className="vid_title"
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {prop.snippet.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      ></Typography>
                    </CardContent>
                    <CardActions>
                      <div className="channel_name">
                        {prop.snippet.channelTitle}
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            );
          })}
      </Grid>
    </>
  );
}

export default Component;
