import * as S from './controller.style'
import React from 'react'
const Controller:React.FC<{
    onStartClick: () => void
    onPauseClick: () => void
}> = ({
    onStartClick,
    onPauseClick
}) => {
    return <S.ControllerContainer>
        <S.ControllerButton onClick={onStartClick}>
            시작
        </S.ControllerButton>
        <S.PauseButton onClick={onPauseClick}>
            정지
        </S.PauseButton>
    </S.ControllerContainer>
}

export default Controller