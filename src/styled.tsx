import { indigo500 } from 'material-ui/styles/colors';
import styled, { keyframes } from 'styled-components';

export const StyledAppParagraph = styled.p`
  font-size: small;
  font-family: Roboto Regular;
`;

export const Title = styled.h1`
    font: Roboto Regular;
	text-align: center;
	color: black;
`;

export const Description = styled.h2`
    font: Roboto Regular;
	font-size: medium;
	text-align: center;
	color: black;
`;

export const Wrapper = styled.section`
    text-align: center;
	padding: 1em;
	background: grey;
`;

export const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
`;

export const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

export const Rotate = styled.div`
	display: inline-block;
	animation: ${rotate360} 2s linear infinite;
	font-size: 1.2rem;
`;

export const StyledLogo = styled.img`
    height: 80px;
`;

export const StyledAppDiv = styled.div`
    text-align: center;
`;

export const StyledAppHeaderDiv = styled.div`
  background-color: #222;
  height: 220px;
  padding: 30px;
  color: white;
  font-family: Geneva, Arial, Helvetica, sans-serif
`;

export const AppBarStyle = {
  backgroundColor: indigo500,
};

export const LoginDialogButtonsStyle = {
  marginBottom: 20,
};

export const LoginDialogActionsStyle = {
  textAlign: 'left',
};

export const LoginDialogStyle = {
  width: 300,
};

export const LoginDialogTextFieldStyle = {
  width: '100%'
};

export const LoginDialogBodyStyle = {
  marginTop: -20
};

export const LoginDialogLink = {
  marginBottom: 0,
  textDecoration: 'underline'
};

export const UserCardStyle = {
  margin: 20
};

export const IconButtonExpandMoreStyle = {
  textAlign: 'center',
  width: 96,
  height: 96,
  padding: 24,
};

export const styleBody = {
  container: {
    padding: '0px 64px 0px 260px'
  },
  mapContainer: {
    padding: '0px 64px 0px 260px'
  },
  subheader: {
    marginBottom: 12
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10
  }
};

export const wallpaper = {
  parent: {
    textAlign: 'center',
    backgroundSize: 'cover',
    position: 'fixed',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: '100%',
    height: 'auto',
    zIndex: '-100',
    transform: 'translateX(-50%) translateY(-50%)',
  },
  child: {}
};

export const headerStyle = {
  paddingTop: '100px',
  textAlign: 'center',
};