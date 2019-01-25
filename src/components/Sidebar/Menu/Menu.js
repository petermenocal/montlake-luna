import { Link } from 'gatsby';
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import styles from './Menu.module.scss';

const Menu = ({ menu, tags }) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
        </li>
      ))}
          {tags.map((tag) => (
            <li key={tag.fieldValue} className={styles['menu__list-item']} >
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`} className={styles['menu__list-item-link']} activeClassName={styles['menu__list-item-link--active']}>
                { tag.fieldValue }
              </Link>
            </li>
          ))}
    </ul>
  </nav>
);

export default Menu;