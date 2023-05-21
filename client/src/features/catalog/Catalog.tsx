import { useState, useEffect } from "react"
import { IProduct } from "../../app/models/IProduct"
import ProductList from "./ProductList"
import agent from "../../app/api/agent"
import LoadingComponent from "../../app/layout/LoadingComponent"

export default function Catalog() {
    const [products, setProducts] = useState<IProduct[] | []>([])
    const [loading,setLoading] = useState(true);

    useEffect(() => {
      agent.Catalog.list()
        .then(products => setProducts(products))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    if(loading) return <LoadingComponent message="Loading Catalog..."/>
  
    return (
            <>
                <ProductList products={products} />
            </>
            )
}