import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import MainIcon from "../Icon/MainIcon";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-base-content ">
      {/* Branding */}
      <aside>
        <MainIcon/>
        
        <p>
          Browse, manage & organize your favorite movies
        </p>
      </aside>

      {/* Services */}
      <nav>
        <h6 className="footer-title">Explore</h6>
        <Link to="/movies" className="link link-hover">All Movies</Link>
        <Link to="/movies/my-collection" className="link link-hover">My Collection</Link>
        <Link to="/genres" className="link link-hover">Genres</Link>
        <Link to="/top-rated" className="link link-hover">Top Rated</Link>
      </nav>

      {/* Company */}
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">About Us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/careers" className="link link-hover">Careers</Link>
        <Link to="/faq" className="link link-hover">FAQ</Link>
      </nav>

      {/* Legal & Social */}
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="/terms" className="link link-hover">Terms of Use</Link>
        <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
        <Link to="/cookies" className="link link-hover">Cookie Policy</Link>
        
        <div className="flex gap-4 mt-4">
          <a href="#" className="hover:text-primary"><FaFacebookF /></a>
          <a href="#" className="hover:text-primary"><FaTwitter /></a>
          <a href="#" className="hover:text-primary"><FaInstagram /></a>
          <a href="#" className="hover:text-primary"><FaLinkedinIn /></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
