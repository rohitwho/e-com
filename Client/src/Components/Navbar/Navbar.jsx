import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  AvatarIcon,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Badge,
  DropdownTrigger,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectCount, selectPage } from "../../../slice/cartSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { authentication } from "../../../Auth/firebase";

function Header() {
  const [displayEmail, setDisplayEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const quantity = useSelector(selectCount).length;
  function selectPageToView(list) {
    const setPageToView = dispatch(selectPage(list));
    setIsMenuOpen(false);
  }

  const menuItems = [
    { id: 1, menuItemName: "Dashboard", to: "/" },
    { id: 2, menuItemName: "Shop New Deals", to: "/Deals" },
    { id: 3, menuItemName: "Shop Men", Link: "/MenProduct", to: "/Fashion" },
    {
      id: 4,
      menuItemName: "Shop Women",
      Link: "/women'sProducts",
      to: "/Fashion",
    },
    {
      id: 5,
      menuItemName: "Accessories",
      Link: "/Accessories",
      to: "/Fashion",
    },
  ];
  onAuthStateChanged(authentication, (currentUser) => {
    setDisplayEmail(currentUser);
  });
  function linkTo(link) {
    window.location = link;
  }
  return (
    <div>
      <Navbar
        isBordered
        isBlurred
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className=" sm:flex gap-4" justify="center">
          <NavbarBrand>
            <Link to="/">
              <h1 className="logo">Shop All</h1>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem className=" flex gap-4  align-middle justify-center">
            {/* <Avatar isBordered radius="lg" src="https://i.pravatar.cc/150?u=a04258114e29026302d" /> */}
            <Dropdown className="Dropdown" placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704f"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2 text-black">
                  {displayEmail ? (
                    <>
                      <p
                        className="font-semibold"
                        onClick={() => linkTo("/SignUp")}
                      >
                        Signed in as
                      </p>
                      <p className="font-semibold">{displayEmail?.email}</p>
                    </>
                  ) : (
                    <p
                      className="font-semibold"
                      onClick={() => linkTo("/SignUp")}
                    >
                      Sign Up/LogIn
                    </p>
                  )}
                </DropdownItem>
                <DropdownItem className=" text-black" key="settings">
                  My Settings
                </DropdownItem>
                {displayEmail ? (
                  <DropdownItem
                    className=" text-black"
                    key="Post"
                    onPress={() => linkTo("/Post")}
                  >
                    <Link to="/Post">Post</Link>
                  </DropdownItem>
                ) : null}

                <DropdownItem className=" text-black" key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                {displayEmail ? (
                  <DropdownItem
                    className=" text-black"
                    key="logout"
                    color="danger"
                    onPress={() => signOut(authentication)}
                  >
                    Log Out
                  </DropdownItem>
                ) : null}
              </DropdownMenu>
            </Dropdown>

            <Link to="/ShowCart">
              {" "}
              <Badge color="danger" content={quantity} shape="circle">
                {" "}
                <FontAwesomeIcon size="2x" icon={faCartShopping} />
              </Badge>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.id} style={{ color: "black" }}>
              <Link onClick={() => selectPageToView(item.Link)} to={item.to}>
                {item.menuItemName}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default Header;
