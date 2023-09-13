import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  Avatar,NavbarMenuToggle,NavbarMenu,NavbarMenuItem,Badge} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
 import {useSelector} from 'react-redux'
 import {addToCart, selectCount} from '../../../slice/cartSlice' 
 import logo from '../../assets/HomePage/1.jpeg'
 import store from '../../../store/store'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//     const count = selectCount(store.getState())
// console.log(count)
const totalCount = useSelector(selectCount);
console.log(totalCount);
// const quantity = totalCount[0].quantity 
// console.log(quantity);

    const menuItems = [
      "Profile",
      "Dashboard",
      "Shop All Brands",
      "Analytics",
      "System",
     
    ];
    return (
        <div>
            <Navbar
              isBordered
              isBlurred
              isMenuOpen={isMenuOpen}
              onMenuOpenChange={setIsMenuOpen}
            >
              <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                  
              </NavbarContent>
              <NavbarContent className=" hidden sm:hidden pr-3" justify="center">
                <NavbarBrand>
 <img src={logo} alt="" />
                  
                </NavbarBrand>
              </NavbarContent>
              <NavbarContent className=" sm:flex gap-4" justify="center">
                <NavbarBrand>

                <Link to="/">
                  
                <img className='logo' src={logo} alt="" />
                  </Link>
             
                  
                </NavbarBrand>
                {/* <NavbarItem>
                  <Link color="foreground" to="/">
                    Home
                  </Link>
                </NavbarItem> */}
                {/* <NavbarItem isActive>
                  <Link href="/" aria-current="page">
                   Shop Brands
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#">
                    Integrations
                  </Link>
                </NavbarItem> */}
              </NavbarContent>
              <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                  <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem className=' flex gap-4  align-middle justify-center' >
                <Avatar isBordered radius="lg" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                 
                  <Link to = "/ShowCart"> <Badge color="danger" content={1} shape="circle">  <FontAwesomeIcon size='2x' icon={faCartShopping} /></Badge></Link>
                </NavbarItem>
              </NavbarContent>
              <NavbarMenu>
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                      className="w-full"
                      color={
                        index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                      }
                      href="#"
                      size="lg"
                    >
                      {item}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            </Navbar>
        </div>
      );
}

export default Header
