import React from 'react';
import {PageHeader, Button} from 'antd';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<PageHeader
        title="Quote App"
        className="page-header"
				extra={[
          <NavLink
						to="/"
						key="4"
            activeClassName="active"
            exact={true}
						className="ant-btn ant-btn-primary">
						Home
					</NavLink>,
					<NavLink
						to="/qod"
						key="3"
            activeClassName="active"
						className="ant-btn ant-btn-primary">
						Quote of the day
					</NavLink>,
					<NavLink
						to="/search"
						activeClassName="active"
						key="2"
						className="ant-btn ant-btn-primary">
						Search
					</NavLink>,
					<NavLink
						to="/favourite"
						activeClassName="active"
						key="1"
						className="ant-btn ant-btn-primary">
						Favourite
					</NavLink>
				]}
			/>
		</div>
	);
};

export default Navigation;
