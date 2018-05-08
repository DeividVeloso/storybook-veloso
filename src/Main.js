import React from 'react';
import PropTypes from 'prop-types';
import { titleStyle, subtitleStyle, headerStyle, containerStyle, videoStyle } from './Styles'

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImage, video }) => {
    const headerStylesCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
        backgroundImage: `url(${bgImage})`,
    };

    const component = (
        <header style={headerStylesCombined}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
            {video && <video style={videoStyle} src={video} autoPlay muted loop></video>}
        </header>
    );
    return component;
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    bgImage: PropTypes.string,
    video: PropTypes.string
};

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImage: ''
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
