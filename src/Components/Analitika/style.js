import styled from "styled-components";
import Title from "../Generics/Title";
import arrowUp from "../../assets/icons/arrowUp.svg?react";

const getColor = (title) => {
    switch (title) {
        case "Talabalar":
            return {
                primary: "#52C41A",
                secondary: "#B7EB8F",
                ternarny: "#F6FFED"
            };
        case "Mentorlar":
            return {
                primary: "#FADB14",
                secondary: "#FFE58F",
                ternarny: "#FFFBE6"
            };
        case "Filiallar":
            return {
                primary: "#1890FF",
                secondary: "#91D5FF",
                ternarny: "#E6F7FF"
            };
    }
}

export const Container = styled.div`
padding: 20px 24px;
border-radius: 8px;

`
const Wrapper = styled.div`
display: flex;
gap: ${({ gap }) => (gap && `${gap}px`)};
width: 100%;

`
const Card = styled.div`
display:flex;
flex-direction: column;
flex: 1;
padding: 24px;
padding-bottom: 16px;
gap: 16px;
border: 1px solid #F0F0F0;
border-radius: 8px;
background-color: ${({ title }) => getColor(title)?.ternarny};

`
const Section = styled(Wrapper)`
    gap: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
        padding: 8px;
        border-radius: 6px;
        width: 48px;
        height: 48px;
        background-color: ${({ title }) => getColor(title)?.primary};;
        margin-right: 16px;
        path{
            fill: #fff;
        }
    }
    .subIcon{
        margin-right: 16px;
    }
`
const Plus = styled.div`
    &::before{
        content: "+";
        background-color: ${({ title }) => getColor(title)?.secondary};
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 32px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        box-shadow: 0 0 5px ${({ title }) => getColor(title)?.secondary};
    }
    &:active{
            transform: scale(0.90);
    }
`
const Counter = styled(Title)`
 font-size: 40px;
`

const Arrow = styled(arrowUp)`
width: 24px;
height: 24px;
margin-right: 13px;
`
export { Wrapper, Card, Section, Plus, Counter ,Arrow}
export const SubCard = styled(Card)`
    padding-bottom: 24px;
    border-radius: 8px;
    border: 1px solid rgb(240,240,240);

`