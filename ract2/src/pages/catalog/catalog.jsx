import Card from '../../components/card/card'

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
                    <Card name="275/45 R20 PIRELLI P-ZERO LUXURY SALOON 110Y RUN FLAT XL" price="7 270 ₽" />
                    <Card name="275/45 R20 PIRELLI P-ZERO LUXURY SALOON 110Y RUN FLAT XL" price="7 270 ₽" />
                    <Card name="275/45 R20 PIRELLI P-ZERO LUXURY SALOON 110Y RUN FLAT XL" price="7 270 ₽" />
            </div>
        </div>
    </div>
  );
}
