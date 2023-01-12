import styled from 'styled-components'

export const mainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    padding: 1em;
`
export const videoContainer = styled.div`
	height: 40rem;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	background-color: #f8ede3;
	border-radius: 0.5em;
	grid-row: 1;
	> video {
		border-radius: 0.5em;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`
export const videoButtonContainer = styled.div`
    position: absolute;
    display: flex;
    gap: 5px;
    left: 5px;
    top: 5px;
`
export const videoTypeButton = styled.button<{videoType: number, turn: number}>`
    padding: 15px;
    background-color: ${({videoType}) => {return videoType === 0 ? '#00AE68' : '#FFAA40'}};
    color: ${({turn, videoType}) => {return turn === videoType ? '#FFFFFF' : '#000000'}};
    border-radius: 0.5em;
    border: none;
    transition: .15s ease-in-out;
    &:hover {
        filter: brightness(80%);
    }
`

export const textLoggerContainer = styled.div`
    
`
export const threeLoggerContainer = styled.div`
    grid-row: 1 / span 2;
`
export const controllerContainer = styled.div`
    grid-column: 1 / span 2;
`
export const graphLoggerContainer = styled.div`
    grid-column: 1 / span 2;
`
