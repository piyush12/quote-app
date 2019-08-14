import React from 'react';
import Loader from 'react-loader-spinner';

const index = ({...rest}) => {
	return (
		<div
			style={{
				position: 'fixed',
				background: 'rgba(0, 0, 0, 0.23)',
				width: '100%',
				height: '100%',
				top: '0',
				left: '0',
				textAlign: 'center',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: '999999'
			}}>
			<Loader
				type="Ball-Triangle"
				color="#00BFFF"
				height="100"
				width="100"
				{...rest}
			/>
		</div>
	);
};

export default index;
