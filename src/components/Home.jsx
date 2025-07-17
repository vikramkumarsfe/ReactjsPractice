import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useHttp from "../Http-hook"
import Card from "./reUsableComponents/Card"
import Button from "./reUsableComponents/Button"

const Home = ( ) => {
    const {data, error} = useHttp('https://api.escuelajs.co/api/v1/products')

    if(error) {
        return (
            <div className="flex justify-center items-center">
                <h1 className=" text-xl font-bold bg-gray-300 ">{
                    error.message
                }</h1>

            </div>
        )
    }


    return (
        <div className=" bg-rose-50 min-h-screen ">
            <div className="bg-white p-8 w-4/12 mx-auto shadow-lg text-center">
                <h1 className=" text-4xl font-semibold "> CodingOtt </h1>
                <p className="text-lg font-medium text-gray-600 "> Understanding Redux in React Js</p>
                <hr className=" my-6"/>
                <div  className=" space-y-4">
                    <Card
                    image="./image.jpg"
                    title="Vikram Kumar"
                    description = " In quos doloribus pariatur placeat, similique, fuga nemo libero incidunt numquam commodi dolores quia quibusdam et veritatis aspernatur vel unde ea officiis?"
                    />
                    <Card
                        image="./image.jpg"
                        title="Register"
                        description={
                            <form className=" flex flex-col mt-6 gap-6 ">
                                <input 
                                className="border rounded-lg p-3 "
                                placeholder=" Enter Your full Name"
                                required 

                                />
                                <input 
                                className="border rounded-lg p-3 "
                                placeholder=" example@gmail.com"
                                required 
                                
                                />
                                <input 
                                className="border rounded-lg p-3 "
                                placeholder="***************"
                                required 
                                
                                />

                                <Button color="warning">
                                    Submit 
                                </Button>
                            </form>
                        }
                    />
                </div>
                
            </div>
            
        </div>
    )
}

export default Home