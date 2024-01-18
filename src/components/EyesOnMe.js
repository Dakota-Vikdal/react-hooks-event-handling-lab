// Code EyesOnMe Component Here


// function EyesOnMe() {
//     function onBlur(){
//         console.log('Hey! Eyes on me!')
//     }

//     function onFocus(){
//         console.log("Good!")
//     }
//     return(
//         <button onFocus={onBlur} onBlur={onBlur}>Eyes on me</button>
//     )
// }

// export default EyesOnMe







function EyesOnMe() {

    function handleFocus() {
        console.log('He\'s focused!')
    }

    function handleBlur() {
        console.log('He\'s not focused!')
    }

    return (
        
        <button onBlur={handleBlur} onFocus={handleFocus} >Eyese on me</button>
        
    )
}

export default EyesOnMe