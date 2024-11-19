import React from 'react'
import { Arrow, Card, Container, Counter, Plus, Section, Wrapper } from './style'
import Title from '../Generics/Title'
import Subtitle from '../Generics/Subtitle'
import { media, privateData } from '../../utils/analitics'
const Analitika = () => {
  return (
    <Container>
      <Title mb={16} type="primary">Analitika</Title>
      <Wrapper gap={24} >
        {
          privateData.map(value => {
            const { icon: Icon } = value
            const { img: Img } = value
            return (
              <Card key={value.id} title={value.title}>
                {/* Top */}
                <Section title={value.title}>
                  <Title >
                    <Icon className="icon" />
                    {value.title}
                  </Title>
                  <Plus title={value.title} />
                </Section>
                {/* Bottom */}
                <Section title={value.title}>
                  <Title >
                    <Arrow  /> <Counter >{value.count}</Counter>
                  </Title>
                  <Img/>
                </Section>
              </Card>
            )
          })
        }

      </Wrapper>
      <Subtitle mt={24} mb={16}>Ijtimoiy tarmoqlar</Subtitle>
      <Wrapper gap={16}>
      {
          media.map(value => {
            const { icon: Icon } = value
            return (
              <Card key={value.id} title={value.title}>
                {/* Top */}
                <Section title={value.title}>
                  <Title >
                    <Icon className="icon" />
                    {value.title}
                  </Title>
                  <Plus title={value.title} />
                </Section>
                {/* Bottom */}
                <Section title={value.title}>
                  <Title >
                    <Arrow  /> <Counter >{value.count}</Counter>
                  </Title>
                </Section>
              </Card>
            )
          })
        }
      </Wrapper>
    </Container >
  )
}

export default Analitika