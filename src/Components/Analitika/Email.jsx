import { email } from "../../mock/Email"
import Subtitle from "../Generics/Subtitle"
import { Info, Section, Wrapper } from "./emailStyle"

const Email = () => {
    return (
        <Wrapper>
            {email.map((eml) => {
                return (
                    <Info key={eml.id}>
                        <Section>
                            <Info.Img src={eml.src} />
                            <div>
                                <Subtitle size={14}>{eml.name}</Subtitle>
                                <Subtitle size={12} color={`#929FAF`}>{eml.status}</Subtitle>
                            </div>
                        </Section>
                        <Info.SMS size={14} >{eml.sms}</Info.SMS>
                        <Section end={'true'}>{eml.date}</Section>
                    </Info>
                )
            })}
        </Wrapper>
    )
}

export default Email