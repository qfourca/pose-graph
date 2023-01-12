export default interface videoHook {
    currentTime: number,
    setCurrentTime: (time: number) => void
    isPaused: boolean,
    setIsPaused: (pause: boolean) => void
    rawElement: HTMLVideoElement
}