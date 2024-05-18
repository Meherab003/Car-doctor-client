import img6 from '../../../assets/images/products/6.png';
import img5 from '../../../assets/images/products/5.png';
import img4 from '../../../assets/images/products/4.png';
import img3 from '../../../assets/images/products/3.png';
import img2 from '../../../assets/images/products/2.png';
import img1 from '../../../assets/images/products/1.png';

import ProductCard from "./ProductCard";

const PopularProduct = () => {
    const products = [
        {
            "_id": "06",
            "img": img6,
            "name": "Car Engine Plug",
            "price": '$20.00'
        },
        {
            "_id": "03",
            "img": img3,
            "name": "Car Air Filter",
            "price": '$20.00'
        },
        {
            "_id": "01",
            "img": img1,
            "name": "Cools Led Light",
            "price": '$20.00'
        },
        {
            "_id": "02",
            "img": img2,
            "name": "Cools Led Light",
            "price": '$20.00'
        },
        {
            "_id": "05",
            "img": img5,
            "name": "Cools Led Light",
            "price": '$20.00'
        },
        {
            "_id": "04",
            "img": img4,
            "name": "Cools Led Light",
            "price": '$20.00'
        },
    ]
    return (
        <div className="flex flex-col gap-10 items-center">
            <div className="text-center flex flex-col gap-5">
                <h3 className="text-lg text-primary font-bold">Popular Products</h3>
                <h2 className="text-5xl font-bold text-black">Browse Our Products</h2>
                <p className="text-gray-600 w-2/3 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomized words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            <button className="btn btn-outline md:w-1/5 items-center text-primary hover:bg-[var(--prime)] hover:border-[var(--prime)]">More Products</button>
        </div>
    );
};

export default PopularProduct;