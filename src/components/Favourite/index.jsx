import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Row, Col, message} from 'antd';
import {getFavourite, deleteFavourite} from '../../appState/actions/favourite';
import BlockQuote from '../../reusableComponents/BlockQuoteFullWidth';

const FavouriteQuote = ({favourite, getFavourite, deleteFavourite}) => {
	useEffect(() => {
    getFavourite();
    if(favourite.isDeleted){
      message.success(favourite.isDeleted);
      getFavourite();
    }
  }, [getFavourite,favourite.isDeleted]);
  
	return (
		<div
			style={{
				margin: '0 auto',
				width: 1280,
				paddingTop: 30
			}}>
			<Row>
				<Col className="gutter-row" span={24}>
					{favourite.allFavourite.length > 0 &&
						Object.values(favourite.allFavourite[0]).map((fav, index) => (
							<BlockQuote
								key={fav.id}
								isLoading={favourite.isLoading}
								quoute={fav.body}
                author={fav.author}
								deleteFavourite={() =>
									deleteFavourite(Object.keys(favourite.allFavourite[0])[index])
								}
							/>
						))}
				</Col>
			</Row>
		</div>
	);
};

const mapState = state => ({
	favourite: state.favouriteReducer
});

const mapDispatch = {
	getFavourite,
	deleteFavourite
};

export default connect(
	mapState,
	mapDispatch
)(FavouriteQuote);
