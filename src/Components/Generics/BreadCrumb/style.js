import styled from "styled-components";
import arrow from "../../../assets/icons/rightArrow.svg?react";

const getColor = ({ title }) => {
    switch (title) {
        case "Lidlar": return "#F0F5FF";
        case "Moliya": return "#FFF2E8"
        case "Talabalar": return "#F9F0FF"
        case "Guruhlar": return "#FCFFE6"
        case "Kurslar": return "#E6FFFB"
        case "HR": return "#FFF0F6"
        case "Sozlamalar": return "#FFF2E8"

    }
}
export const Container = styled.div`
border-radius: 8px 8px 0 0;
background-color: ${getColor};
display: flex;
padding: 24px;
gap: 16px;
align-items: center;
margin-bottom: 32px;

`
export const Arrow = styled(arrow)`
display: flex;

`