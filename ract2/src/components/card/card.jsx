import Button from '../button/button'
import Image from '/assets/img/product.png'

export default function Card ({name, price}) {
    return(
        <div className="catalog-product">
            <img src={Image} alt="" className="catalog-product-img"/>
            <p className="catalog-product-name">275/45 R20 PIRELLI P-ZERO LUXURY SALOON 110Y RUN FLAT XL</p>
            <p className="catalog-product-price">7 270 <span className="Rubl">₽</span></p>
            <Button title="Подробнее" />
        </div>
    );
}