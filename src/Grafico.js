import { useState } from "react"


export default function Grafico () {

    const [list, setList] = useState([1,2,3,4])

    const Criar = () => {
        let newList = [...list];
        newList.push(list.length + 1)
        setList(newList)
    }
   
    return(
        <>
        <div>
            <button onClick={Criar}>Adicionar</button>
        </div>
        <ul>
            {list.map((numeros, index)=>(
                <li key={index}>{numeros}</li>
            ))}
        </ul>
        </>
    )
}