import Button from '../button/button'
import Image from '/assets/img/product.png'

export default function Card ({name, price}) {
    return(
        <div className="catalog-product">
            <img src={Image} alt="" className="catalog-product-img"/>
            <p className="catalog-product-name">{name}</p>
            <p className="catalog-product-price">{price}</p>
            <Button title="Подробнее" />
        </div>
    );
}