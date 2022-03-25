import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';

const ProductList = () => {
	return (
		<section className="ProductList-MainContainer">
			<div className="ProductList">
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</div>
		</section>
	);
}

export default ProductList;
