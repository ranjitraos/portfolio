import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
import { motion } from "framer-motion";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);
const MotionBox = motion.custom(Box);

const Navbar = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="3.5rem"
      bg="rgb(56,56,59)"
      color="white"
      {...props}
      style={{ position: "sticky", top: "0", zIndex: "1" }}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" id="titleBtn">
          <NavLink to="/home">S Ranjit Rao</NavLink>
        </Heading>
      </Flex>

      <MotionBox
        display={{ sm: "block", md: "none" }}
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {show ? <img src="cross-sign.png"></img> : <img src="menu.png"></img>}
      </MotionBox>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <NavLink
          className="nav-link"
          to="/contact"
          style={{ marginRight: "25px" }}
        >
          Contact
        </NavLink>
        <a
          href="https://www.linkedin.com/in/s-ranjit-rao-8b10ab129"
          style={{
            cursor: "pointer",
            marginRight: "25px",
          }}
          target="_blank"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </Box>
    </Flex>
  );
};

export default Navbar;
