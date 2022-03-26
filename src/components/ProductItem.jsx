import React, { useState, useContext } from 'react';
import '@styles/ProductItem.scss';
import BtAddToCart from '@icons/bt_add_to_cart.svg';
import BtRemoveToCart from '@icons/bt_remove_to_cart.svg';
import AppContext from '@context/AppContext';

const ProductItem = ({ product }) => {
	const { addToCart, removeFromCart } = useContext(AppContext);
	const [addedToCart, setAddedToCart] = useState(false);

	const handleAdd = item => {
		addToCart(item);
		setAddedToCart(true);
	}
	const handleRemove= item => {
		removeFromCart(item);
		setAddedToCart(false);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="ProductItem-product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{!addedToCart ?
				<figure onClick={() => handleAdd(product)} >
					<img src={BtAddToCart} alt="" />
				</figure>
				:
				<figure onClick={() => handleRemove(product)} >
					<img src={BtRemoveToCart} alt="" />
				</figure>
				}
			</div>
		</div>
	);
}

export default ProductItem;
