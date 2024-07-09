export function addProduct(product) {
	return new Promise(async (resolve) => {
		const response = await fetch(`http://localhost:4000/products`, {
			method: "POST",
			body: JSON.stringify(product),
			headers: {"content-type": "application/json"},
		});
		const data = await response.json();
		resolve({data});
	});
}

export function updateProduct(product) {
	return new Promise(async (resolve) => {
		const response = await fetch(
			`http://localhost:4000/products/${product.id}`,
			{
				method: "PATCH",
				body: JSON.stringify(product),
				headers: {"content-type": "application/json"},
			}
		);
		const data = await response.json();
		resolve({data});
	});
}

export function deleteProduct(product) {
	return new Promise(async (resolve) => {
		const response = await fetch(
			`http://localhost:4000/products/${product.id}`,
			{
				method: "PUT",
				body: {deleted: true},
				headers: {"content-type": "application/json"},
			}
		);
		const data = await response.json();
		resolve({data});
	});
}
