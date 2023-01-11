import styled from 'styled-components'

export const sliderContainer = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
`
export const partWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`
export const partContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
export const partCheckbox = styled.input`
    display: flex;
    border: 2px solid black;
    outline: none;
    cursor: pointer;
`
export const partText = styled.span`
    font-size: 18px;
`