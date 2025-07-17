import Modal from "./reUsableComponents/Modal"
import Card from "./reUsableComponents/Card"
import Button from "./reUsableComponents/Button"
import { useState } from "react"

const ModalTest = ( ) => {
    const [open,setOpen] = useState(false)
    return (
        <div className=" bg-gray-200  min-h-screen">
            <div className="w-7/12 mx-auto px-12 py-12 bg-white rounded shadow-lg  space-y-4 ">
                <h1 className=" text-3xl font-bold text-center "> Vikram's practice </h1>
                <p className="text-gray-500 text-base "> This is an app that demonstrating how can i make an reusable modal for showing messages in react js app.</p>
                <hr className="w-full"/>
                <div>
                    <Card
                        title="Vikram Kumar"
                        image='./image.jpg'
                        description={
                            <div className=" space-y-4 ">
                                <p>
                                    I am an software engineer who knows security.
                                </p>
                                <Button onClick={()=> setOpen(true)}>
                                    See Profie! 
                                </Button>
                            </div>
                        }
                    />

                    <Modal
                        title="vikram kumar"
                        description = "lorem ipsum This is an app that demonstrating how can i make an reusable modal for sho "
                        image= "./image.jpg"
                        open={open}
                        onClose={()=>setOpen(false)}
                    />
                </div>
            </div>
        </div>
    )
}
export default ModalTest