import React from 'react';
import FilaEmpleado from './FilaEmpleado';
import {ListGroup} from 'react-bootstrap';


const ListaEmpleados = () => {
    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://api.multiavatar.com/Sugar%20Crash.png" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://api.multiavatar.com/Choi.png" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://api.multiavatar.com/Broomhilda.png" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://api.multiavatar.com/Battle%20Wooster.png" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://api.multiavatar.com/Victor%20Montoya.png" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://api.multiavatar.com/Spanglinga.png" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://api.multiavatar.com/Lancelot.png" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://api.multiavatar.com/Randall%20Zone.png" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://api.multiavatar.com/Patrick%20Gatsby.png" }      
    ]      
    return (
        <ListGroup className='d-flex'>
            {empleados.map(empleado => 
                <FilaEmpleado key={empleado.id} empleado={empleado} empleados={empleados}/>
            )}
      </ListGroup>
    );
};

export default ListaEmpleados;