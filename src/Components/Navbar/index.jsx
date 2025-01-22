import GenericInput from '../Generics/Input'
import GenericSelect from '../Generics/Select'
import DateTimePicker from './DateTimePicker'
import Time from './Time'
import { Container, SearchIcon, Section, TimeDiv } from './style'

const Navbar = () => {
    const data = [
        { value: "uzbek", title: "Uzbek" },
        { value: "english", title: "English" },
        { value: "russian", title: "Russian" },
    ]
    return (
        <Container>
            <GenericInput radius={8} fontSize={15} height={40} width={500} iconleft={<SearchIcon />} placeholder={"search"} />
            <Section>
                <Time />
                <DateTimePicker />
                <GenericSelect value='uzbek' data={data} />
            </Section>
        </Container>
    )
}

export default Navbar