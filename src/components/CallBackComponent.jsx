import { useCallback, useState } from 'react'
import { Increase } from './Increase'

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    // Guardar una función, memorizarla y no redibujar los elementos que no queremos que vuelvan a dibujarse
    const increaseFather = useCallback(
        (val) => {
        setCounter(value => value + val)
    }, [])
   
    return (
        <>
            <h1>Counter: {counter}</h1>
            <hr />
            <Increase increase={increaseFather}></Increase>
        </>
    )
}