import { useState } from "react"
import Button from "./reUsableComponents/Button"
import DrawerModal from "./reUsableComponents/DrawerModal"
const Drawer = () => {
    const [open, setOpen] = useState(false)
    const [direction, setDirection] = useState('left')
    


    return (
        
        <div className=" w-6/12 mx-auto py-12 space-y-3 space-x-3">
            <h1 className="text-6xl font-semibold text-center">Vikram Kumar </h1>
            <Button
                onClick={()=>{
                    setDirection('right')
                    setOpen(!open)
                }}
            >Right Drawer</Button>

            <Button
                onClick={()=>{
                    setDirection('top')
                    setOpen(!open)}}
                >
                Top Drawer
            </Button>

            <Button
                onClick={()=>{
                    setDirection('left')
                    setOpen(!open)}}
                >
                left Drawer
            </Button>

            <Button
                onClick={()=>{
                    setDirection('bottom')
                    setOpen(!open)}}
                >
                bottom Drawer
            </Button>


            <DrawerModal
                open={open}
                onClose={()=>setOpen(!open)}
                title = "Register Now"
                direction={direction}
                content={
                    <form className="flex gap-4 flex-col">
                        <input className="p-3 border rounded w-full "/>
                        <input className="p-3 border rounded w-full "/>
                        <input className="p-3 border rounded w-full "/>
                        <input className="p-3 border rounded w-full "/>
                        <input className="p-3 border rounded w-full "/>
                    </form>
                }
            />
        </div>
    )
}

export default Drawer