import React, { useState } from 'react'
import { Fragment, ArrowIcon, Wrapper, Section, DateCard } from './moliyaStyle'
import Subtitle from '../Generics/Subtitle'
import useDate, { weeks } from './../../hooks/date';

const Moliya = () => {
  const date = useDate()
  const [active, setActive] = useState(new Date().getDate())
  const [weekCount, setWeekCount] = useState(0)

  const onClickDate = (value) => {
    setActive(value.getDate())
    if (date.week(weekCount)[0]?.getDate() == value.getDate()) {
      setWeekCount(weekCount-1)
    }
    else if (date.week(weekCount)[6]?.getDate() == value.getDate()) {
      setWeekCount(weekCount+1)
    }
  }
  const onClickForward = ()=>{
    setWeekCount(weekCount+6)
  }
  const onClickBackward = ()=>{
    setWeekCount(weekCount-6)
  }
  return (
    <Wrapper>
      <Fragment >
        <ArrowIcon left="true" onClick={onClickForward}/>
        <Subtitle>{date.month.full} {date.year}</Subtitle>
        <ArrowIcon  onClick={onClickBackward}/>
      </Fragment>
      <Fragment mt={16} mb={16}>
        {date.week(weekCount).map((value, i) => {
          const ac = active == value.getDate()
          return (
            <DateCard active={ac ? "true" : undefined} key={i} onClick={() => onClickDate(value)}>
              <Subtitle color={ac ? '#fff' : '#929FAF'} size={12}>{weeks[value.getDay()].short}</Subtitle>
              <Subtitle color={ac ? '#fff' : undefined} size={14}>{value.getDate()}</Subtitle>
            </DateCard>
          )
        })}
      </Fragment>
      <Subtitle color="#929FAF">{date.date}-{date.month.full}, {date.year}</Subtitle>
      <Subtitle size={32} mt={5} mb={16}>8 520 000 <Subtitle color={"#52C41A"} size={24} ml={16}>+22%</Subtitle></Subtitle>
        <Fragment mb={8}>
          <div>Talabalar</div>
          <Subtitle>5 760 000</Subtitle>
        </Fragment>
        <Fragment mb={8}>
          <div>Darsliklar sotuvi</div>
          <Subtitle>2 180 000</Subtitle>
        </Fragment>
    </Wrapper>
  )
}

export default Moliya