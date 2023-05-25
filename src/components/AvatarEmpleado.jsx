const AvatarEmpleado = ({imagen,fullName}) => {
    return (
        <img src={imagen} alt={fullName} width="70px"/>
    );
};

export default AvatarEmpleado;