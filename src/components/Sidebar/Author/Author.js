import { Link, withPrefix } from 'gatsby';

import React from 'react';
import styles from './Author.module.scss';

const Author = ({ author, isIndex }) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="100%"
        style={{ maxWidth: '200px' }}
        height="auto"
        alt={author.name}
      />
    </Link>
  </div>
);

export default Author;
