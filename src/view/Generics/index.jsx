import { useLocation } from 'react-router-dom'
import { Container } from './style'
import BreadCrumb from '../../Components/Generics/BreadCrumb'

export const Generics = () => {
    const location = useLocation()
    return (
        <>
            <Container>
                <BreadCrumb/>
                <h1>{location.pathname}</h1>
                <h1>Coming soon...</h1>
            </Container>
        </>
    )
}

export default Generics