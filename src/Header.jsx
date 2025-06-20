
function Header() {

    return (
        <>
        <div className="app-link">
        <div className="app-link-img1">
          <img src="img/times.png" alt="Jumia" />
        </div>

        <div className="app-link-img">
          <img src="img/App-link.png" alt="Jumia" />
          <span>
            <h4>Shop on the Jumia App</h4>
            <h4>Free on Play Store</h4>
          </span>
        </div>

        <div className="open-button">
          <button>OPEN</button>
        </div>
      </div>

      <div className="top-gif">
        <img src="img/free-delivery-Mobile-strip.gif" alt="Jumia" />
      </div>

      <div className="head-background">
        <div className="top-head">
          <div className="nav-menu">
            <i className="fa fa-bars"></i>
            <img src="img/logo.png" alt="Jumia" />
          </div>

          <div className="right-icons">
            <i className="fa-regular fa-user"></i>
            <i className="fa fa-cart-plus"></i>
          </div>
        </div>

        <div className="search">
          <form action="search.php" method="POST">
            <i className="fa fa-search"></i>
            <input
              type="search"
              name="q"
              placeholder="Search products, brands and categories"
            />
          </form>
        </div>
      </div>
        </>
    )
}

export default Header