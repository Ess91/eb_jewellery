import "./MobileMenu.scss";

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobileMenu${open ? " open" : ""}`}>
      <a href="#catalogue" onClick={onClose}>
        Catalogue
      </a>
      <a href="#wholesale" onClick={onClose}>
        Wholesale
      </a>
      <a href="#clients" onClick={onClose}>
        Clients
      </a>
      <a href="#booking" onClick={onClose}>
        Contact
      </a>
      <a href="#booking" className="btn onBlack" onClick={onClose}>
        Book appointment
      </a>
    </div>
  );
}
