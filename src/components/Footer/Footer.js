import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <Link to="/t&c" className="footer-link">Terms & Conditions</Link>
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>
        </div>
    )
}