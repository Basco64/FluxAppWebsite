import React from "react";
import YouTube from "react-youtube";
import { Box } from '@chakra-ui/react'

export default class Setup6
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
			<Box my='1.5rem'>
				<YouTube
					videoId="FITPHv52Fyo"
					opts={opts}
				/>
			</Box>
		);
	}

	_onReady(event) {
		event.target.pauseVideo();
	}
}
