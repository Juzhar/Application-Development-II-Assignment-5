import './Footer.css';
function Footer({storename, contact}) {
  return (
    <div id="app-footer">
        <h4>{storename}</h4>
        <p>{contact}</p>
    </div>
  );
}
export default Footer;