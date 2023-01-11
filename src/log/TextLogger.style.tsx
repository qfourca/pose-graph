import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1rem;
`
export const ValueContainer = styled.div`
    width: calc(100% - .6em);
    height: calc(100% - .6em);
    background-color: #caede0;
    border-radius: .5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .1em;
    padding: .3em;
`
export const ResultMemberContainer = styled.div`
    width: 49.5%;
    display: flex;
    font-size: 1.2em;
`

export const JointNameContainer = styled.div`
    width: 50%;
    padding: 0.1em 0.3em;
`

export const JointValueContainer = styled.div`
    width: 50%;
    padding: 0.1em 0.3em;
    background-color: blue;
    border-radius: .2em;
`