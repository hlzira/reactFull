import Card from '../../components/card/card'
const Catalog = [
    {
        name:'11111',
        price:'7 270 ₽',
    },
    {
        name:'2222',
        price:'17 270 ₽',
    },
    {
        name:'3333L',
        price:'770 ₽',
    },
    {
        name:'4444',
        price:'70 ₽',
    }
]

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
                {Catalog.map((c) => {
                    return(
                        <Card name={c.name} price={c.price} key={c.name}/>
                    )
                })}
            </div>
        </div>
    </div>
  );
}
