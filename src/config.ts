export const SITE = {
  title: 'Akel Documentation',
  description: 'Akel documentation',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
  English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
//export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
//export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: 'General', header: true, opened: false },
    { text: 'Introduction', link: 'en/introduction' },

    { text: 'Audio', header: true, opened: false },
    { text: 'AudioManager', link: 'en/Audio/manager' },

    { text: 'Core', header: true, opened: false },
    { text: 'JamAllocator', link: 'en/Core/jam_allocator' },
    { text: 'Logs', link: 'en/Core/logs' },

    { text: 'Platform', header: true, opened: false },
    { text: 'WindowComponent', link: 'en/Platform/window' },
    { text: 'Message Box', link: 'en/Platform/message_box' },
    { text: 'Inputs', link: 'en/Platform/inputs' },

    { text: 'Languages', header: true, opened: false },
    { text: 'ELTM', link: 'en/Languages/eltm' },
  ],
};
