import './Use.css'
import { Counter } from "../../../components/Counter";


export function UseState() {

  return (
    <div className='item-wrapper'>
      <h2 className='valueText'>Uso de State</h2>
      <ul>
          <Counter />
      </ul>
    </div>

  )
}