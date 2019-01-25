import { Link } from 'gatsby';
import React from 'react';
import moment from 'moment';
import styles from './Feed.module.scss';

const Feed = ({ edges }) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug} style={{ padding: '20px' }}>
        <img src="https://jnj-content-lab.brightspotcdn.com/dims4/default/e26a2f8/2147483647/strip/true/crop/3912x2192+15+490/resize/282x158!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2F30%2Fe2%2F3e98ab5d4c5eadb13c29b5e4e158%2Fdsc-9449.JPG" style={{ float: 'left', marginRight: '20px' }}></img>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
      </div>
    ))}
  </div>
);

export default Feed;
