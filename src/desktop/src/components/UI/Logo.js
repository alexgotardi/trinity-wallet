import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

import * as loading from 'animations/loading-white.json';
import Icon from 'components/UI/Icon';

export default class Logo extends React.PureComponent {
    static propTypes = {
        size: PropTypes.number,
        animate: PropTypes.bool,
        loop: PropTypes.bool,
    };

    render() {
        const { size, loop, animate } = this.props;

        const options = {
            loop: loop,
            autoplay: true,
            animationData: loading,
        };

        return (
            <div style={{ width: size, height: size, display: 'inline-block' }}>
                {!animate ? <Icon icon="iota" size={size} /> : <Lottie width={size} height={size} options={options} />}
            </div>
        );
    }
}
