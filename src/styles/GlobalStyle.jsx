import colors from '../constants/colors.js';

import { createGlobalStyle } from 'styled-components';

const baseColor = colors.baseColor;
const textBaseColor = colors.textBaseColor;
const accentColor = colors.accentColor;
const detailColor = colors.detailColor;

const GlobalStyle = createGlobalStyle`
*{
	box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
	::-webkit-scrollbar {
		width: 0.3em;
	}
	::-webkit-scrollbar-track {
		background: ${baseColor};
	}
	::-webkit-scrollbar-thumb {
		max-height: 50%;
		border-radius: 5px;
		background: ${detailColor};
		:hover {
			background: ${accentColor};
		}
	}
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	color: ${textBaseColor};
	font-size: 17px;
	line-height: 1;
	font-family: 'Lato', sans-serif;
	background-color: ${baseColor};
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyle;
