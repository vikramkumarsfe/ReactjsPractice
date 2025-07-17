

const Card = ({title="title", description="description", image=null}) => {
    return (
        <div className=" rounded-lg mx-auto  shadow-lg w-[400px] h-fit">
            <img 
                src={image}
                className="rounded-t-lg h-[300px] mx-auto "
                />
           <div className="p-6 ">
                <h1 className="text-lg font-semibold  text-left"> {title}  </h1>
                <div className="text-gray-500 text-justify mt-1 text-base ">
                    {description}
                </div>

           </div>
        </div>
    )
}

export default Card