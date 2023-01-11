import styled from "styled-components";

export const ControllerContainer = styled.div`
    width: calc(100% - 1em);
    height: calc(100% - 1em);
    padding: .5em;
    background-color: #bef1b5;
    border-radius: .5em;
`
export const ControllerButton = styled.button`
    width: 6em;
    height: 100%;
    font-size: 1.2em;
    background: #00AE68;
    
    &:hover {
        background: #21825B;
        
    }
    position: relative;
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