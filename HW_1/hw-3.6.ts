class Products {
    title: string;
    price: number;
    image: string;

    constructor(title: string, price: number, image: string) {
        this.title = title;
        this.price = price;
        this.image = image;
    }
}

let products: Products[] = [
    new Products(
        'milk',
        22,
        'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    ),
    new Products(
        'juice',
        27,
        'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    ),
    new Products(
        'tomato',
        47,
        'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    ),
    new Products(
        'tea',
        15,
        'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FvSne7T8sTDCoeB3x71ye&w=3840&q=75'
    )
]

for (let i: number = 0; i < products.length; i++) {
    let prod: Products = products[i];
    document.write(`<div class="product-card">
        <h3 class="product-title">${prod.title}. Price - ${prod.price}</h3>
        <img src="${prod.image}" alt="" class="product-image">
</div>`)
}