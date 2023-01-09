import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';


interface DefaultMetaDataProps {
  description: string;
  title: string;
  image: string;
  type: string;
  url: string;
  alt: string;
  keywords: string;
  publishedAt: string;
  updatedAt: string;
  MIME: string;
  author_name: string;
}
interface HeaderProps {
  props: DefaultMetaDataProps;
}


interface MetaInfoTagsProps {
  name: string;
  content: string;
}

const Header = ({title,
image,
description,
publishedAt,
updatedAt,
alt,
type,
keywords,
MIME,
author_name}:DefaultMetaDataProps) => {


  const defaultMetaData: DefaultMetaDataProps = {
    description: `This homepage was created, and designed by Rocky Essel, a web developer. The projects/works here, showcase my skill and knowledge.`,
    title: `Homepage`,
    image: `/icon-512x512.png`,
    alt: '',
    keywords: '',
    type: `website`,
    url: `http://localhost:3001`,
    publishedAt: '',
    updatedAt: '',
    author_name: '',
    MIME:''
  };

  const router = useRouter();
  const canonicalUrl: string = (
    defaultMetaData.url + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];


  const metaInfoTags: MetaInfoTagsProps[] = [
    { name: 'og:title', content: title || defaultMetaData.title },
    {name: 'og:type',content: type || defaultMetaData.type},
    { name: 'og:url', content: canonicalUrl || defaultMetaData.url },
    { name: 'og:image', content: image || defaultMetaData.image },
    {name: 'og:description',content: description || defaultMetaData.description},
    { name: 'og:site_name', content: 'Rocky Essel' },
    {name: 'og:published_time',content: publishedAt || new Date().toISOString(),},
    {name: 'og:modified_time', content: updatedAt || new Date().toISOString(),},
    { name: 'og:image:width', content: '1280' },
    { name: 'og:image:alt', content: alt },
    { name: 'og:image:height', content: '640' },
    { name: 'og:image:type', content: `image/${MIME}` },
    { name: 'keywords', content: `${keywords}` },
    { name: 'author', content: `${author_name}` },
  ];

  //<meta property="og:type" content=website>

  const name: string = `${title || defaultMetaData.title} | ${
    type || defaultMetaData.type
  }`;

  return (
    <Head>
      <title>{name}</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0'/>
      <meta name="revisit-after" content="1 days"/>
      <meta name="language" content="English"/>
      <meta name="robots" content="index,follow"/>
      <meta name="reply-to" content="essel_r@outlook.com"/>
      <meta name='description' content={description || defaultMetaData.description}/>
      <meta itemProp='name' content={title || defaultMetaData.title} />
      <meta itemProp='description' content={description || defaultMetaData.description}/>
      <meta itemProp='image' content={image || defaultMetaData.image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:description" content="You cant create a company in one day. And building the perfect website also takes time. Search Engine Optimisaion and Inbound Marketing needs attention every day. Then after a few weeks you will start seeing results."/>
      <meta name="twitter:title" content="The best day of my life"/>
      <meta name="twitter:image" content="https://finlac-i-t-engineering-ltd.vercel.app/cctvall.png"/>
      
      <link rel='manifest' href='/manifest.json' />
      <link rel='apple-touch-icon' href='/icon-512x512.png'/>
      <link rel='canonical' href={canonicalUrl} />
      <meta name='theme-color' content='#fff' />
      {metaInfoTags?.map(({ name, content }, index) => (
        <meta key={index} property={name} content={content} />
      ))}
    </Head>
  );
};

export default Header;
/* 
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="The best day of my life"/>
<meta name="twitter:description" content="
You can’t create a company in one day. And building the perfect website also takes time. Search Engine Optimisaion and Inbound Marketing needs attention every day. Then after a few weeks you will start seeing results."/>
<meta name="twitter:image" content="https://finlac-i-t-engineering-ltd.vercel.app/cctvall.png"/>
*/