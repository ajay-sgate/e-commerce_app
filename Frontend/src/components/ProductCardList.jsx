import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Box, Grid, Skeleton } from '@mui/material'

const ProductCardList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        axios.get(`https://dummyjson.com/products?limit=100`)
            .then((res) => {
                setProducts(res.data.products)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>



            {loading ?
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    px={"20px"}
                    py={"150px"}
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    {Array.from({ length: 100 }).map((_, index) => (
                        <Grid key={index} item md={3}> {/* Removed width={"20%"} */}
                            <Skeleton variant="rectangular" width={210} height={118} />
                            <Box padding={"10px"}>
                                <Box sx={{ pt: 0.5 }}>
                                    <Skeleton width={100} />
                                    <Skeleton width={100} />
                                </Box>
                                <br />
                                <Box display="flex" gap={5} justifyContent="flex-start">
                                    <Skeleton variant="rectangular" width={50} height={30} />
                                    <Skeleton variant="rectangular" width={50} height={30} />
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid> : <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    px={"20px"}
                    py={"150px"}
                    rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    {products.map((data) => (
                        <Grid key={data.id} item md={3} zeroMinWidth >
                            <ProductCard data={data} />
                        </Grid>
                    ))}
                </Grid>}
        </>
    )
}

export default ProductCardList