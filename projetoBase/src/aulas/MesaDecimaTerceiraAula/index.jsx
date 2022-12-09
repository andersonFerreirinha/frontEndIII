import { useState } from "react"
import { useEffect } from "react"
import { MesaDecimaTerceiraComponent } from "../../components/MesaDecimaTerceiraComponent"
import "./style.scss"

export function MesaDecimaTerceiraAula() {
  
  const [items, setItems] = useState([
    "Pizza"
  ])
  
  const [mostrar, setMostrar] = useState(false)

  function cancelarPedido(event) {
    event.preventDefault()
    alert("Seu pedido foi cancelado")
    setMostrar(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setMostrar(true)            
    }, 2000)
  }, [])

  return (
    <main className="decimaTerceiraAula">
      <h2>Seu pedido:</h2>
      <h1>
        {
          mostrar &&
          items.map(
            (item, index) => (
              <MesaDecimaTerceiraComponent itemName={item} key={index}/>
            )
          )
        }
      </h1>
      <button type="submit" onClick={(event) => cancelarPedido(event)}>Cancelar pedido</button>
    </main>
  )
}