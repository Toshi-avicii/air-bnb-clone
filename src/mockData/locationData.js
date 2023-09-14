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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: true,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
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
        airbnbPlus: false,
        reviews: [
            {
                from: 'victor',
                date: new Date("2023-05-12"),
                profile: 'https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.6,
                communication: 4.7,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5                
            },
            {
                from: 'roberto',
                date: new Date("2023-04-17"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
                comment: 'Great place to stay. Host is friendly and helpful. Great place for coffee once you head out or when you get back.',
                cleanliness: 4.8,
                communication: 4.9,
                checkIn: 4.9,
                accuracy: 4.7,
                location: 4.8,
                value: 4.9
            },
            {
                from: 'daniel',
                date: new Date("2023-06-25"),
                profile: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=',
                comment: 'Beautiful.',
                cleanliness: 4.7,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'niousha',
                date: new Date("2023-07-12"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU',
                comment: 'This place was great, the room and style of this place is everything. The host is friendly and safe.',
                cleanliness: 4.8,
                communication: 4.5,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'paloma',
                date: new Date("2023-08-19"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU',
                comment: 'Amazing place to stay. Cozy, clean and safe, the host is very helpful/friendly and I felt at home.',
                cleanliness: 4.5,
                communication: 4.9,
                checkIn: 5,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            },
            {
                from: 'lukas',
                date: new Date("2023-08-26"),
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU',
                comment: 'Exactly in the description, friendly and flexible host and lovely food at the place.',
                cleanliness: 4.8,
                communication: 4.7,
                checkIn: 4.8,
                accuracy: 4.9,
                location: 4.6,
                value: 5
            }
        ]
    }
]

export default locations