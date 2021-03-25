import React,{useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
  } from 'reactstrap';
import './NavbarCom.css'
function NavbarCom() {
    const [btn1,setBtn1]=useState('')
    const [btn2,setBtn2]=useState('')
    const [btn3,setBtn3]=useState('')
    const btn1Handler=()=>{
        setBtn1("active")
        setBtn2("")
        setBtn3("")
    }
    const btn2Handler=()=>{
        setBtn1("")
        setBtn2("active")
        setBtn3("")
    }
    const btn3Handler=()=>{
        setBtn1("")
        setBtn2("")
        setBtn3("active")
    }
    const mainHandler=()=>{
        setBtn1("")
        setBtn2("")
        setBtn3("")
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar_style" fixed="top" light expand="md">
                <Container className="fluid">
                    <NavbarBrand onClick={()=>mainHandler()} className="Navbar_color brand" href="#header">START BOOTSTRAP</NavbarBrand>
                    <NavbarToggler className="toggler" onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink onClick={()=>btn1Handler()} className={btn1}  href="#portfolio" ><h1 className="Navbar_color nav_items pb-1">PORTFOLIO</h1></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={()=>btn2Handler()} className={btn2} href="#about"><h1 className="Navbar_color nav_items pb-1">ABOUT</h1></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={()=>btn3Handler()} className={btn3}  href="#contacts"><h1 className="Navbar_color nav_items pb-1">CONTACTS</h1></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarCom
