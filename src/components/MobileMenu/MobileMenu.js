/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<Overlay onDismiss={onDismiss} isOpen={isOpen}>
			<Content>
				<button>Dismiss menu</button>
				<nav>
					<a href="/sale">Sale</a>
					<a href="/new">New&nbsp;Releases</a>
					<a href="/men">Men</a>
					<a href="/women">Women</a>
					<a href="/kids">Kids</a>
					<a href="/collections">Collections</a>
				</nav>
				<footer>
					<a href="/terms">Terms and Conditions</a>
					<a href="/privacy">Privacy Policy</a>
					<a href="/contact">Contact Us</a>
				</footer>
			</Content>
		</Overlay>
	);
};

const Overlay = styled(DialogOverlay)`
	display: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	background: hsl(220deg 5% 40% / 0.8);
`;

const Content = styled(DialogContent)`
	background: ${(p) => p.theme.COLORS.white};
`;

export default MobileMenu;
