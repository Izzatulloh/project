import React from 'react'
import { Arrow, Card, Container, Counter, FooterWrapper, Plus, Section, SubCard, Wrapper } from './style'
import Title from '../Generics/Title'
import Subtitle from '../Generics/Subtitle'
import { media, privateData } from '../../utils/analitics'
import Email from './Email'
import Moliya from './Moliya'
const Analitika = () => {
  return (
    <Container>
      <Title mb={16} type="primary">Analitika</Title>
      {/* Private Data */}
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
                    <Arrow /> <Counter >{value.count}</Counter>
                  </Title>
                  <Img />
                </Section>
              </Card>
            )
          })
        }

      </Wrapper>
      <Subtitle mt={24} mb={16}>Ijtimoiy tarmoqlar</Subtitle>
      {/* Media */}
      <Wrapper gap={16}>
        {
          media.map(value => {
            const { icon: Icon } = value
            return (
              <SubCard key={value.id} title={value.title}>
                {/* Top */}
                <Section title={value.title}>
                  <Subtitle >
                    <Icon className="subIcon" />
                    {value.title}
                  </Subtitle>
                  <Plus title={value.title} />
                </Section>
                {/* Bottom */}
                <Section title={value.title}>
                  <Title color={'#52C41A'} >
                    <Arrow />
                    22%
                  </Title>
                  <Counter >{value.count}K</Counter>
                </Section>
              </SubCard>
            )
          })
        }
      </Wrapper>
      <FooterWrapper>

        <FooterWrapper.Email>
          <Subtitle mt={24} mb={16} count={12}>
            Email habarlari
          </Subtitle>
          <Email/>
        </FooterWrapper.Email>
        <FooterWrapper.Moliya>
          <Subtitle mt={24} mb={16} >
            Moliya
          </Subtitle>
          <Moliya/>
        </FooterWrapper.Moliya>
      </FooterWrapper>
   
    </Container >
  )
}

export default Analitika