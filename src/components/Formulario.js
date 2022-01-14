import React, { useReducer } from 'react'
import { bookReducer } from '../Hooks/bookReducer';
import { useForm } from '../Hooks/useForm';
import { PhoneList } from './PhoneList';

export const Formulario = () => {
    
    const initialState = [
        {
            id: new Date().getTime(),
            name: 'Jose Luis',
            lastName: 'Gomez',
            phone: '7444292283',
        },
    ]


    const [state, dispatch] = useReducer(bookReducer, initialState)

    const[ formValues, handleInputChange, reset ]=useForm({
        nombre: '',
        apellido: '',
        celular: '',
    });

    const{ nombre,apellido, celular }=formValues;
    


    const handleSubmit = (e) => {
        e.preventDefault();

        const newInput={
            id: new Date().getTime(),
            name: nombre,
            lastName: apellido,
            phone: celular,
        }

        const action = {
            type: 'add',
            payload: newInput
        }
        dispatch(action)
        reset();
    }


    
    return (
        <div className="contenedor">
            <h1 id="encabezado">PhoneBook by JLGM</h1>
            <div className="d-flex">
                <div>
                    <h1>Formulario</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="formulario">
                            <label htmlFor="nombre">Nombre<span>*</span></label>
                            <input id="nombre" type="text" value={nombre}
                            name="nombre"
                            onChange={handleInputChange}
                            placeholder="Escribe tu Nombre"/>
                        </div>
                        <div className="formulario">
                            <label htmlFor="apellido">Apellido<span>*</span></label>
                            <input id="apellido" type="text" value={apellido}
                            onChange={handleInputChange}
                            name="apellido"
                            placeholder="Escribe tu Apellido"/>
                        </div>
                        <div className="formulario">
                            <label htmlFor="cell">Celular<span>*</span></label>
                            <input id="cell" type="text" value={celular}
                            name="celular"
                            onChange={handleInputChange}
                            placeholder="Escribe tu Numero de Celular"/>
                        </div>
                        <input type="submit" value="Guardar"/>
                    </form>
                </div>
                <PhoneList
                    state={state}
                />
            </div>

        </div>
    )
}
