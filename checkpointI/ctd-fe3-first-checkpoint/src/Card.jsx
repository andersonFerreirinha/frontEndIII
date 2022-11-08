//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import './styleCard.scss'
export function Card (props) {
  return (
    <div className="checkpoint-aula-card-cor-component">
            {/* <img src={props.productData.picture} /> */}
            <div className="card-body">
                <h1>{props.colorData.name}</h1>
                <span>{props.colorData.exadecimal}</span>
            </div>
            
        </div>

  )
}