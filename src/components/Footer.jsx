import logo from '../images/Untitled.png'
function Footer() {
    return (
        <div className="footer-container">
            <img className="footer-logo" src={logo} alt="" />
            <div className="footer-text">
                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered duskam alteration variations of passages</span>
                <div className="footer-logos">
                    logos
                </div>
                <div className="footer-links">
                    <span className="footer-link-el">Trending</span>
                    <span className="footer-link-el">Best Seller</span>
                    <span className="footer-link-el">All Product</span>
                    <span className="footer-link-el">Wishlist</span>
                    <span className="footer-link-el">Blog</span>
                    <span className="footer-link-el">Contact</span>

                </div>
            </div>



        </div>
    )
}
export default Footer