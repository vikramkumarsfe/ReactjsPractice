import { useRef, useState } from "react"


const RadnomPassword = () => {
    const el = useRef(null)
    const [copy, setCopy] = useState(null)
    const [value,setValue] = useState(8)
    const [newPassword, setNewPassword] = useState(null)

    const generatePassword = (e) => {
        e.preventDefault()
        let password = ''
        const pattern = "Zx%$p6|&Y<v_@7rMkF{g~Bd]E4o!3nJPc9QG>2A?yT[D=ei*KL,WbhzmuVa#:lNf1HROUs+X`0j^(5)8.;/C"
        for ( let i = 0; i<=value; i++)
        {
            const randomNumber = Math.floor(Math.random()*pattern.length)
            password = password + pattern[randomNumber]
        }
        setNewPassword(password)
    }

    const copyPassword = () => {
        const input = el.current
        input.select()
        navigator.clipboard.writeText(input.value)
        setCopy(true)

        setTimeout(()=>{
            setCopy(false)
            input.value = "";
        }, 3000 )
    }
    return (
        <div className=" flex items-center justify-center h-screen bg-zinc-100">
            <div className="bg-white rounded-lg shadow-lg p-8 w-[450px]">
                <h1 className="text-5xl font-bold"> CodingOtt</h1>
                <p className="text-base text-center mt-3 mb-12"> Random Password generator</p>
                <form 
                    onSubmit={generatePassword}
                    className="flex flex-col gap-8">
                    <input
                        className=" border p-3 border-gray-300 rounded"
                        placeholder="enter password length"
                        name="length"
                        type="number"
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                    />

                    <button 
                        className="bg-indigo-600 py-3 px-8 text-lg font-sm rounded "
                        > Generate 
                    </button>
                </form>

                {
                    newPassword && 
                    <div className=" mt-6 bg-rose-200 p-3 rounded-lg flex justify-between  ">
                        <input
                            value={newPassword}
                            className="bg-transparent focus:outline-none"
                            readOnly
                            ref={el}
                        />
                        <div>
                            <button onClick={copyPassword}
                                className="mr-2 "
                            >

                                {
                                    copy ? 
                                    <i className="ri-check-double-fill"></i> 
                                    :
                                    <i className="ri-file-copy-line text-black"></i>

                                    
                                }
                            </button>

                            <button
                                onClick={() => setNewPassword(false)}
                            >
                                <i className="ri-close-circle-line"></i>
                            </button>    
                        </div>
                </div>
                }

                {
                    (copy && newPassword)  &&
                    <p className="text-center mt-2 text-blue-300 font-sm text-lg"> Copied! </p>
                }
            </div>
        </div>
    )
}

export default RadnomPassword