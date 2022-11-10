import { useState } from 'react'
import {Card} from "../src/Card"
import './style.scss'

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState('')
  const [exadecimalCor, setExadecimalCor] = useState('')
  const [formularioErro, setFormularioErro] = useState(false)
  const [allColors, setAllCor] = useState([
      
  ])

  

  function cadastrarCor(event) {

    event.preventDefault()

    const novaCorCadastrada = {
        name: nomeCor.trim(),
        exadecimal: exadecimalCor.trim(),
    }



    if (nomeCor === '' || exadecimalCor === '' || nomeCor.length < 3 || exadecimalCor.length < 6 ) {

        setFormularioErro(true)

    } else {

        setFormularioErro(false)

        setAllCor([...allColors, novaCorCadastrada])
        setNomeCor('')
        setExadecimalCor('')
      

    }

   

  }

  return (
    <main className= "checkpoint-aula-component">

            <div className="tittle-wrapper">
                
                
            </div>

            <form className={formularioErro ? 'form-error' : ''} onSubmit={event => cadastrarCor(event)}>
            <h1>Cores</h1>
                <div>
                    
                    <label htmlFor="nomeCor">Nome</label>
                    <input id="nomeCor" type="text" value={nomeCor} onChange={event => setNomeCor(event.target.value)} />

                    <label htmlFor="exadecimalCor">Exadecimal</label>
                    <input className='input-color' id="exadecimalCor" type="color" value={exadecimalCor} onChange={event => setExadecimalCor(event.target.value)} />
                </div>               
                
                <button type='submit'>Cadastrar Cor</button>
               

            </form>
            
            {
                formularioErro ? (
                    <span> Por favor, verifique os dados inseridos no formulário</span>
                ) : null
            }

            <h1>Cores Favoritas</h1>

            <section className='colors'>
                {
                    allColors.map(
                        color => {
                            return (
                                <Card
                                    colorData={color}
                                />
                            )
                        }
                    )
                }
            </section>

        </main>

  )
}

export default App