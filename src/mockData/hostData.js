import locations from "./locationData";
import roomOwnerPic from '../assets/room-owner-profile-pic.jpg'
import naturePic from '../assets/react.svg';
import stockProfile from '../assets/stock-profile.jpg'

const hosts = [
    {
        id: 'host1',
        name: 'Valentina',
        profilePic: roomOwnerPic,
        reviews: [
            {
                id: new Date() + ' rev1',
                from: 'Romeo',
                comment: 'Nice host',
                date: 'May 2022'
            },
            {
                id: new Date() + ' rev2',
                from: 'Julia',
                comment: 'I had a nice chat with her, she is nice...',
                date: 'June 2022'
            }
        ],
        hostRating: 4.8,
        yearsHosting: 3,
        school: 'Poletecnico Milano',
        work: 'Interior Designer',
        obsessions: ['Keeping everything tidy', 'having fun'],
        tipsForGuests: ['give city tips'],
        uniquePoints: ['It feels like home'],
        languages: ['spanish', 'english', 'italian'],
        info: {

            city: 'milan',
            country: 'italy',
            phone: 7874563210,
            email: 'valentina@gmail.com',
        },
        offerBreakfast: false,
        listings: locations ?  locations.filter((location) => {
            if(location.category === 'rooms') {
                return location.id === 'r1' || location.id === 'r2' || location.id === 'r3'
            }
        }) : []
    },
    {
        id: 'host2',
        name: 'Himanshu',
        profilePic: naturePic,
        reviews: [
            {
                id: new Date() + ' rev1',
                from: 'Romeo',
                comment: 'Nice host',
                date: 'June 2022'
            },
            {
                id: new Date() + ' rev2',
                from: 'Julia',
                comment: 'I had a nice chat with her, she is nice...',
                date: 'September 2022'
            }
        ],
        hostRating: 4.6,
        yearsHosting: 4,
        school: 'IIT Bengaluru',
        work: 'Software Engineer',
        obsessions: ['Keeping everything tidy'],
        tipsForGuests: ['give city tips'],
        uniquePoints: ['It feels like home'],
        languages: ['hindi', 'english'],
        info: {
            city: 'bengaluru',
            country: 'india',
            phone: 9988774455,
            email: 'himanshu@gmail.com',
        },
        offerBreakfast: true,
        listings: locations ?  locations.filter((location) => {
            if(location.category === 'rooms') {
                return location.id === 'r4' || location.id === 'r5'
            }
        }) : []
    },
    {
        id: 'host3',
        name: 'Robert',
        profilePic: stockProfile,
        reviews: [
            {
                id: new Date() + ' rev1',
                from: 'Romeo',
                comment: 'Nice host',
                date: 'June 2022'
            },
            {
                id: new Date() + ' rev2',
                from: 'Julia',
                comment: 'I had a nice chat with her, he is nice...',
                date: 'September 2022'
            }
        ],
        hostRating: 4.7,
        yearsHosting: 2,
        school: 'National institute of art, Warsaw',
        work: 'Art consultant',
        obsessions: ['Keeping everything tidy'],
        tipsForGuests: ['give city tips'],
        uniquePoints: ['It feels like home'],
        languages: ['polish', 'english'],
        info: {
            city: 'warsaw',
            country: 'poland',
            phone: 1122334455,
            email: 'robert@gmail.com',
        },
        offerBreakfast: true,
        listings: locations ?  locations.filter((location) => {
            if(location.category === 'rooms') {
                return location.id === 'r6'
            }
        }) : []
    }
]

export default hosts;