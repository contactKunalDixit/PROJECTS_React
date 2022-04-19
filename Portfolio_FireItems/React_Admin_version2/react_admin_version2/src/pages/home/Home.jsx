import React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
const Home = () => {
	return (
		<div className='home'>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
		</div>
	);
};

export default Home;
