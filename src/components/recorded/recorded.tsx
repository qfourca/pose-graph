import React, { useState } from 'react'
import videoProps from './recordedProps'

import * as style from './recorded.style'
import icon from "@static/icon/camera.png"


const App = (props: videoProps) => {
    const [video, setVideo] = useState({video: undefined})
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
			{video.video ? (
				<style.videoContainer
					src={video.url}
					ref={props.videoRef}
					muted
					onEnded={() => props.pauseFunc(false)}
				/>
			) : (
				<>
					<label
						htmlFor="videoFileInput"
						style={{
							width: "50%",
							height: "50%",
							borderRadius: "5em",
							cursor: "pointer",
							display: "flex",
							placeContent: "center"
						}}
					>
						<img
							src={icon}
							style={{
								display: "block",
								width: "300px",
								height: "300px",
							}}
						></img>
					</label>
					<input
						type="file"
						onChange={videoUpload}
						style={{ display: "none" }}
						id="videoFileInput"
					/>
				</>
			)}
		</>
	)
}

export default App