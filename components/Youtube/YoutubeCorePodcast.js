import React from "react";
import YouTube from "react-youtube";
import styles from './youtube.module.css'

export default class YoutubeCorePodcast
	extends React.Component {
	render() {
		const opts = {
			width: "640",
			height: "360",
			playerVars: {
				autoplay: 0,
			},
		};

		return (
			<div className={styles.video}>
				<YouTube
					videoId="NqLz7_mZjkk"
					opts={opts}
				/>
			</div>
		);
	}

	_onReady(event) {
		event.target.pauseVideo();
	}
}
