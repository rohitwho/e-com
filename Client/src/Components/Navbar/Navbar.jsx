import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, AvatarIcon, Avatar,NavbarMenuToggle,NavbarMenu,NavbarMenuItem,Badge} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
 import {addToCart, selectCount,selectPage} from '../../../slice/cartSlice' 
//  import logo from '../../assets/HomePage/1.jpeg'
//  import store from '../../../store/store'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const dispatch= useDispatch()
    const quantity = useSelector(selectCount).length

    function selectPageToView(list){
      const setPageToView = dispatch(selectPage(list))
      console.log(setPageToView);

      setIsMenuOpen(false)
    }
//     const count = selectCount(store.getState())
// console.log(count)
// const totalCount = useSelector(selectCount);
// console.log(totalCount);
// const quantity = totalCount[0].quantity 
// console.log(quantity);

    const menuItems = [
      {id:1,menuItemName:'Dashboard',to:"/"},
      {id:2,menuItemName:'Shop New Deals',to:"/Deals"},
      {id:3,menuItemName:'Shop Men',Link:"/MenProduct",to:"/Fashion"},
      {id:4,menuItemName:'Shop Women',Link:"/women'sProducts",to:"/Fashion"},
      {id:5,menuItemName:'Accessories',Link:"/Accessories",to:"/Fashion"},
     
   
     
    ];
    return (
        <div>
            <Navbar
              isBordered
              isBlurred
              isMenuOpen={isMenuOpen}
              onMenuOpenChange={setIsMenuOpen}
            >
              <NavbarContent  justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                  
              </NavbarContent>
         
              <NavbarContent className=" sm:flex gap-4" justify="center">
                <NavbarBrand>

                <Link to="/">
                  
                <h1 className='logo' >Shop All</h1>
                  </Link>
             
                  
                </NavbarBrand>
            
              </NavbarContent>
              <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                  <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem className=' flex gap-4  align-middle justify-center' >
                {/* <Avatar isBordered radius="lg" src="https://i.pravatar.cc/150?u=a04258114e29026302d" /> */}
                <Avatar
        icon={<AvatarIcon />}
        classNames={{
          base: "transparent",
          icon: "text-black/80",
        }}
      />
                 
                  <Link to = "/ShowCart"> <Badge color="danger" content={quantity} shape="circle">  <FontAwesomeIcon size='2x' icon={faCartShopping} /></Badge></Link>
                </NavbarItem>
              </NavbarContent>
              <NavbarMenu >
                {menuItems.map((item) => (
                  <NavbarMenuItem key={item.id} style={{color:"black"}}>
                    <Link onClick={()=>selectPageToView(item.Link)}
                    to={item.to}
              
                    >
                      {item.menuItemName}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            </Navbar>
        </div>
      );
}

export default Header
