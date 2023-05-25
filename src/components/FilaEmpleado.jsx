import {Badge,ListGroup} from 'react-bootstrap';
import AvatarEmpleado from './AvatarEmpleado';

const FilaEmpleado = ({empleado}) => {
    const {fullName,department,title,pic} = empleado
    
    return (
        <ListGroup.Item className='d-flex align-items-center'>
            <AvatarEmpleado imagen={empleado.pic} fullName={fullName}/>
            <div className="ms-2">
            <h2>{fullName}</h2>
            <p>{title} <Badge bg="primary" >{department}</Badge></p>
            </div>
        </ListGroup.Item>
    );
};

export default FilaEmpleado;