import React from 'react';
import '../App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {

    return (
        <Card sx={{
            maxWidth: 300, maxHeight: 600, m: "2px", "&:hover": {
                border: "2px solid #1976D2",
                cursor: "pointer",
                m: "0px",
            },
            borderRadius: "10px",
            boxShadow: 3
        }}

        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250px"
                    image={data.thumbnail}
                    alt={data.title}

                />
                <CardContent px="2px">
                    <Typography noWrap gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography noWrap variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: "space-around", padding: "15px" }}>
                <Button size="small" variant="contained" color="primary">
                    ${data.price} &nbsp; <ShoppingCartOutlinedIcon />
                </Button>
                <Link to={`/product/${data.id}`}>
                    <Button size="small" variant="outlined" color="primary">
                        <VisibilityIcon />
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default ProductCard