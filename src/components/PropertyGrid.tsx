import React from "react";
import { Grid } from "@mui/material";
import PropertyCard from "./PropertyCard";

interface Property {
    id: number;
    title: string;
    price: string;
    location: string;
    image: string;
}

interface PropertyGridProps {
    properties: Property[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => (
    <Grid container spacing={2}>
        {properties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
                <PropertyCard property={property} />
            </Grid>
        ))}
    </Grid>
);

export default PropertyGrid;
