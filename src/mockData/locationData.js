import RoomOwnerProfilePic from '../assets/room-owner-profile-pic.jpg';

const locations = [
    {
        id: 'av1',
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
        airbnbPlus: true,
        hostLanguages: ["english", "french"]
    },
    {
        id: 'av2',
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
        hostLanguages: ["english", "spanish"]
    },
    {
        id: 'av3',
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
        airbnbPlus: true,
        hostLanguages: ["english", "french", "spanish", "italian"]
    },
    {
        id: 'av4',
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
        airbnbPlus: false,
        hostLanguages: ["english"]
    },
    {
        id: 'av5',
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
        airbnbPlus: true,
        hostLanguages: ["english", "french", "portuguese"]
    },
    {
        id: 'av6',
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
        airbnbPlus: true,
        hostLanguages: ["english", "french", "chinese"]
    },
    {
        id: 'av7',
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
        airbnbPlus: true,
        hostLanguages: ["english", "french", "chinese", "spanish", "italian", "greek"]
    },
    {
        id: 'av8',
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
        airbnbPlus: true,
        hostLanguages: ["english"]
    },
    {
        id: 'av9',
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
        airbnbPlus: true,
        hostLanguages: ["english", "french"]
    },
    {
        id: 'av10',
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
        airbnbPlus: true,
        hostLanguages: ["spanish", "french"]
    },
    {
        id: 'av11',
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
        airbnbPlus: true,
        hostLanguages: ["english", "french", "italian"]
    },
    {
        id: 'av12',
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
        airbnbPlus: false,
        hostLanguages: ["english", "french", "portuguese", "hindi"]
    },

    // rooms data
    {
        id: 'r1',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english", "hindi"]
    },
    {
        id: 'r2',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english", "french", "portuguese", "hindi"]
    },
    {
        id: 'r3',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english"]
    },
    {
        id: 'r4',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: true,
        hostLanguages: ["english", "french"]
    },
    {
        id: 'r5',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english"]
    },
    {
        id: 'r6',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english", "french", "portuguese", "hindi"]
    },
    {
        id: 'r7',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english", "greek"]
    },
    {
        id: 'r8',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english"]
    },
    {
        id: 'r9',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: true,
        hostLanguages: ["english", "french", "portuguese", "hindi"]
    },
    {
        id: 'r10',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english"]
    },
    {
        id: 'r11',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english", "french"]
    },
    {
        id: 'r12',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english", "french", "portuguese", "hindi"]
    },
    {
        id: 'r13',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: true,
        hostLanguages: ["english", "hindi"]
    },
    {
        id: 'r14',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: true,
        hostLanguages: ["english", "portuguese", "japanese"]
    },
    {
        id: 'r15',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: true,
        hostLanguages: ["english", "french", "portuguese", "hindi", "japanese"]
    },
    {
        id: 'r16',
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
        roomOwner: RoomOwnerProfilePic,
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
        airbnbPlus: false,
        hostLanguages: ["english"]
    }
]

export default locations