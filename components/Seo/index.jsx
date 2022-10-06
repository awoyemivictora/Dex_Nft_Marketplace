import Head from 'next/head'

const SEO = ({ title }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta
                name="description"
                content="Hope – Health &amp; Medical React JS Template"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </Head>
    );
};

export default SEO;
