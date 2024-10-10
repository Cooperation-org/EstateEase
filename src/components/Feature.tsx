import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const DefiningFeature: React.FC = () => {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: 2,
        width: "1240px",
        height: "662px",
        margin: "auto",
      }}
    >
      <Typography variant="h4" align="left" gutterBottom >
        Our Defining Feature
      </Typography>
      <Typography
        variant="body1"
        align="left"
        gutterBottom
        width="666px"
        height="48px"
        mb={3}
      >
        What sets us apart is our commitment to innovation, our dedication to
        quality and our ability to work collaboratively to achieve outstanding
        results.
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{  width: "1160px", height: "375px", margin: "auto" }}
      >
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "left", width: "370px", height: "375px" ,borderRadius: "20px"}}>
            <CardContent>
              <Box
                sx={{
                  height: "160px",
                  width: "160px",
                  borderRadius: "30px",
                  backgroundColor: "rgba(0, 210, 46, 0.1)",
                  margin: "0 auto",
                  display: "flex", // Flexbox layout
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  m: 3,
                }}
              >
                <Box
                  component="img"
                  src={icon1}
                  alt="icon1"
                  sx={{ height: "100px", width: "100px" }}
                />
              </Box>

              <Typography
                variant="h6"
                sx={{ mt: 3, mb: 3, fontSize: "24px" }}
                align="left"
              >
                Property Development
              </Typography>
              <Typography color="textSecondary" sx={{ fontSize: "14px" }}>
                We see to the development process of your property to ensure we
                exceed investment objectives.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "left", width: "370px", height: "375px" ,borderRadius: "20px"}}>
            <CardContent>
              <Box
                sx={{
                  height: "160px",
                  width: "160px",
                  borderRadius: "30px",
                  backgroundColor: "rgba(0, 210, 46, 0.1)",
                  margin: "0 auto",
                  display: "flex", // Flexbox layout
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  m: 3,
                }}
              >
                <Box
                  component="img"
                  src={icon2}
                  alt="icon2"
                  sx={{ height: "100px", width: "100px" }}
                />
              </Box>

              <Typography
                variant="h6"
                sx={{ mt: 3, mb: 3, fontSize: "24px" }}
                align="left"
              >
                Property Aquisition
              </Typography>
              <Typography color="textSecondary" sx={{ fontSize: "14px" }}>
                We center around the best land, buildings and other property
                types at strategic locations to situate properties.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "left", width: "370px", height: "375px",borderRadius: "20px" }}>
            <CardContent>
              <Box
                sx={{
                  height: "160px",
                  width: "160px",
                  borderRadius: "30px",
                  backgroundColor: "rgba(0, 210, 46, 0.1)",
                  margin: "0 auto",
                  display: "flex", // Flexbox layout
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  m: 3,
                }}
              >
                <Box
                  component="img"
                  src={icon3}
                  alt="icon3"
                  sx={{ height: "100px", width: "100px" }}
                />
              </Box>

              <Typography
                variant="h6"
                sx={{ mt: 3, mb: 3, fontSize: "24px" }}
                align="left"
              >
                Property Management
              </Typography>
              <Typography color="textSecondary" sx={{ fontSize: "14px" }}>
                Experienced personnel oversee teh smooth running of facilities
                within our estates.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DefiningFeature;
