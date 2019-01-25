import { Box, Flex } from 'rebass';

import Nuka from 'nuka-carousel';
import React from 'react';
import styles from './Carousel.module.scss';

export default class extends React.Component {
  render() {
    return (
        <div className={styles['carousel']}>
                <Nuka autoplay="true" wrapAround={true} style={{ minHeight: '300px', display: 'block' }}>
                    <Flex className={styles['carousel__item']} alignItems="center" justifyContent="center" flexWrap="wrap" color="white" fontSize="5" style={{ minHeight: '300px' }}>
                        <Box>Slide 1</Box>
                    </Flex>
                    <Flex className={styles['carousel__item-2']} alignItems="center" justifyContent="center" flexWrap="wrap" color="white" fontSize="5" style={{ minHeight: '300px' }}>
                        <Box>Slide 1</Box>
                    </Flex>
                    <Flex className={styles['carousel__item-3']} alignItems="center" justifyContent="center" flexWrap="wrap" color="white" fontSize="5" style={{ minHeight: '300px' }}>
                        <Box>Slide 1</Box>
                    </Flex>
                </Nuka>
        </div>
    );
  }
}