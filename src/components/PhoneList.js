import React from 'react'

export const PhoneList = ({ state }) => {


    return (
        <div>
            <h1>PhoneList</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Celular</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map( sta => (
                            <tr key={sta.id}>
                                <td>{sta.name}</td>
                                <td>{sta.lastName}</td>
                                <td>{sta.phone}</td>
                            </tr>   
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
