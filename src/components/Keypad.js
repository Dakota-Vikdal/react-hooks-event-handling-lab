// Code Keypad Component Here



function Keypad (){
    function onChange(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={onChange} type="password" />
        </div>
    )
}

export default Keypad;