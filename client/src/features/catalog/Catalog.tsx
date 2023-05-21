import { useState, useEffect } from "react"
import { IProduct } from "../../app/models/IProduct"
import ProductList from "./ProductList"

export default function Catalog() {
    const [products, setProducts] = useState<IProduct[] | []>([])

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
  
    return (
            <>
                <ProductList products={products} />
            </>
            )
}