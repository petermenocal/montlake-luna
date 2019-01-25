import { Box, Flex } from 'rebass';

import Nuka from 'nuka-carousel';
import React from 'react';
import styles from './Carousel.module.scss';

export default class extends React.Component {
  render() {
    return (
      <div className={styles['carousel']}>
            <Nuka autoplay="true" wrapAround="true" style={{ minHeight: '300px', display: 'block' }}>
                <Flex alignItems="center" justifyContent="center" flexWrap="wrap" color="white" fontSize="5" style={{ minHeight: '300px', backgroundSize: 'cover', backgroundPosition: 'center center', background: 'url("https://jnj-content-lab.brightspotcdn.com/dims4/default/a2458a9/2147483647/strip/true/crop/1440x666+0+0/resize/1440x666!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2F78%2F48%2F6f83a8f14a53b92e60bbb577df11%2Flede-chiaraqa-overridehp.jpg")' }}>
                    <Box>Slide 1</Box>
                </Flex>
                <Flex alignItems="center" justifyContent="center" flexWrap="wrap" color="white" fontSize="5" style={{ minHeight: '300px', backgroundSize: 'cover', backgroundPosition: 'center center', background: 'url("https://jnj-content-lab.brightspotcdn.com/dims4/default/a2458a9/2147483647/strip/true/crop/1440x666+0+0/resize/1440x666!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2F78%2F48%2F6f83a8f14a53b92e60bbb577df11%2Flede-chiaraqa-overridehp.jpg")' }}>
                    <Box>Slide 1</Box>
                </Flex>
                <Flex alignItems="center" justifyContent="center" flexWrap="wrap" color="white" fontSize="5" style={{ minHeight: '300px', backgroundSize: 'cover', backgroundPosition: 'center center', background: 'url("https://jnj-content-lab.brightspotcdn.com/dims4/default/a2458a9/2147483647/strip/true/crop/1440x666+0+0/resize/1440x666!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2F78%2F48%2F6f83a8f14a53b92e60bbb577df11%2Flede-chiaraqa-overridehp.jpg")' }}>
                    <Box>Slide 1</Box>
                </Flex>
                <Flex alignItems="center" justifyContent="center" flexWrap="wrap" color="white" fontSize="5" style={{ minHeight: '300px', backgroundSize: 'cover', backgroundPosition: 'center center', background: 'url("https://jnj-content-lab.brightspotcdn.com/dims4/default/a2458a9/2147483647/strip/true/crop/1440x666+0+0/resize/1440x666!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2F78%2F48%2F6f83a8f14a53b92e60bbb577df11%2Flede-chiaraqa-overridehp.jpg")' }}>
                    <Box>Slide 1</Box>
                </Flex>
            </Nuka>
      </div>
    );
  }
}