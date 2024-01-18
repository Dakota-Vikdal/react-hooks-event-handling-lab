// Code Keypad Component Here


// function Keypad() {
//     return(
//         <input onChange = {console.log('Entering password...')} type="password" />
//     )
// }

// export default Keypad









function Keypad() {

    function handleChange(event) {
        console.log('Entering password...')
    }

    return (
        <input type="password" onChange={handleChange} placeholder="password..."/>
    )
}

export default Keypad