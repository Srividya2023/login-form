// Write your JS code here

import './index.css'

const Header = () => (
  <>
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-website-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-logout"
      />

      <ul className="large-list">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>
          <button className="logout-btn"> Logout</button>
        </li>
      </ul>
    </div>
    <div className="small-header-part2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="small-header-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="small-header-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="small-header-image"
      />
    </div>
  </>
)

export default Header
