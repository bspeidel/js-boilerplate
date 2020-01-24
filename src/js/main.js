import Product from './product';
const productList = {
	products: [
		new Product('Pillow', 'circle', 19.99, 'A soft pillow'),
		new Product('Carpet', 'circle', 9.99, 'A great carpet'),
	],
	render() {
		const renderHook = document.getElementById('app');
		const prodList = document.createElement('div');
		prodList.classList = 'product-list';
		for (const prod of this.products) {
			const prodEl = document.createElement('div');
			prodEl.className = 'product-item';
			prodEl.innerHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-img-top"><i class="fas fa-${prod.imageUrl}"></i></div>
        <div class="card-body">
          <h5 class="card-title">${prod.title}</h5>
          <p class="card-text">${prod.description}</p>
        </div>
      </div>
      `;
			prodList.append(prodEl);
		}
		renderHook.append(prodList);
	},
};
productList.render();
