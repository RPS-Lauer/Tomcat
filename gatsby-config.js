module.exports = {
  siteMetadata: {
    title: "tomcat",
    siteUrl: "http://tomcatequip.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "If9g4AjCqyd3a9CaRLfV7gEZRuUR3ntpbAYzqcWa5wg",
        spaceId: "boaj1qk4w43f",
      },
    },
    "gatsby-plugin-styled-components",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
