import React from "react";
import { Typography, Grid } from "@mui/material";
import PropertyCard from "./PropertyCard";

interface Property {
    id: number;
    title: string;
    price: string;
    location: string;
    image: string;
}

interface RecentsProps {
    recents: Property[];
}

const Recents: React.FC<RecentsProps> = ({ recents }) => (
    <div style={{ padding: "20px 0" }}>
        <Typography variant="h6" gutterBottom>
            Recents
        </Typography>
        <Grid container spacing={2}>
            {recents.map((property) => (
                <Grid item xs={12} sm={6} md={4} key={property.id}>
                    <PropertyCard property={property} />
                </Grid>
            ))}
        </Grid>
    </div>
);

export default Recents;
