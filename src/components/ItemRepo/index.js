import React from 'react';

import { ItemContainer } from './styles';

function ItemRepo() {
	return(
		<ItemContainer>
			<h3>Italo</h3>
			<p>dio/italo</p>
			<a href="#" className="remover">Remover</a>
			<hr />
		</ItemContainer>
	);
}

export default ItemRepo;