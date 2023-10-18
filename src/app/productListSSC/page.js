import Product from "../productListSSC/product";


async function myfunc() {
    let response = await fetch("https://dummyjson.com/products")
    response = await response.json()
    // console.log("responseSSC :", response.products)
    return response.products;
}

// fetching data from API in server component ...
export default async function ProductSSC() {
    let product = await myfunc();
    // console.log("responseSSC in side component... ", product)
    return (
        <div>
            <h1>products </h1>
            {
                product.map((item) => (
                    <div>
                        <h3>Item: {item.title}</h3>
                        <Product price={item.price} />
                        {/* Event handlers cannot be passed to Client Component props. */}
                        {/* <button onClick={()=> {alert("hello")}}>click me</button> */}
                    </div>
                ))
            }
        </div>
    )
}