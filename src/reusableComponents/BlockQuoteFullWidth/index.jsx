import React, {useEffect} from 'react';
import Loading from '../Loading';
import {message, Popconfirm} from 'antd';
import './styles.css';



const index = ({isLoading, quoute, author, deleteFavourite, isDelete=true}) => {

  const confirm = (e) => {
    deleteFavourite()
  }
  
  const cancel = (e) => {
    message.error('Canceled');
  }
  
	return (
		<blockquote>
			{isLoading ? (
				<Loading />
			) : (
				<p>
					<q>{quoute}</q>
				</p>
			)}
			<footer>{!isLoading && author}</footer>
			{isDelete && <Popconfirm
				title="Are you sure delete this quote?"
				onConfirm={confirm}
				onCancel={cancel}
				okText="Yes"
				cancelText="No">
				<button className="delte-button">
					<i className="fa fa-trash" />
				</button>
			</Popconfirm>}
			
		</blockquote>
	);
};

export default index;
