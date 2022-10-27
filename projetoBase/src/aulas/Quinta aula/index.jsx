import './style.scss'
import youtubeImage from './../../assets/images/strangerThings.jpg'
import { QuintaAulaItem } from '../../components/QuintaAulaItem'
export function QuintaAula(){

    const componentsFinded = [
        {
            id:1,
            title: 'Video Component',
            Image: youtubeImage,
            text: 'Lorem ipsum, dolor it.'
        },
        {
            id:2,
            title: 'Input Component',
            Image: youtubeImage,
            text: 'Lorem ipsum, dolor it amet consectetur.'
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