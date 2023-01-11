import styled from 'styled-components'

export const LoggerContainer = styled.div`
    padding: .5em;
    border-radius: .5em;
    background-color: #F8EDE3;
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
    padding: 1em .3em;
    display: flex;
    justify-content: center;
    align-items: center;
    > label {
        width: 100%;
        cursor: pointer;
        padding: .2em;
        font-size: .9em;
    }
    outline: ${({isFocus}) => isFocus ? 2 : 0}px solid red;
`
export const partCheckbox = styled.input`
    display: none;
`
export const partText = styled.label`
    font-size: 18px;
`