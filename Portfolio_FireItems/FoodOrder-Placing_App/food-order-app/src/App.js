import React, { useState } from 'react';
import './App.module.css';
import Navbar from './components/Navbar';
import ToastiItem from './components/Toasti_Item';
import SlideMenu from './components/SlideMenu';
import Main from './Pages/Main/Main';
import Footer from './components/Footer';
import styles from './App.module.css';
import Burgers from './Pages/Prod_burgers/Burgers';
import Drinks from './Pages/Prod_drinks/Drinks';
import Cart from './components/Cart';
import CartProvider from './store_context/cartProvider';

export const ModalContext = React.createContext();

function App() {
	const [CartisShown, setCartisShown] = useState(false);
	const showCartHandler = () => {
		setCartisShown(true);
	};
	const hideCartHandler = () => {
		setCartisShown(false);
	};

	return (
		<div className={styles.wrapper}>
			<ToastiItem />
			<CartProvider>
				<div className={styles.App}>
					<ModalContext.Provider
						value={{
							dataState: CartisShown,
							showFunc: showCartHandler,
							hideFunc: hideCartHandler,
						}}
					>
						<Navbar
						// onShowCart={showCartHandler}
						/>
						{CartisShown && <Cart onClose={hideCartHandler} />}
						{/* It doesnt matter where we place the 'Cart' because it is being handled through Portal whose opening has been placed in the HTML file  */}
						<Main />
						{/*}
				<Burgers />
				<Drinks /> */}
						{/* <Footer /> */}
					</ModalContext.Provider>
				</div>
			</CartProvider>

			{/* </div> */}
		</div>
	);
}

export default App;
