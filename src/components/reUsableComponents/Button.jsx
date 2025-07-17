
const Button = ({children , color="primary", ...rest}) => {
    
    if(color=="primary")
    return(
        <button 
            className=" bg-blue-500 px-12 py-3 rounded text-base font-medium text-white "
            {...rest}
        >
            {children}
        </button>
    )

    if(color=="info")
    return(
        <button 
            className=" bg-green-400 px-12 py-3 rounded text-base font-medium text-white "
            {...rest}   
        >
            {children}
        </button>
    )

    if(color=="warning")
    return(
        <button 
            className=" bg-orange-500 px-12 py-3 rounded text-base font-medium text-white "
            {...rest}    
        >
            {children}
        </button>
    )

    if(color=="error")
    return(
        <button 
            className="bg-rose-600 px-12 py-3 rounded text-base font-medium text-white "
            {...rest}   
        >
            {children}
        </button>
    )
}

export default Button