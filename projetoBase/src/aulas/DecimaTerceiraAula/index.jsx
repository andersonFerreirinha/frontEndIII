import { useState, useEffect } from "react"

export function DecimaTerceiraAula(){

    // hook
    const [contador, setContador] = useState(0);
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState(false)
    const[errorForm, setErrorForm] = useState(false)

    function adicionar (){

        setContador(contador + 1)



    }

    function validar(){
        
        setErrorForm(!errorForm)
         
    }

    // useEffect(() => {
    //     console.log(userName)

    //     if(userName.length > 10){

    //         setUserNameError(true)
    //     } else{
    //         setUserNameError(false)
    //     }

    // },[userName])

    useEffect(() => {
        
        if(errorForm){

            console.log('existe um erro')

        } else{
            console.log('não existe um erro')
        }

    },[errorForm])
    

    

    return(

        <>
            <h1>Teste</h1>
            <input type="text" value={userName} onChange={event => setUserName(event.target.value)} />
            { userNameError ? (<small>O campo não tem mais que 10 caracteres</small>) : null}
            <p>O valor do contador é {contador}</p>
            <button onClick={() => adicionar()}>Atualizar contador</button>

        </>

    )


}