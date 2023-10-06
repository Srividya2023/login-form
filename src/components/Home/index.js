// Write your JS code here
import './index.css'
import Header from '../Header'
const Home = () => (
  <div className="bg-container">
    <Header />
    <div className="large-flexibility">
      <div className="flexibility">
        <h1 className="clothes-alignment clothes-heading">
          Clothes That Get YOU Noticed
        </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothes-image-small"
        />
        <p className="clothes-alignment clothes-description">
          Fashion is the part of the daily air and it does not quite help that
          it changes all the time. Clothes have always been a marker of the era
          and we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exiciting fashion
          in your own way.
        </p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="clothes-image-large"
      />
    </div>
  </div>
)

export default Home
