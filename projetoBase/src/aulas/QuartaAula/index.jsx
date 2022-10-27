import './style.scss'
import youtubeImage from './../../assets/images/strangerThings.jpg'
export function QuartaAula(){

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
        
        <div className="quarta-aula-component">
            <h1 className='main-title'>Componentes identificados</h1>
            <ul className='components-finded'>

                {

                    componentsFinded.map(
                        component => {
                            return(

                                <li key={component.id} >
                                    <img src={component.Image} alt="" />
                                    <h1>{component.title}</h1>
                                    <p>{component.text  }</p>
                                </li>

                            )

                        }
                    )

                }

                <li>
                    <img src={youtubeImage} alt="" />
                    <h1>Vídeo</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam rem, harum aut consequatur nostrum aspernatur doloribus a vitae nam iste repellat sed aliquid accusantium, sapiente magnam quod magni incidunt assumenda?</p>
                </li>

            </ul>
        </div>
    )
}