import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Category() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                console.log(res.data);
                setCategory(res.data);
            })
            .catch((err) => {
                console.error('Error fetching categories:', err);
            });
    }, []);

    return (
        <Grid container spacing={2} style={{ marginTop: 10 }}>
            {category.map((item, index) => (
                <Grid item xs={3} key={index}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Link to={`product/${item.slug}`}>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {item.name}
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
