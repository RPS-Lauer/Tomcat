const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const machineTemplate = path.resolve("./src/templates/ProductPage.js");
  const machineRes = await graphql(`
    query {
      allContentfulMachine {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const imageGalleryTemplate = path.resolve("./src/templates/ImageGallery.js");
  const imageGalleryRes = await graphql(`
    query {
      allContentfulMachine {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  machineRes.data.allContentfulMachine.edges.forEach((edge) => {
    createPage({
      component: machineTemplate,
      path: `/models/${edge.node.slug}/overview`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  imageGalleryRes.data.allContentfulMachine.edges.forEach((edge) => {
    createPage({
      component: imageGalleryTemplate,
      path: `/models/${edge.node.slug}/gallery`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
