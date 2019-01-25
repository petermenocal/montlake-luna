import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import { Link } from 'gatsby';
import Meta from './Meta';
import React from 'react';
import Tags from './Tags';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const {
    tags,
    title,
    date
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">All Articles</Link>

      <div className={styles['post__content']}>
        <img src="https://jnj-content-lab.brightspotcdn.com/dims4/default/3322353/2147483647/strip/true/crop/3456x1598+0+1793/resize/1440x666!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2F10%2F35%2Fc75edebf4bd184bf31d4659b7052%2Fimg-5750-copy-2.jpg"></img>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={post.fields.slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
