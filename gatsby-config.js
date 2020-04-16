module.exports = {
    siteMetadata: {
        title: `Nubelson Dev Blog | Nubelson Fernandes`,
        titleTemplate: `Blog | nubelsondev`,
        description: `Learn Javascript, Node, React and React Native by building things`,
        keywords: `blog do nubelson, nubelsondev, nubelsondev blog,nubelson fernandes, blog do nuno, javascript, react, node, react native, blog develop`,
        author: `Nubelson Fernandes`,
        siteUrl: `https://blog.nubelson.dev`,
        googleVerification: `eRPme2Wzm2_bDtofxz7nq-JW-wFm2QL07QhIzJC6Xtk`,
        username: `@nubelsondev`,
        image: `./share.jpg`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-158868946-2',
            },
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en',
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Poppins`,
                        variants: [`300`, `300i`, `400`, `500`, `600`, `700`],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/content/blog`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                useMozJpeg: false,
                stripMetadata: true,
                defaultQuality: 90,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-relative-images`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1160,
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'noreferrer',
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: '›',
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: true,
                            languageExtensions: [
                                {
                                    language: 'superscript',
                                    extend: 'javascript',
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            prompt: {
                                user: 'root',
                                host: 'localhost',
                                global: false,
                            },
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `#F9D342`,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Blog | Nubelsondev`,
                short_name: `Blog`,
                start_url: `/`,
                background_color: `#2b2b2b`,
                theme_color: `#F9D342`,
                display: `minimal-ui`,
                icon: `src/images/icon.svg`,
            },
        },
        `gatsby-plugin-offline`,
    ],
}
