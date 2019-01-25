import { Box, Flex, Heading, Text } from 'rebass';

import Carousel from '../components/Carousel';
import Feed from '../components/Feed';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import React from 'react';
import Sidebar from '../components/Sidebar';
import { graphql } from 'gatsby';

const IndexTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar />
      <Page>
        <Carousel />
        <Flex flexWrap="wrap" my={5} mx={1} style={{ background: 'whitesmoke', borderRadius: '20px' }}>
          <Box width={ [1, 1 / 3] } p={4}>
            <img style={{ borderRadius: '50%', marginBottom: '20px' }} src="https://jnj-content-lab.brightspotcdn.com/dims4/default/c3cbed4/2147483647/strip/true/crop/1398x1398+645+0/resize/300x300!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2Fbc%2F57%2F75e479cb44e5bf4fc4fa49dcc382%2Fgettyimages-156851659.jpg"></img>
            <Heading fontSize="2" textAlign="center" lineHeight="1.2" color="#00a6e8">Putting Kids Around the Globe First: Montlake Announces a $10 Million Pledge to UNICEF </Heading>
          </Box>
          <Box width={ [1, 1 / 3] } p={4}>
            <img style={{ borderRadius: '50%', marginBottom: '20px' }} src="https://jnj-content-lab.brightspotcdn.com/dims4/default/c3cbed4/2147483647/strip/true/crop/1398x1398+645+0/resize/300x300!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2Fbc%2F57%2F75e479cb44e5bf4fc4fa49dcc382%2Fgettyimages-156851659.jpg"></img>
            <Heading fontSize="2" textAlign="center" lineHeight="1.2" color="#00a6e8">Putting Kids Around the Globe First: Montlake Announces a $10 Million Pledge to UNICEF </Heading>
          </Box>
          <Box width={ [1, 1 / 3] } p={4}>
            <img style={{ borderRadius: '50%', marginBottom: '20px' }} src="https://jnj-content-lab.brightspotcdn.com/dims4/default/c3cbed4/2147483647/strip/true/crop/1398x1398+645+0/resize/300x300!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2Fbc%2F57%2F75e479cb44e5bf4fc4fa49dcc382%2Fgettyimages-156851659.jpg"></img>
            <Heading fontSize="2" textAlign="center" lineHeight="1.2" color="#00a6e8">Putting Kids Around the Globe First: Montlake Announces a $10 Million Pledge to UNICEF </Heading>
          </Box>
        </Flex>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
