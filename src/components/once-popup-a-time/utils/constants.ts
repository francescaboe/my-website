export const STORY: {
  title: string;
  content: string;
  styles: { forest: string; princess: string; dragon: string; prince: string; heart: string };
}[] = [
  {
    title: 'Welcome to My Forest',
    content: 'Hover on the image to see animation. \nPress next to turn the page',
    styles: {
      forest: '',
      princess: 'hidden',
      dragon: 'hidden',
      prince: 'hidden',
      heart: 'hidden',
    },
  },
  {
    title: 'The Enchanted Forest',
    content:
      'In the heart of an enchanted forest, a lonely princess awaits, surrounded by the whispering trees',
    styles: {
      forest: '', // add birds on hover?
      princess: '', // show princess, animate on hover (smile or color change, or singing)
      dragon: 'hidden',
      prince: 'hidden',
      heart: 'hidden',
    },
  },
  {
    title: 'A Fiery Encounter',
    content:
      "Suddenly, a fierce dragon emerges, its scales reflecting the glint of danger as it blocks the princess's path",
    styles: {
      forest: '',
      princess: '',
      dragon: '',
      prince: 'hidden',
      heart: 'hidden',
    },
  },
  {
    title: 'Unexpected Hero',
    content:
      'A valiant prince appears, sword drawn, determined to rescue the princess from the looming threat of the dragon',
    styles: {
      forest: '',
      princess: '',
      dragon: '',
      prince: '',
      heart: 'hidden',
    },
  },
  {
    title: 'A Twisted Union',
    content:
      'But as the prince approaches, the princess reveals a dark secret: she desires no rescue. In a shocking twist, she turns the tables, vanquishing the prince and choosing an new path—a union with the dragon.',
    styles: {
      forest: '',
      princess: '', // add sword with :after, swing it on hover
      dragon: '',
      prince: '',
      heart: 'hidden',
    },
  },
  {
    title: 'THE END',
    content: '...',
    styles: {
      forest: '',
      princess: '-translate-x-24',
      dragon: '',
      prince: 'hidden',
      heart: '',
    },
  },
];
