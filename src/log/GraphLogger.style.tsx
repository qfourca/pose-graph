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
    gap: .3em;
`
export const partContainer = styled.div<{isFocus: boolean, bkColor: string}>`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 5em;
    background-color: ${({bkColor}) => bkColor};
    border-radius: .5em;
    cursor: pointer;
    height: 3em;
    width: 100%;
    > label {
        width: 100%;
        cursor: pointer;
        padding: .2em;
        font-size: .9em;
        color: #EEE;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    outline: ${({isFocus}) => isFocus ? 3 : 0}px solid #222;
`
export const partCheckbox = styled.input`
    display: none;
`
export const partText = styled.label`
    font-size: 18px;
    width: 100%;
    height: 100%;
`