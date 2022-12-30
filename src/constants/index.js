import {pnrimg,qrgenimg,gymimg} from '../assets/projectscreenshots/'
import materialuiicon from '../assets/skills/materialui.svg'

export const socialIcons = [
  {
    name: 'github',
    class:' fa-brands fa-github',
    link:'https://github.com/8rxn',
    text:'Fork My Reps On Github'
  },
  {
    name: 'twitter',
    class:' fa-brands fa-twitter',
    link:'https://twitter.com/rajxryan',
    text:'Retweet on Twitter'
  },
  {
    name: 'linkedin',
    class:' fa-brands fa-linkedin',
    link:'https://linkedin.com/rajxryan',
    text:'Connect On LinkedIn'
  },
  {
    name: 'instagram',
    class:' fa-brands fa-instagram',
    link:'https://instagram.com/rajxryan',
    text:'See My profile on Instagram'
  },
  {
    name: 'buymeacoffee',
    class:' fa-solid fa-mug-hot',
    link:'https://buymeacoffee.com/rajxn',
    text:'Buy Me a Coffee'
  },
  
];

export const project=[
  {
    title:'PNR Tracker',
    img:pnrimg,
    subtitle:'   Provides Realtime Data About Your PNR along with all relevant information.',
    link:'https://pnr-tracker-rxn.netlify.app/',
    gitlink:'https://github.com/8rxn/pnr-tracker-rxn'
  },
  {
    title:'QR Gen',
    img:qrgenimg,
    subtitle:' Creates Qr Codes from input Prompt with customization such as size and dark mode',
    link:'https://8rxn.github.io/qrgen/',
    gitlink:'https://github.com/8rxn/qrgen'
  },
  {
    title:'GYM-RXN',
    img:gymimg,
    subtitle:' Provides collection of thousands of exercise categorised by muscle group and equipment. ',
    link:'https://gymrxn.netlify.app/',
    gitlink:'https://github.com/8rxn/gym-app-jsmastery'
  },


  
];


export const techStack=[
  {
    className:'fa-brands fa-html5'
  },
  {
    className:'fa-brands fa-css3'
  },
  {
    className:'fa-brands fa-js'
  },
  {
    className:'fa-brands fa-react'
  },
  {
    className:'fa-brands fa-bootstrap'
  },
  {
    path:"M8.56 4.94l-6.02 10.4L5.545 1.147C5.642.69 6.257.603 6.476 1.016L8.56 4.94zM9.67 7.02L10.87 9.27 5.34 14.5zM14.16 6.15l-1.79 1.7-1.52-2.86.973-1.674c.198-.341.694-.329.876.021L14.16 6.15zM21.13 18.74l-8.8 5.12C12.18 23.96 12 24 11.83 24c-.17 0-.35-.04-.5-.13l-8.05-4.65L18.647 4.657c.291-.276.771-.114.837.281L21.61 17.71C21.68 18.12 21.49 18.53 21.13 18.74z",
    viewBox:"0 0 24 24"
    
  },
  {
    path:'M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z',
    viewBox:'0 0 48 48'
  },
  {
    className:'fa-brands fa-python'
  },
  {
    src: materialuiicon
  }
]