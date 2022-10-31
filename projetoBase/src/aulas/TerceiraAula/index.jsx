import './style.scss'
import  header from './../../assets/images/header.png'
import  busca from './../../assets/images/busca.png'
import  categorias from './../../assets/images/categorias.png'
import  card from './../../assets/images/card.png'
import  user from './../../assets/images/user.png'
export function TerceiraAula(){

    //const title = 'Teste'
    const components = [
        {name: 'Primeiro Componente', description: 'O header seria um componente', image: header},
        {name: 'Segundo componente', description: 'O campo de busca', image: busca},
        {name: 'Terceiro componente', description: 'As categorias', image: categorias},
        {name: 'Quarto Componente', description: 'Os cards com imagens', image: card},
        {name: 'Quinto componente', description: 'Campo para login do usuário', image: user},
        
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