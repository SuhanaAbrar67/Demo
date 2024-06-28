import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';

export default function Product() {
    const { catname } = useParams();
    const [products, setProducts] = useState([]);
    const[search,setSearch]=useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${catname}`)
            .then((res) => {
                console.log(res.data);
                console.log(res.data.products);
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.error('Error fetching products:', err);
            });
    }, [catname]);
    
    const handleChange=(e)=>{
        console.log(e.target.value,"search")
        setSearch((e.target.value).toLowerCase())
    }
  
    return (
        <div>
            <TextField onChange={handleChange}
            label="search products here"
            InputProps={{style:{fontSize:40}}}/>

            <Grid container spacing={2}>
                {products.filter((value)=>value.title.toLowerCase().includes(search)).map((item) =>{
                    console.log(item)
                    if(item==null || item==""){
                        return(
                            <h1>Hello</h1>
                        )
                    }else{
                        return(

                            <Grid item xs={3} >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.images}
                                    alt="Product Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        )}})}
                       
                
                
            </Grid>
        </div>
    );
}
