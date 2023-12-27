import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
    const [product, setProduct] = useState([])
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
                        {product?.images && product?.images.map((el) => (
                            <img
                                src={el}
                                alt={product?.title}
                                height={"60px"}
                                width={"18%"}
                                style={{ border: "1px solid gray", objectFit: "contain", cursor: "pointer", padding:"1px" }}
                                onClick={() => setimgsrc(el)}
                            />
                        ))}

                    </div>
                </div>
                <div style={{ border: "1px solid red", width: "55%" }}>2</div>
            </div>
        </>
    )
}

export default SingleProductPage