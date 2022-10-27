import './style.scss'
import  header from './../../assets/images/header.png'
import  busca from './../../assets/images/busca.png'
import  categorias from './../../assets/images/categorias.png'
export function TerceiraAula(){

    //const title = 'Teste'
    const components = [
        {name: 'Primeiro Componente', description: 'O header seria um componente', image: header},
        {name: 'Segundo componente', description: 'O campo de busca', image: busca},
        {name: 'Terceiro componente', description: 'tAs categorias', image: categorias},
        {name: 'Quarto Componente', description: 'Os cards com imagens seria um componente', image: 'https://occ-0-1360-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608'},
        {name: 'Quinto componente', description: 'Itens de menuO campo para login do usuário seria um componente', image: 'https://m.media-amazon.com/images/I/91NNuqAp73L._AC_SL1500_.jpg'},
        {name: 'Sexto componente', description: 'teste', image: 'https://img.quizur.com/f/img634c5cbcbf1b09.78980887.jpeg?lastEdited=1665948865'}
    ]

    return(
        <main>
            <h1>Lista de componentes</h1>
            <ul>
                {
                    components.map(component => (
                    
                    <li>
                        <h1>{ component.name }</h1>
                        <img src={component.image}/>
                        <p>{ component.description}</p>
                    </li>


                    

                    ))
                }
                

                
            </ul>
        </main>
    )

}