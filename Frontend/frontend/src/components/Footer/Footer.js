import React from "react";
import "./footers.css";

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <p className="text-muted">&copy; 2024 FlatRentals Associate Pvt</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <span role="img" aria-label="Email">&#9993;</span> Email: flatrentals@gmail.com
                            </li>
                            <li>
                                <span role="img" aria-label="Phone">&#9990;</span> Phone: 123-0456789
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#" className="text-decoration-none">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="text-decoration-none">FAQs</a>
                            </li>
                            <li>
                                <a href="#" className="text-decoration-none">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
