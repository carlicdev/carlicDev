import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
      postsConnection(last: 50) {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            excerpt
            slug
            title
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges.reverse();
};

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails() {
            posts(
                orderBy: createdAt_ASC
                last: 3
                ) {
                    title
                    featuredImage {
                        url
                    }
                    createdAt
                    slug
                }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.posts.reverse(); 
}

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories}}}
                last: 3
                ) {
                    title
                    featuredImage {
                        url
                    }
                    createdAt
                    slug
                }
        }
    `
    const result = await request(graphqlAPI, query, { categories, slug });

    return result.posts.reverse(); 
}

export const getCategories  = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
                posts (last:50) {
                  id
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.categories; 
}

export const getPostDetails = async (slug) => {
    const query = gql`
    query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              createdAt
              excerpt
              slug
              title
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
              content{
                raw
              }
        }
      }
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts.reverse();
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}, last: 50) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges.reverse();
};