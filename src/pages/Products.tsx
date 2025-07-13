const Products = () => {
  return (
    <div id="products-page">
      <header>
        <div className="nav-container">
          <nav>
            <a href="products.html">
              <div className="logo">
                <img
                  src="../public/svgs/shop-store-svgrepo-com.svg"
                  alt="svg logo"
                />
                <div className="text">Store Manager</div>
              </div>
            </a>
            <a href="#" className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </a>
            <ul className="desktop-links">
              <li>
                <a href="products.html">
                  <img
                    src="../public/svgs/product-service-campaign-item-svgrepo-com.svg"
                    alt="dashboard logo"
                  />
                  <div>Products</div>
                </a>
              </li>
              <li>
                <a href="sales-page.html">
                  <img
                    src="../public/svgs/verification-svgrepo-com.svg"
                    alt="dashboard logo"
                  />
                  <div>Sales</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../public/svgs/verification-svgrepo-com.svg"
                    alt="dashboard logo"
                  />
                  <div>Cart</div>
                </a>
              </li>
              <li>
                <a href="users-page.html">
                  <img
                    src="../public/svgs/users-svgrepo-com.svg"
                    alt="dashboard logo"
                  />
                  <div>Users</div>
                </a>
              </li>
            </ul>
            <div className="user-profile">
              <img
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt="user-image"
              />
              <a href="#" className="username">
                <div id="username"></div>
              </a>
              <i
                className="fa fa-caret-down"
                id="dropdown"
                aria-hidden="true"
              ></i>
            </div>
            <button id="logout-btn" className="logout-btn logout-btn-hidden">
              logout
            </button>
          </nav>
        </div>
      </header>
      <div className="mobile-menu-links">
        <div className="user-profile-mobile">
          <img
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt="user-image-mobile"
          />
          <div className="user-div">
            <div id="username-mobile"></div>
            <i
              className="fa fa-caret-down"
              id="dropdown-mobile"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <button id="logout-btn-mobile" className="logout-btn-mobile">
          logout
        </button>
        <ul className="mobile-links">
          <li>
            <a href="products.html">
              <div className="nav-item">
                <img
                  src="../public/svgs/product-service-campaign-item-svgrepo-com.svg"
                  alt="dashboard logo"
                />
                <div>Products</div>
              </div>
            </a>
          </li>
          <li>
            <a href="sales-page.html">
              <div className="nav-item">
                <img
                  src="../public/svgs/verification-svgrepo-com.svg"
                  alt="dashboard logo"
                />
                <div>Sales</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="nav-item">
                <img
                  src="../public/svgs/verification-svgrepo-com.svg"
                  alt="dashboard logo"
                />
                <div>Cart</div>
              </div>
            </a>
          </li>
          <li>
            <a href="users-page.html">
              <div className="nav-item">
                <img
                  src="../public/svgs/users-svgrepo-com.svg"
                  alt="dashboard logo"
                />
                <div>Users</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <section id="products-section">
        <div className="products-container">
          <div className="manage-products">
            <h2>Products</h2>
            <div className="mobile-products">
              {/* <button className="search-btn">
                <img
                  src="../public/svgs/search-svgrepo-com.svg"
                  alt="search-btn"
                />
              </button> */}
              <button className="add-btn" id="add-btn">
                <img src="../public/svgs/plus-svgrepo-com.svg" alt="add-btn" />
              </button>
            </div>
            <div className="desktop-products">
              <form id="search-form-desktop" className="desktop-form">
                <input
                  type="search"
                  id="search-input-desktop"
                  name="search"
                  className="desktop-input"
                  placeholder="Search product"
                />
              </form>
              <button id="add-product">
                Add New Product{" "}
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="mobile-form-container">
            <form id="search-form-mobile" className="mobile-form">
              <input
                type="search"
                id="search-input-desktop"
                name="search"
                className="mobile-input"
                placeholder="Search product"
              />
            </form>
          </div>
          <div className="create-product-wrapper">
            <div
              className="create-product-container"
              id="create-product-container"
            >
              <p className="msg"></p>
              <button className="close-window" id="close-window">
                <img
                  src="../public/svgs/multiply-svgrepo-com.svg"
                  alt="multiply-svgrepo-com"
                />
              </button>
              <form id="create-form">
                <div className="create-form">
                  <input
                    type="text"
                    id="product-name"
                    name="productName"
                    className="mobile-input"
                    placeholder="Product Name"
                  />
                </div>
                <div className="product-description">
                  <textarea
                    // type="text"
                    name="productDescription"
                    id="description-text"
                    className="description-text"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className="price-stock-container">
                  <div className="div-1 price">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="price"
                    />
                  </div>
                  <div className="div-1 stock">
                    <input
                      type="text"
                      name="stock"
                      id="stock"
                      placeholder="stock"
                    />
                  </div>
                </div>
                <div className="flex-container">
                  <button
                    type="submit"
                    id="create-product"
                    className="create-product-btn"
                  >
                    Create Product{" "}
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="products-display-container">
            <div className="products-display">
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
              <a href="product-details-page.html" className="item-anchor">
                <div className="item">
                  <div className="img-div">
                    <img src="../public/images/Nike shoe.jpg" alt="nike shoe" />
                  </div>
                  <div className="info">
                    <h5>Nike Dunk High</h5>
                    <p className="p-small">$130</p>
                    <div className="inventory">
                      <div className="inventory-child">
                        <p className="p-small">stock</p>
                        <h6>975</h6>
                      </div>
                      <div className="inventory-child">
                        <p className="p-small">sold</p>
                        <h6>768</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="card-header">
                      <img
                        src="../public/svgs/rhombus-svgrepo-com.svg"
                        alt="rhombus"
                      />
                      <p className="text-small">productCard</p>
                      <img
                        src="../public/svgs/caret-down-thin-svgrepo-com.svg"
                        alt="caret-down"
                      />
                    </div>
                    <div className="info-container">
                      <div className="info-details">
                        <p className="info-text">productName</p>
                        <p className="info-text">productPrice</p>
                        <p className="info-text">stockTotal</p>
                        <p className="info-text">productSold</p>
                      </div>
                      <div className="info-details">
                        <p className="text-small">Nike Dunk High</p>
                        <p className="text-small">$130</p>
                        <p className="text-small">975</p>
                        <p className="text-small">768</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="test"></div>  */}
      </section>
    </div>
  );
};

export default Products;
