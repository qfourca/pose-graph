import styled from 'styled-components'

export const LoggerContainer = styled.div`
    padding: .5em;
    border-radius: .5em;
    background-color: #b5e2e7;
`
export const sliderContainer = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
`
export const partWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: .2em;
`
export const partContainer = styled.div<{isFocus: boolean, bkColor: string}>`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 5em;
    background-color: ${({bkColor}) => bkColor};
    border-radius: .5em;
    cursor: pointer;
    padding: .2em;
    > label {
        cursor: pointer;
        padding: .2em;
    }
    outline: ${({isFocus}) => isFocus ? 2 : 0}px solid red;
`
export const partCheckbox = styled.input`
    display: none;
`
export const partText = styled.label`
    font-size: 18px;
`