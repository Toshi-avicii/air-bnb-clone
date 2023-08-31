const locations = [
    {
        id: 'av1',
        title: 'Cozy room in vegan oasis',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 7,
        bathrooms: 7,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "guesthouse",
        instantBook: false,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: true,
            entrance32: true,
            stepFreePath: true
        },
        superhost: true,
        airbnbPlus: true
    },
    {
        id: 'av2',
        title: 'Hell in a cell',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 4,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: false,
            airConditioning: true
        },
        propertyType: "house",
        instantBook: true,
        selfCheckIn: false,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: true,
    },
    {
        id: 'av3',
        title: 'Expensive Villa',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 9,
        bathrooms: 9,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "guesthouse",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: true,
            entrance32: true,
            stepFreePath: true
        },
        superhost: true,
        airbnbPlus: true
    },
    {
        id: 'av4',
        title: 'Cozy room in vegan oasis 2',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 3,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: false,
            airConditioning: true
        },
        propertyType: "house",
        instantBook: false,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: true,
            entrance32: false,
            stepFreePath: false
        },
        superhost: false,
        airbnbPlus: false
    },
    {
        id: 'av5',
        title: 'Cozy room in vegan oasis 3',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 5,
        bathrooms: 5,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "guesthouse",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: true
    },
    {
        id: 'av6',
        title: 'Cozy room in vegan oasis 4',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 7,
        bathrooms: 7,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "guesthouse",
        instantBook: false,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: true,
        airbnbPlus: true
    },
    {
        id: 'av7',
        title: 'Cozy room in vegan oasis 5',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 11,
        bathrooms: 11,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "guesthouse",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: true,
            entrance32: true,
            stepFreePath: true
        },
        superhost: true,
        airbnbPlus: true
    },
    {
        id: 'av8',
        title: 'Cozy room in vegan oasis 6',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 6,
        bathrooms: 6,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "apartments",
        instantBook: false,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: true,
            entrance32: false,
            stepFreePath: false
        },
        superhost: false,
        airbnbPlus: true
    },
    {
        id: 'av9',
        title: 'Cozy room in vegan oasis 7',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 4,
        bathrooms: 3,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "guesthouse",
        instantBook: false,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: true,
            entrance32: true,
            stepFreePath: true
        },
        superhost: true,
        airbnbPlus: true
    },
    {
        id: 'av10',
        title: 'Cozy room in vegan oasis 8',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 4,
        bathrooms: 4,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: false,
            airConditioning: true
        },
        propertyType: "guesthouse",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: true,
            entrance32: false,
            stepFreePath: false
        },
        superhost: true,
        airbnbPlus: true
    },
    {
        id: 'av11',
        title: 'Cozy room in vegan oasis 9',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 8,
        bathrooms: 8,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "house",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: true,
            entrance32: true,
            stepFreePath: true
        },
        superhost: true,
        airbnbPlus: true
    },
    {
        id: 'av12',
        title: 'Cozy room in vegan oasis 10',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        secondaryAddress: 'Manchester State Park',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        pricePerNight: 412,
        category: 'amazing_views',
        beds: 5,
        bathrooms: 5,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "guesthouse",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: true,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: false
    },

    // rooms data
    {
        id: 'r1',
        title: 'Cozy room in vegan oasis 11',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720' 
        ],
        mainAddress: 'Ottawa, Canada',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 31,
        beds: 3,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: false,
            washer: false,
            airConditioning: true
        },
        propertyType: "flat",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: false,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: false
    },
    {
        id: 'r2',
        title: 'Cozy room in vegan oasis 12',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Ottawa, Canada',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 36,
        beds: 2,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: false,
            washer: false,
            airConditioning: true
        },
        propertyType: "house",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: false
    },
    {
        id: 'r3',
        title: 'Cozy room in vegan oasis 13',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 21,
        beds: 1,
        bathrooms: 1,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: false,
            washer: false,
            airConditioning: true
        },
        propertyType: "flat",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: false
    },
    {
        id: 'r4',
        title: 'Cozy room in vegan oasis 14',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 39,
        beds: 3,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: false,
            washer: false,
            airConditioning: true
        },
        propertyType: "house",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: true
    },
    {
        id: 'r5',
        title: 'Cozy room in vegan oasis 15',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 17,
        beds: 2,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "flat",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: true,
        airbnbPlus: false
    },
    {
        id: 'r6',
        title: 'Cozy room in vegan oasis 16',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 25,
        beds: 2,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: false,
            washer: false,
            airConditioning: true
        },
        propertyType: "house",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: false
    },
    {
        id: 'r7',
        title: 'Cozy room in vegan oasis 17',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 55,
        beds: 3,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "guesthouse",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: false
    },
    {
        id: 'r8',
        title: 'Cozy room in vegan oasis 18',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 34,
        beds: 2,
        bathrooms: 1,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: false,
            washer: false,
            airConditioning: true
        },
        propertyType: "flat",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: false
    },
    {
        id: 'r9',
        title: 'Cozy room in vegan oasis 19',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 41,
        beds: 4,
        bathrooms: 3,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: false,
            washer: false,
            airConditioning: true
        },
        propertyType: "guesthouse",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: true
    },
    {
        id: 'r10',
        title: 'Cozy room in vegan oasis 20',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        beds: 3,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: false,
            washer: false,
            airConditioning: true
        },
        pricePerNight: 23,
        propertyType: "flat",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: false
        },
        superhost: false,
        airbnbPlus: false
    },
    {
        id: 'r11',
        title: 'Cozy room in vegan oasis 21',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 19,
        beds: 2,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: false,
            washer: false,
            airConditioning: true
        },
        propertyType: "flat",
        instantBook: true,
        selfCheckIn: false,
        accessibility: {
            stepFreeGuestEntrance: true,
            parking: false,
            entrance32: false,
            stepFreePath: true
        },
        superhost: true,
        airbnbPlus: false
    },
    {
        id: 'r12',
        title: 'Cozy room in vegan oasis 22',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 27,
        beds: 3,
        bathrooms: 2,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "house",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: false
    },
    {
        id: 'r13',
        title: 'Cozy room in vegan oasis 23',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        price: 412,
        category: 'rooms',
        pricePerNight: 49,
        beds: 4,
        bathrooms: 4,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "house",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: true,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: true
    },
    {
        id: 'r14',
        title: 'Cozy room in vegan oasis 24',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 57,
        beds: 3,
        bathrooms: 3,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "flat",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: true,
            stepFreePath: true
        },
        superhost: true,
        airbnbPlus: true
    },
    {
        id: 'r15',
        title: 'Cozy room in vegan oasis 25',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 35,
        beds: 3,
        bathrooms: 3,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: true,
            washer: true,
            airConditioning: true
        },
        propertyType: "flat",
        instantBook: true,
        selfCheckIn: true,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: true,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: true
    },
    {
        id: 'r16',
        title: 'Cozy room in vegan oasis 26',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720'
        ],
        mainAddress: 'Manchester, California',
        stay: 'Stay with Lewis - Artist',
        rating: 4.96,
        stayDate: 'Dec 3 - 9',
        category: 'rooms',
        pricePerNight: 16,
        beds: 2,
        bathrooms: 1,
        amenities: {
            wifi: true,
            kitchen: true,
            privateBath: false,
            washer: false,
            airConditioning: true
        },
        propertyType: "flat",
        instantBook: true,
        selfCheckIn: false,
        accessibility: {
            stepFreeGuestEntrance: false,
            parking: false,
            entrance32: false,
            stepFreePath: true
        },
        superhost: false,
        airbnbPlus: false
    }
]

export default locations