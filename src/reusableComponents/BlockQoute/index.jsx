import React from 'react';
import Loading from '../Loading';
import './styles.css';

const BlockQuote = ({center, quoute, author, isLoading}) => {
	return (
		<div
			className="mb-wrap mb-style-3"
			style={{
				margin: center && '0 auto'
			}}>
			<blockquote>
				{isLoading ? (
					<div style={{textAlign: 'center'}}>
						<Loading style={{textAlign: 'center'}} />
					</div>
				) : (
					<p>{quoute}</p>
				)}
			</blockquote>
			<div className="mb-attribution">
				<p className="mb-author">{isLoading ? null : author}</p>
			</div>
		</div>
	);
};

export default BlockQuote;
