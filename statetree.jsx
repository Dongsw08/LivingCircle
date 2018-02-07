state = {
    currentPage: 'movie',
    movie: {
        isFetching: false,
        items: [
            {
                "id": "mov1",
                "src": "http://127.0.0.1:3000/assets/p2460006579.jpg",
                "alt": "神奇女侠",
                "title": "神奇女侠"
            },
            {
                "id": "mov2",
                "src": "http://127.0.0.1:3000/assets/p2494950699.jpg",
                "alt": "敦刻尔克",
                "title": "敦刻尔克"
            },
            {
                "id": "mov3",
                "src": "http://127.0.0.1:3000/assets/p2492917405.jpg",
                "alt": "十万个冷笑话2",
                "title": "十万个冷笑话2"
            },
            {
                "id": "mov4",
                "src": "http://127.0.0.1:3000/assets/p2496795397.jpg",
                "alt": "银魂",
                "title": "银魂"
            }
        ]
    },
    shopping: {
        isFetching: false,
        items: []
    },

    idInCart: ["mov1", "mov2", "fr1", "fr2", "cl1"],
    amountInCart: {
        "mov1": 1,
        "mov2": 1,
        "fr1": 2,
        "fr2": 3,
        "cl1": 2
    }
}


