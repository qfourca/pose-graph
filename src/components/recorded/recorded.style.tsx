import styled from 'styled-components'

export const videoContainer = styled.video`
    width: 80%;
    height: 80%;
    border-radius: .5em;
    object-fit: none;
`

export const Container = styled.div`
    width: 50%;
    height: 100%;
    > label {
        display: block;
        width: 100%;
        height: 100%;
        background-color: red;
    }
`