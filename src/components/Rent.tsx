import React from "react";
import { Container, Grid, Box, Button } from "@mui/material";
import Navbar from "../components/NavBar";
import SearchFilter from "../components/SearchFilter";
import PropertyGrid from "../components/PropertyGrid";
import Recents from "../components/Recents";

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
    {
        id: 4,
        title: "Charming Cottage",
        price: "$250,000",
        location: "1122 Maple St.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        title: "Spacious Loft",
        price: "$500,000",
        location: "1314 Birch St.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        title: "Cozy Bungalow",
        price: "$350,000",
        location: "1516 Cedar St.",
        image: "https://via.placeholder.com/150",
    },
];

const recents = properties.slice(0, 4);

const RentPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <SearchFilter />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <PropertyGrid properties={properties} />
                        <Box display="flex" justifyContent="center" marginY={4}>
                            <Button variant="contained" color="primary">
                                Load more
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Recents recents={recents} />
            </Container>
        </>
    );
};

export default RentPage;
