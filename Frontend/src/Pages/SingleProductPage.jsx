import { Alert, Box, Button, Divider, Rating, Snackbar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
const SingleProductPage = () => {
    const [product, setProduct] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [imgsrc, setimgsrc] = useState('')
    const { id } = useParams();

    const fetchData = () => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setProduct(res.data)
                setimgsrc(res.data.thumbnail)
            })
            .catch((err) => console.log(err))
    }


    const handleAddtoBag = () => {
        console.log("cart");
        setIsOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpen(false);
    };



    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div style={{ display: "flex", marginTop: "150px", justifyContent: "space-around", width: "100%" }}>
                <div style={{ width: "35%" }}>
                    <img
                        src={imgsrc}
                        alt={product?.title}
                        height={"300px"}
                        width={"100%"}
                        style={{ objectFit: "contain" }}
                    />
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px", gap: "10px" }}>
                        {product?.images && product?.images.map((el, i) => (
                            <img
                                key={i}
                                src={el}
                                alt={product?.title}
                                height={"60px"}
                                width={"18%"}
                                style={{ border: "1px solid gray", objectFit: "contain", cursor: "pointer", padding: "1px" }}
                                onClick={() => setimgsrc(el)}
                            />
                        ))}

                    </div>
                </div>
                <div style={{ width: "55%" }}>
                    <Typography variant="h2" component="div">
                        {product?.title}
                    </Typography>
                    <Typography variant="h4" component="div">
                        {product?.brand}
                    </Typography>
                    <Rating name="half-rating-read" value={Math.floor(product.rating)} readOnly />
                    <br />
                    <Divider />
                    <br />

                    <Box display="flex" gap="10px" alignItems={"center"}>
                        <Typography variant="h4" component="div" color="red">
                            -{product?.discountPercentage}%
                        </Typography>
                        <Typography variant="h3" component="div">
                            $
                        </Typography>
                        <Typography variant="h3" component="div">
                            {((product?.price) - ((product?.price) * (product?.discountPercentage / 100))).toFixed(2)}
                        </Typography>
                    </Box>

                    <Typography variant="h6" component="div" sx={{ textDecoration: "line-through", color: 'gray' }}>
                        M.R.P.  ${product?.price}
                    </Typography>
                    <br />
                    <Button variant="contained" size="large" sx={{ fontWeight: "bold" }} startIcon={<AddShoppingCartTwoToneIcon />}
                        onClick={() => handleAddtoBag()}
                    >
                        ADD TO  CART
                    </Button>
                </div>
            </div>
            <div style={{ padding: "50px" }}>
                <Typography variant="h3" component="div">
                    Description
                </Typography>
                <Typography variant="h5" component="div">
                    {product?.description}
                </Typography>

            </div>

            <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', color: 'green' }}>
                    Product Added in the Cart !!!
                </Alert>
            </Snackbar>
        </>
    )
}

export default SingleProductPage