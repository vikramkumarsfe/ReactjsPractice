import { useEffect, useState } from "react"
import { useNavigate} from "react-router-dom"
import { storeProducts } from "../redux/slices/product-slice"
import { useDispatch } from 'react-redux';
import Button from "./reUsableComponents/Button";

const Products = () => {
    const [product,setProducts] =useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')

        .then((response)=>response.json())

        .then((data)=>{
            setProducts(data)
            console.log(data)
        })

        .catch(()=>{
            console.log(err)
        })
    },[])

    const viewProduct=(item) => {
        dispatch(storeProducts(item))
        console.log(item)
        console.log("Product being dispatched:", item)
        navigate('/productDetails')
    }
    return (
        <div className=" bg-gary-100 min-h-screen flex flex-col items-center py-16 ">
            <div className="bg-white p-8 text-center shadow rounded-lg">
                <h1 className="text-5xl font-bold"> Redux App </h1>
                <p className="text-gray-600 text-lg-2 mt-2 "> Click Any product to test your redux app</p>

                
            </div>

            <div className=" w-10/12 mx-auto bg-white rounded-lg shadow mt-4 grid grid-cols-4 gap-8 ">
                {
                    product.map((item, index)=>(
                        <div key={index} className="shadow-lg rounded-lg border p-6 flex flex-col gap-2 ">
                            <img src={item.image}
                                className=" w-full h-[250px] object-cover" 
                            />
                            <h1 className="font-semibold text-lg">{item.title}</h1>
                            <label> ₹{item.price}</label>
                            <button 
                                onClick={()=>viewProduct(item)}
                                className="bg-green-500 rounded-md px-4 py-2 text-center font-semibold text-white " > View Product Details </button>

                            <Button> Buy Now</Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products