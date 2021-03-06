import React, { useState } from 'react';
import Banner from './Banner';
import ChickenBurgerCarousel from './ChickenBurgerCarousel';
import CocktailsCarousel from './CocktailsCarousel';
import GermanBeerCarousel from './GermanBeerCarousel';
import styles from './main.module.css';
import SaladsCarousel from './SaladsCarousel';

const Main = () => {
	return (
		<main className={styles.Main}>
			<div className={styles.wrapper}>
				<div className={styles.BigScreen}>
					<h1>
						The website is purely targeted towards Mobile users and can be best
						experienced on Mobile devices
					</h1>
				</div>
				<Banner />
				<GermanBeerCarousel />
				<ChickenBurgerCarousel />
				<CocktailsCarousel />
				<SaladsCarousel />
			</div>
		</main>
	);
};
export default Main;
