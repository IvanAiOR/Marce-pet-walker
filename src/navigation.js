import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    // {
    //   text: 'Paseadora',
    //   href: getPermalink('/paseadora'),
    // },

    // {
    //   text: 'Contacto',
    //   href: getPermalink('/contacto'),
    // },
  ],
  actions: [{ text: 'Agendar ahora', href: 'https://wa.me/56950623790', target: '_blank', icon: 'tabler:brand-whatsapp', }],

};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@adamyscop' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/adamyspsoficial/' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCk-WeiV7irO52cNqGMi_Jjg' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61557115130021' },
  ],
  footNote: `
    Made with<a class="text-blue-600 underline dark:text-muted" href="https://astrowind.vercel.app/"> Astro Wind</a>.
  `,
};
