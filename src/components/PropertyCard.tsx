import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface Property {
    title: string;
    price: string;
    location: string;
    image: string;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
    <Card sx={{ maxWidth:500, borderRadius: "20px" }}>
        <img
            src={property.image}
            alt={property.title}
            style={{ width: "100%" ,borderRadius: "20px"}}
            
        />
        <CardContent>
            <Typography variant="h5">{property.title}</Typography>
            <Typography variant="body1">{property.location}</Typography>
            <Typography variant="h6">{property.price}</Typography>
        </CardContent>
    </Card>
);

export default PropertyCard;
