import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import OkayGe from '../assets/images/okayge.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/NavBarStyle.css';

function NavBar() {
  return (
    <>
    <Navbar className='navbar'>
        <Container className='navbar-container'>
            <div className='left-links'>
                <img alt="okay-ge" src={OkayGe} width="40" height="40" className='d-inline-block'/>
                <h4>Meme Generator</h4>    
            </div>  
            <p>React Course Project III</p>
        </Container>
    </Navbar>
    </>
  );
}

export default NavBar;