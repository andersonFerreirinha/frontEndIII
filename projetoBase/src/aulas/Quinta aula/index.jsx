import './style.scss'
import  header from './../../assets/images/header.png'
import  busca from './../../assets/images/busca.png'
import  categorias from './../../assets/images/categorias.png'
import  card from './../../assets/images/card.png'
import  user from './../../assets/images/user.png'
import { QuintaAulaItem } from '../../components/QuintaAulaItem'
export function QuintaAula(){

    const componentsFinded = [
        {
            id:1,
            title: 'Primeiro Componente',
            Image: header,
            text: 'O header seria um componente'
        },
        {
            id:2,
            title: 'Segundo Componente',
            Image: busca,
            text: 'O campo de busca'
        },

        {
            id:3,
            title: 'Terceiro Componente',
            Image: categorias,
            text: 'As categorias'
        },

        {
            id:4,
            title: 'Quarta Componente',
            Image: card,
            text: 'Os cards com imagens'
        },

        {
            id:5,
            title: 'Quinto Componente',
            Image: user,
            text: 'Campo para login do usuário'
        }
    ] 

    

    return(
        
        <div className="quarta-aula-component ">
        
            
            <h1 className='main-title'>Componentes identificados</h1>
                    
           
            <ul className='components-finded'>

                {

                    componentsFinded.map(
                        component => {
                            return(
                                 <QuintaAulaItem 
                                 key={component.id}
                                 item={component}
                                 />
                                 

                            )

                        }
                    )

                }


            </ul>
        </div>
    )
}