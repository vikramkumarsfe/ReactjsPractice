import { useRef } from "react"

const Ref = () => {
    const input = useRef(null)
    const heading = useRef(null)
    const handleinput = (e) => {
        const value = input.current.value 
        heading.current.innerHTML = value
    }

    return (
        <div className=" p-16 ">
            <input
                placeholder="write something ......"
                onChange={handleinput}
                ref={input}
            />
            <h1 ref={heading}> </h1>
        </div>
    )
}

export default Ref