import './style.scss'
import  imagem from './../../assets/images/strangerThings.jpg'
export function TerceiraAula(){

    //const title = 'Teste'
    const components = [
        {name: 'Primeiro Componente', description: 'Menu da pagina', image: 'https://occ-0-1360-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608'},
        {name: 'Segundo componente', description: 'Itens de menu', image: 'https://m.media-amazon.com/images/I/91NNuqAp73L._AC_SL1500_.jpg'},
        {name: 'Terceiro componente', description: 'teste', image: 'https://img.quizur.com/f/img634c5cbcbf1b09.78980887.jpeg?lastEdited=1665948865'},
        {name: 'Quarto Componente', description: 'Menu da pagina', image: 'https://occ-0-1360-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608'},
        {name: 'Quinto componente', description: 'Itens de menu', image: 'https://m.media-amazon.com/images/I/91NNuqAp73L._AC_SL1500_.jpg'},
        {name: 'Sexto componente', description: 'teste', image: 'https://img.quizur.com/f/img634c5cbcbf1b09.78980887.jpeg?lastEdited=1665948865'}
    ]

    return(
        <main>
            <h1>Lista de componentes</h1>
            <ul>
                {
                    components.map(component => (
                    
                    <li>
                        <img src={component.image}/>
                        <h1>{ component.name }</h1>
                        <p>{ component.description}</p>
                    </li>


                    

                    ))
                }
                

                
            </ul>
        </main>
    )

}