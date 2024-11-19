document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const categoryTitle = document.getElementById('categoryTitle');
    const productList = document.getElementById('productList');

    // Debugging: Check if category is retrieved correctly
    console.log('Category:', category);

    // Set the category title
    categoryTitle.innerText = category;

    // Example products (with images)
    const products = [
        { name: 'Elegant White Curtains', description: 'A beautiful set of elegant white curtains.', category: 'Deals in Curtains', image: 'curtain1.jpg' },
        { name: 'Modern Grey Curtains', description: 'Stylish modern grey curtains for your living room.', category: 'Deals in Curtains', image: 'curtain2.jpg' },
        { name: 'Luxury Blackout Curtains', description: 'High-quality blackout curtains for complete darkness.', category: 'Deals in Curtains', image: 'curtain3.jpg' },
        { name: 'Floral Pattern Curtains', description: 'Lovely floral pattern curtains to brighten up your space.', category: 'Deals in Curtains', image: 'curtain4.jpg' },
    ];

    // Filter products based on the category
    const filteredProducts = products.filter(product => product.category === category);
    
    // Debugging: Check filtered products
    console.log('Filtered Products:', filteredProducts);

    // Display products
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
        `;
        productList.appendChild(productItem);
    });

    // If no products found, show a message
    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p>No products found in this category.</p>';
    }
});