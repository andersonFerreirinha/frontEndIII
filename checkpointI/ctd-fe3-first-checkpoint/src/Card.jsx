//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import './styleCard.scss'


export function Card (props) {
  const fundo = {
    "background-color": props.colorData.exadecimal
  };
  return (
    
    <div className="checkpoint-aula-card-cor-component">
            <div className="card-body" style= {fundo}>
                <h1>{props.colorData.name}</h1>
                <span>{props.colorData.exadecimal}</span>
            </div>
            
        </div>

  )
}