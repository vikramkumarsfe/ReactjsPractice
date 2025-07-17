import { useState } from "react"
import Button from "./reUsableComponents/Button"


const ColorGenerator = () => {

    const [color, setColor] = useState({
        red : 255,
        green : 255,
        blue: 255,
    })

    const changeColor = () => {
        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)

        setColor({
            red,
            green,
            blue
        })
    }
    return (
        <div style={{
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            height : '100vh',
            background: `rgb(${color.red},${color.green},${color.blue})`
,

        }}>
           <button style={{
                background: 'red',
                padding : '15px 24px',
                cursor : 'pointer',
                borderRadius : '5%',
                fontSize : '24px',
                fontWeight : "bold",
           }}
            onClick={changeColor}
           > Try it!</button> 

           <Button color="warning"  onClick={changeColor}>  Try it! </Button>
        </div>
    )
}

export default ColorGenerator