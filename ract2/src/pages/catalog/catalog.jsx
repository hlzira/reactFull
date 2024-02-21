import Card from '../../components/card/card'
import {Catalog} from '../../data'

export default function catalog() {
  return (
    <div className="catalog">
        <h1 className="catalog-title">Каталог</h1>
        <div className="container">
            <div className="catalog-filtr">
                <a href="" className="catalog-filtr-link">Все</a>
                <a href="" className="catalog-filtr-link">Шины/колеса</a>
                <a href="" className="catalog-filtr-link">Масла</a>
                <a href="" className="catalog-filtr-link">Ароматизаторы</a>
            </div>
            <div className="catalog-products">
                {Catalog.map((card, index) => {
                    return(
                        <Card key={index} {...card}/>
                    )
                })}
            </div>
        </div>
    </div>
  );
}
