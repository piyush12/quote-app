import React from 'react';
import {Input} from 'antd';
import {connect} from 'react-redux';
import Loader from '../../reusableComponents/GlobalLoader';
import {getSearchData, clearSearchData} from '../../appState/actions/search';
import Blockquote from '../../reusableComponents/BlockQuoteFullWidth';
import shortId from 'shortid';

const {Search} = Input;

class SearchQuoute extends React.Component {
	state = {
		searchText: ''
	};

	searchQuote = async () => {
		const data = `?filter=${this.state.searchText}`;
		await this.props.getSearchData(data);
		this.setState({
			searchText: ''
		});
	};

	onChange = e => {
		this.setState({
			searchText: e.target.value
		});
	};

	componentWillUnmount() {
		this.props.clearSearchData();
	}

	render() {
		const {searchData, loading} = this.props;
		return (
			<div
				style={{
					margin: '0 auto',
					width: 1280,
					paddingTop: 30
				}}>
				<Search
					placeholder="Search Quote..."
					enterButton="Search"
					size="large"
					onSearch={value => this.searchQuote(value)}
					value={this.state.searchText}
          onChange={this.onChange}
          style={{
            marginBottom:20
          }}
				/>
				<div className="clearfix" />
				{loading && <Loader color="#096dd9" />}

				{searchData !== null &&
					searchData.map(quote => (
						<Blockquote
							key={shortId.generate()}
							loading={loading}
							quoute={quote.body}
							author={quote.author}
							isDelete={false}
						/>
					))}
			</div>
		);
	}
}

const mapState = ({searchReducer}) => ({
	searchData: searchReducer.searchData,
	loading: searchReducer.isLoading
});

const mapDispatch = {
	getSearchData: getSearchData,
	clearSearchData: clearSearchData
};

export default connect(
	mapState,
	mapDispatch
)(SearchQuoute);
