import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import Navbar from "../components/NavBar";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import watch from "../assets/watch.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HomeIcon from "@mui/icons-material/Home";
import EstImage from "../assets/Estate Ease.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PropertyGrid from "../components/PropertyGrid";
import cardImage from "../assets/cardImage.png";
import Feature from "../components/Feature";
import TestimonialsGrid from "../components/TestimonialsGrid";
import BannerContainer from "../components/BannerContainer";
import Footer from "../components/Footer";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Beautiful Family Home",
    price: "$400,000",
    location: "1234 Elm St.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Luxury Apartment",
    price: "$600,000",
    location: "5678 Oak St.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Modern Studio",
    price: "$300,000",
    location: "9101 Pine St.",
    image: "https://via.placeholder.com/150",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "12px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "424px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative", // Make it relative to allow absolute positioning inside
       
          width: "100vw",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <Navbar />
        {/* Background with Blur */}
        <Box
          sx={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/a0d7/9c2c/7c8fd7bdfa76803e5e797968a648ca12?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d07rWLJXZ3IywvxNWPfZkucdAKSibaAjAk0pQMTPHYeF6FlNq~DrUcpjx97CQaTdaobIP0prgSLR~ySPJnF1lVCEzoRsOBIPXCRJ3do3mpXFnc26-984gDVtVqEN22Vue660rn5xLeaUNDD1SdDBPZkcHgIZzyPG3pT7GpYwRX32n2jZ8RvKpDgm4MMjhJ42IBNb9yGHK3mwPANkxRtkF2j-Nm6MEcaz~8XSef5eYRAubrV87N2X8-QT-FZGUk4QYhwJSUMytG5lKOydAbKicsTrys-pvQ0U2ccHE3NMidrlHKThlkxpHmlpPy8y7vR3UxTwHFCxNt6mWRqv5-eFFQ__)", // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(8px)",
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: 1, // Ensure it stays behind the content
          }}
        />
        <Box
          sx={{
            backgroundColor: "#0000008c", // Semi-transparent black
            height: "100%",
            width: "100%",

            position: "absolute",
            zIndex: 2,
          }}
        />

        {/* SVG and Circles */}
        <Box
          sx={{
            color: "border: 2px solid #00D22E09",
            position: "absolute", // Absolute positioning inside the Box
            top: "-6px",
            left: "-292px",
            zIndex: 2, // Ensure it stays behind the text
          }}
        >
          <svg
            width="508"
            height="794"
            viewBox="0 0 508 794"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="108"
              cy="394"
              r="350"
              fill="#00D22E"
              fillOpacity="0.035"
            />
            <circle
              cx="108"
              cy="394"
              r="349"
              stroke="#00D22E"
              strokeOpacity="0.035"
              strokeWidth="2"
            />
            <circle
              cx="108"
              cy="394"
              r="300"
              fill="#00D22E"
              fillOpacity="0.035"
            />
            <circle
              cx="108"
              cy="394"
              r="299"
              stroke="#00D22E"
              strokeOpacity="0.035"
              strokeWidth="2"
            />
            <circle
              cx="108"
              cy="394"
              r="250"
              fill="#00D22E"
              fillOpacity="0.035"
            />
            <circle
              cx="108"
              cy="394"
              r="249"
              stroke="#00D22E"
              strokeOpacity="0.035"
              strokeWidth="2"
            />
            <circle
              cx="108"
              cy="394"
              r="200"
              fill="#00D22E"
              fillOpacity="0.035"
            />
            <circle
              cx="108"
              cy="394"
              r="199"
              stroke="#00D22E"
              strokeOpacity="0.035"
              strokeWidth="2"
            />
            <circle
              cx="108"
              cy="394"
              r="150"
              fill="#00D22E"
              fillOpacity="0.035"
            />
            <circle
              cx="108"
              cy="394"
              r="149"
              stroke="#00D22E"
              strokeOpacity="0.035"
              strokeWidth="2"
            />
            <circle
              cx="108"
              cy="394"
              r="100"
              fill="#00D22E"
              fillOpacity="0.035"
            />
            <circle
              cx="108"
              cy="394"
              r="99"
              stroke="#00D22E"
              strokeOpacity="0.035"
              strokeWidth="2"
            />
            <circle cx="108" cy="394" r="400" fill="white" fillOpacity="0.02" />
            <circle
              cx="108"
              cy="394"
              r="399"
              stroke="#00D22E"
              strokeOpacity="0.035"
              strokeWidth="2"
            />
          </svg>
        </Box>

        {/* Text Content without Blur */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,

            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            width: "100%",
            // maxWidth: '600px',
            margin: "0 auto",
            padding: "0 20px",
            left: "100px",
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ m: 0 }}>
            Land Your Dream{" "}
            <Box component="span" sx={{ color: "#00D22E", display: "inline" }}>
              Home
            </Box>
          </Typography>

          <Typography variant="h1" gutterBottom sx={{ m: 0 }}>
            Explore Our{" "}
            <Box component="span" sx={{ color: "#00D22E", display: "inline" }}>
              Listings
            </Box>
          </Typography>
          <Typography variant="body2" sx={{ m: 0 }}>
            A decentralized solution for real estate purchases.
          </Typography>
          {/* the sec part */}
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                width: "487px",
                height: "70px",
                position: "absolute",
                top: "120%",
                left: "1%",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box
                sx={{
                  width: "209px",
                  height: "80px",
                  padding: "12px 20px",
                  gap: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "14px",
                  border: "1px solid #FFFFFF",
                  margin: "16px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "#808080",
                    border: "1px solid #FFFFFF",
                    borderRadius: "14px",
                    width: "109px",
                    height: "50px",
                    textTransform: "none",
                    backgroundColor: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#00D22E",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Buy
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "#808080",
                    border: "1px solid #FFFFFF",
                    borderRadius: "14px",
                    width: "109px",
                    height: "50px",
                    textTransform: "none",
                    backgroundColor: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#00D22E",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Rent
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: "349px", // Fixed width
                height: "162px", // Fixed height
                top: "150%", // Top offset
                left: "1004px", // Left offset
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                color: "white",
                fontWeight: "bold",
                border: "1px solid #f1f1f1",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                padding: "10px",
                display: "flex",
                justifyContent: "space-around",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: `url(${watch})`,
                  backgroundSize: "cover",
                  width: "170px",
                  height: "140px",
                  borderRadius: "14px ",
                  border: "1px solid #f1f1f1",
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#00D22E",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: "3.5rem" }} />
                </Box>
              </Box>

              <Box sx={{ width: "140px", ml: 3 }}>
                <Box>
                  <IconButton
                    edge="start"
                    aria-label="home"
                    sx={{ width: "50px", height: "50px", color: "#00D22E" }}
                  >
                    <HomeIcon sx={{ fontSize: "3.5rem" }} />
                  </IconButton>
                  <Box sx={{ mt: 3 }} component="img" src={EstImage} />
                  <Typography
                    sx={{
                      width: "154px",
                      height: "63px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Level Up Your Living: Discover Your New Home
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* the sec box */}
      <Box
        sx={{
          width: "90vw",
          height: "554px",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "400", fontSize: "24px" }}>
            Popular Listings
          </Typography>
          <Button
            sx={{ color: "#00D22E", textTransform: "none", fontSize: "14px" }}
          >
            View all
            <ArrowRightAltIcon />
          </Button>
        </Box>
        {/* card Box */}
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            height: "554px",
            marginTop: "20px",
            gap: "10px",
            display: "flex",
            flexWrap: "nowrap", // Prevents wrapping
          }}
        >
          <Grid item xs={12} md={4}>
            <PropertyGrid properties={properties} />
          </Grid>
        </Box>
      </Box>
      {/*Discover Your Perfect Property on Estate Ease  */}
      <Box
        sx={{
          width: "1240px",
          height: "711px",
          margin: "auto",
          marginTop: "40px",
          background:
            "linear-gradient(279.64deg, rgba(0, 210, 46, 0.7) 0%, #036F0A 100%)",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "40px",
            padding: "30px 0 0 30px",
            color: "white",
            fontFamily: "Sawarabi Gothic",
          }}
        >
          Discover Your Perfect Property on Estate Eases
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "24px",
            textAlign: "left",
            padding: "30px",
            color: "white",
            width: "1240px",
            pb: "30px",
          }}
        >
          Get guided on how to rent a property through each step to ensure your
          property is listed and rented in no time.
        </Typography>
        <Box>
          <Box
            sx={{
              width: "613px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              msFlexDirection: "column",
              flexDirection: "column",
              padding: "30px",
              position: "absolute",
              left: "10%",
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: "91px",
                  height: "120px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "80px",
                    fontWeight: 700,
                    lineHeight: "120px",
                    letterSpacing: "0.1em",
                    textAlign: "left",
                    color: "#00BA0080",
                  }}
                >
                  01
                </Typography>
              </Box>
              <Box sx={{ width: "500px", height: "130px", pl: 3 }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  Search available listings
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: "21px",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  Experience the full potential of Leap by creating an account.
                  As a registered user, you’ll gain exclusive access to create,
                  manage and validate claims with ease.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: "91px",
                  height: "120px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "80px",
                    fontWeight: 700,
                    lineHeight: "120px",
                    letterSpacing: "0.1em",
                    textAlign: "left",
                    color: "#00BA0080",
                  }}
                >
                  01
                </Typography>
              </Box>
              <Box sx={{ width: "500px", height: "130px", pl: 3 }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  Search available listings
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: "21px",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  Experience the full potential of Leap by creating an account.
                  As a registered user, you’ll gain exclusive access to create,
                  manage and validate claims with ease.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: "91px",
                  height: "120px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "80px",
                    fontWeight: 700,
                    lineHeight: "120px",
                    letterSpacing: "0.1em",
                    textAlign: "left",
                    color: "#00BA0080",
                  }}
                >
                  01
                </Typography>
              </Box>
              <Box sx={{ width: "500px", height: "130px", pl: 3 }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  Search available listings
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: "21px",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  Experience the full potential of Leap by creating an account.
                  As a registered user, you’ll gain exclusive access to create,
                  manage and validate claims with ease.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "499px",
            height: "422px",
            backgroundImage: `url(${cardImage})`,
            backgroundSize: "cover",
            borderRadius: "20px",
            position: "absolute",
            left: "55%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
           
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#00D22E",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: "3.5rem" ,color1: "white",}} />
             
              </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "90vw",
          height: "554px",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "400", fontSize: "24px" }}>
            Featured
          </Typography>
          <Button
            sx={{ color: "#00D22E", textTransform: "none", fontSize: "14px" }}
          >
            View all
            <ArrowRightAltIcon />
          </Button>
        </Box>
        {/* card Box */}
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            height: "554px",
            marginTop: "20px",
            gap: "10px",
            display: "flex",
            flexWrap: "nowrap", // Prevents wrapping
          }}
        >
          <Grid item xs={12} md={4}>
            <PropertyGrid properties={properties} />
          </Grid>
        </Box>
        <Box>
          <Feature />
        </Box>
        <Box>
          <TestimonialsGrid />
        </Box>
        <Box sx={{ marginTop: "40px" ,marginBottom: "40px"}}>
          <BannerContainer />
        </Box>
        <Box sx={{ marginTop: "40px" ,marginBottom: "40px"}}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
