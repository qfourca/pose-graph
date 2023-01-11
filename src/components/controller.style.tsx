import styled from "styled-components";

export const ControllerContainer = styled.div`
    width: calc(100% - 1em);
    height: calc(100% - 1em);
    padding: .5em;
    background-color: #bef1b5;
    border-radius: .5em;
    display: flex;
    gap: 1.5em;
`
export const ButtonContainer = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: .5em;

`
export const ControllerButton = styled.button`
    min-width: 4em;
    max-width: 4em;
    height: 100%;
    font-size: 1.2em;
    background: #00AE68;
    &:hover {
        background: #21825B;
        
    }
    border:none; 
    box-shadow:none; 
    border-radius:.5em;
    cursor:pointer;
    width: 120px;
    padding: 0;
    text-align: center;
    line-height: 50px;
    color: #FFF;
    border-radius: 5px;
    transition: all 0.2s;
    outline: none;
`
export const PauseButton = styled(ControllerButton)`
    background: #FFAA40;
    &:hover {
        background: #FF8E00;
    }

`

export const TimelineContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TimelineOutBackground = styled.div`
    width: 100%;
    height: 1em;
    cursor: pointer;
    transition: 200ms;
    display: flex;
    align-items: center;
    &:hover {
        > span {
            height: 100%;
            > div {
                > span {
                    height: 1.5em;
                    width: 1.5em;
                }
            }
        }
    }

`
export const TimelineBackground = styled.span`
    width: 100%;
    height: 50%;
    background-color: #AAAAAA;
    transition: 200ms;
    border-radius: 1em;
    position: relative;
`
export const TimeLine = styled.div`
    height: 100%;
    background-color: red;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 1em;
`
export const TimeLineBall = styled.span`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    transition: 200ms;
    right: -.5em;
`

export const TimerContainer = styled.div`
    width: 9em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    > h4 {
        margin: 0;
        font-size: 1.1em;
        font-weight: 400;
        color: #111;
    }
    > div {
        width: 100%;
        background-color: #111;
        height: .05em;
    }
`