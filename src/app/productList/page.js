"use client"
import { useEffect, useState } from "react"

// fetching data from API in client component ...
export default function Product() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function myfunc() {
            let response = await fetch("https://dummyjson.com/products")
            response = await response.json()
            console.log("response23456 :", response.products)
            setProduct(response.products);
        }
        myfunc();

    },[])

    return (
        <div>
            <h1>products </h1>
            {
                product.map((item) => (
                    <h3>Item: {item.title}, Price: {item.price}</h3>
                ))
            }

        </div>
    )
}