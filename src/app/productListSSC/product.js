"use client"
export default function Product (props) {
    return (
        <div>
            <button onClick={() => {alert(`Price is ${props.price}`)}}>Check Price</button>
        </div>
    )
}