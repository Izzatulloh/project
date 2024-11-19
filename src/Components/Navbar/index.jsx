import GenericInput from '../Generics/Input'
import DateTimePicker from './DateTimePicker'
import GenericSelect from './GenericSelect'
import Time from './Time'
import { Container, SearchIcon, Section, TimeDiv } from './style'

const Navbar = () => {
    return (
        <Container>
            <GenericInput radius={8} fontSize={15} height={40} width={500} iconleft={<SearchIcon />} placeholder={"search"} />
            <Section>
                <Time />
                <DateTimePicker />
                <GenericSelect />
            </Section>
        </Container>
    )
}

export default Navbar