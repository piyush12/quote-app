import React, {useEffect, useState} from 'react';
import Loading from '../../reusableComponents/Loading';
import BlockQuote from '../../reusableComponents/BlockQoute';

const QuoteOfTheDay = ({
	getQOD,
	quote,
	addFavourite,
	favourite,
	getFavourite
}) => {

	const [disableFav, setDisable] = useState(false)
	
	useEffect(() => {
		getQOD();
		getFavourite();
	}, [quote.favClicked]);

	const {body, author, id} = quote.quote;
	let getAllFavID = [];
	if (favourite.allFavourite.length > 0) {
		getAllFavID = Object.values(favourite.allFavourite[0]).map(fav => fav.id);
	}

	const addFav = (quote) => {
		addFavourite(quote);
		setDisable(true)
	}

	const getQuoute = () => {
		getQOD();
		setDisable(false)
	}

	return (
		<div style={{background: '#ECECEC', padding: '30px'}}>
			<BlockQuote
				center={true}
				isLoading={quote.isLoading}
				quoute={body}
				author={author}
			/>
			<div className="button-holder">
				<button
					onClick={() => addFav(quote.quote)}
					disabled={disableFav || getAllFavID.includes(parseInt(id))}>
					{favourite.isLoading ? (
						<Loading />
					) : (
						<i className="fa fa-heart fa-inverse" />
					)}
				</button>
				<button onClick={() => getQuoute()}>
					<i className="fa fa-refresh fa-inverse" />
				</button>
			</div>
		</div>
	);
};

export default QuoteOfTheDay;
