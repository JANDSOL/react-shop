import { useState } from 'react';

const initialState = {
  cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		if(!state.cart.includes(payload)){
			setState({
				...state,
				cart: [...state.cart, payload]
			});
		}
	};
	const removeFromCart = (payload) =>{
		const newArray = state.cart.filter(product => product != payload);
		setState({
			...state,
			cart: [...newArray]
		});

	}
	return {
		state,
		addToCart,
		removeFromCart
	}
}

export default useInitialState;
