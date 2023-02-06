import beinIMG from '../resources/BeinheilsaBg.png'
import samasemIMG from '../resources/SamasemBG.png'
import HistoryGuessrBG from '../resources/HistoryGuessrBG.png'
export const projectsData = [
    {
        id:1,
        name: 'Beinheilsa.is(v1)',
        image: beinIMG,
        description: 'This was the very first webpage I created. It is made with pure vanilla HTML,css and JS. This page was developed in collaboration with a Dr.Sigridur Björnsdóttir as an icelandic information source about Osteoporosis. This version is not finished but v2 is currently being redeveloped in Next.js',
        link: 'https://beinheilsa.is'
    },
    {
        id:2,
        name: 'Samasem.is',
        image: samasemIMG,
        description: 'I created samasem.is in collaboration with my friend and colleague Arnór Daniel for a local flower wholesale. It was developed in React and uses Prismic and Commerce.js for conent management',
        link: 'https://samasem.is'
    },
    {
        id:3,
        name: 'HistoryGuessr',
        image: HistoryGuessrBG,
        description: 'This is an online game that I developed for fun and that I will keep developing. Players get 5 images one after another and are supposed to guess what year it was captured. I plan on adding a map to let players guess where the picture was taken aswell.',
        link: 'https://history-guessr.vercel.app/'
    },
]