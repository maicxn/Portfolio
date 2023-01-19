export type Link = {
    name: string;
    url: string;
    text: string;
  };
  
  export const links: Link[] = [
    {
      name: 'about',
      text: 'Sobre mim',
      url: '/about',
    },
    {
      name: 'blog',
      text: 'Blog',
      url: '/blog',
    },
  ];
  