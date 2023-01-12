import React, { useState } from 'react'
import videoProps from './videoProps'


const video = (props: videoProps) => {
    const [video, setVideo] = useState({})
    const videoUpload = (e: any) => {
        const imageType = e.target.files[0].type.includes('image')
        const videoType = e.target.files[0].type.includes('video')

        setVideo({
            url: URL.createObjectURL(e.target.files[0]) as String,
            image: imageType as HTMLImageElement,
            video: videoType as HTMLVideoElement
        })
    }
    return (
        <>
            {
                // @ts-ignore
                !video.video && <input type='file' onChange={videoUpload} style={{justifyContent: 'center'}}/>
            }
            {
                // @ts-ignore
                video.video && <video style={{ objectFit: "none", width: "100%", height: "100%", borderRadius: ".5em"}} src={video.url} ref={props.videoRef} muted onEnded={() => props.pauseFunc(false)} />
            }
        </>
    )
}

export default video