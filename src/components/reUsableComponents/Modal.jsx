

const Modal = ({title="my name", description="My Bio", image=null, open, onClose }) => {
    if(open)
    return (
        <div className=" bg-black bg-opacity-90  fixed top-0 left-0 min-h-screen  w-full  flex justify-center items-center ">
            <div className="bg-white rounded p-8 w-[500px] relative space-y-4 ">
                <button
                    className="absolute top-3 right-4 "
                    onClick={onClose}
                >
                    <i className="ri-close-fill text-lg "></i>
                </button>
                { image && <img src={image} className="h-[150px] w-[150px] rounded-full mx-auto "/>}
                <h1 className="text-3xl font-bold text-center mt-3 "> {title} </h1>
                <p className="text-gray-600 text-justify  ">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Modal