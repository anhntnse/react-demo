const Menu = () => {
    return <>
{/* Our Menu */}
<div className="container">
        <div className="row our-menu-item">
          <h1 className="ourmenu">Our Menu</h1>
          <div className="menu-item spec-item">
            <img src="images/menu1.jpg" alt="Pizza" />
            <div className="spec-tag">SALE</div>
            <div className="item-description">
              <h3>Margherita Pizza</h3>
              <p>
                <del>$40.00</del>{' '}
                <a style={{ color: '#FFA000', fontWeight: 'bold' }}> $24.00 </a>
              </p>
              <button className="buy-button" type="button">Buy</button>
            </div>
          </div>
          <div className="menu-item">
            <img src="images/menu2.jpg" alt="Pizza" />
            <div className="item-description">
              <h3>Mushroom Pizza</h3>
              <p>$25.00</p>
              <button className="buy-button" type="button">Buy</button>
            </div>
          </div>
          <div className="menu-item spec-item">
            <img src="images/menu3.jpg" alt="Pizza" />
            <div className="spec-tag">NEW</div>
            <div className="item-description">
              <h3>Hawaiian Pizza</h3>
              <p>$30.00</p>
              <button className="buy-button" type="button">Buy</button>
            </div>
          </div>
          <div className="menu-item spec-item">
            <img src="images/menu4.jpg" alt="Pizza" />
            <div className="spec-tag">SALE</div>
            <div className="item-description">
              <h3>Pesto Pizza</h3>
              <p>
                <del>$50.00</del>{' '}
                <span style={{ color: '#FFA000', fontWeight: 'bold' }}> $30.00 </span>
              </p>
              <button className="buy-button" type="button">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </>
}
export default Menu;