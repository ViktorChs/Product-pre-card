export function Card() {
    return(
<div className="Main_card-container">
<div className="Main_img-container">
<img src="./src/images/image-product-mobile.jpg" alt="essence" />
<img src="./src/images/image-product-desktop.jpg" alt="essence" />

</div>
<div className="Main_text-container">
<p><span>PERFUME</span></p>
<h3>Gabrielle Essence Eau De Parfum</h3>
<p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>
  <div className="Main_price-container">
  <p>$149.99</p>
  <p>$169.99</p>
  </div>
  
  <button className="Bts_add-to-cart"><img src="./src/images/icon-cart.svg" alt="cart icont"/><strong>Add to Cart</strong></button>
</div>


</div>
    )
}
