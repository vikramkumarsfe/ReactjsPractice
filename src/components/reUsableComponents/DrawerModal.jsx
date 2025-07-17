import { useEffect, useState } from "react"

const DrawerModal = ({open, onClose, title, content, direction}) => {
    const [fadeIn, setFadeIn] = useState('animate__animated animate__fadeIn')

    useEffect(()=>{
        if(open){
            setFadeIn('animate__animated animate__fadeIn')
        }
        else {
            setFadeIn('animte__animated animate__fadeOut')
        }
    },[open])
    if(open && direction==='right')
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 ${fadeIn}`}>
             <div className="bg-white fixed top-0 right-0 h-full w-[450px]  animate__animated animate__slideInRight">
                <div className="p-6 flex justify-between  items-center border-b">
                    <h1 className="text-lg font-semibold"> {title} </h1>
                    <button onClick={onClose}>
                        <i className="ri-close-circle-fill"></i>
                    </button>

                    
                </div>
                <div className="p-6">
                        {content} 
                    </div>
             </div>
        </div>
    )

    if(open && direction==='left')
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 ${fadeIn}`}>
             <div className="bg-white fixed top-0 left-0 h-full w-[450px]  animate__animated animate__slideInLeft">
                <div className="p-6 flex justify-between  items-center border-b">
                    <h1 className="text-lg font-semibold"> {title} </h1>
                    <button onClick={onClose}>
                        <i className="ri-close-circle-fill"></i>
                    </button>

                    
                </div>
                <div className="p-6">
                        {content} 
                    </div>
             </div>
        </div>
    )

    if(open && direction==='top')
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 ${fadeIn}`}>
             <div className="bg-white fixed top-0 h-full w-[450px]  animate__animated animate__slideInDown">
                <div className="p-6 flex justify-between  items-center border-b">
                    <h1 className="text-lg font-semibold"> {title} </h1>
                    <button onClick={onClose}>
                        <i className="ri-close-circle-fill"></i>
                    </button>

                    
                </div>
                <div className="p-6">
                        {content} 
                    </div>
             </div>
        </div>
    )


    if(open && direction==='bottom')
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 ${fadeIn}`}>
             <div className="bg-white fixed top-0 bottom-0 h-full w-[450px]  animate__animated animate__slideInUp">
                <div className="p-6 flex justify-between  items-center border-b">
                    <h1 className="text-lg font-semibold"> {title} </h1>
                    <button onClick={onClose}>
                        <i className="ri-close-circle-fill"></i>
                    </button>

                    
                </div>
                <div className="p-6">
                        {content} 
                    </div>
             </div>
        </div>
    )
}
export default DrawerModal