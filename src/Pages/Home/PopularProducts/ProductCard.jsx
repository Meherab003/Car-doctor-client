const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-2xl">
            <div className="p-5">
                <img className="rounded-xl md:h-52 w-full" src={product.img} alt="" />
            </div>
            <div className="flex flex-col items-center gap-2 pb-5">
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                </div>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-lg font-semibold text-primary">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;