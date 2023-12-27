import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Grid } from '@mui/material'

const ProductCardList = () => {
    const [products, setProducts] = useState([])

    const fetchData = () => {
        axios.get(`https://dummyjson.com/products?limit=100`)
            .then((res) => {
                setProducts(res.data.products)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <Grid
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
            </Grid>
        </>
    )
}

export default ProductCardList