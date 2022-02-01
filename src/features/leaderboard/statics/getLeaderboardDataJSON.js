const getLeaderboardDataJSON = {
  YEARLY_RANKINGS: {
    responseStatus: 'SUCCESS',
    responseMessage: '',
    errorMessage: '',
    messageBody: {
      yearlyRanking: [
        {
          yearlyPoint: 6000,
          userName: 'arohloff',
        },
        {
          yearlyPoint: 5500,
          profilePic: 'https://i.ibb.co/hKNKv9y/DP-3.jpg',
          userName: 'srohloff',
        },
        {
          yearlyPoint: 5000,
          profilePic: 'https://i.ibb.co/GpvG03M/Profile-1.png',
          userName: 'aseabury',
        },
        {
          yearlyPoint: 4000,
          userName: 'roldman',
        },
        {
          yearlyPoint: 3500,
          profilePic: 'https://i.ibb.co/BcYgfTg/DP-1.jpg',
          userName: 'lzobel',
        },
        {
          yearlyPoint: 3000,
          userName: 'fkeesee',
        },
        {
          yearlyPoint: 900,
          profilePic: 'https://i.ibb.co/x3GKX90/DP-6.png',
          userName: 'jgamble',
        },
        {
          yearlyPoint: 450,
          profilePic: 'https://i.ibb.co/GpvG03M/Profile-1.png',
          userName: 'rrebelo',
        },
        {
          yearlyPoint: 100,
          profilePic: 'https://i.ibb.co/nDZR6CV/DP-5.jpg',
          userName: 'lbourquin',
        },
        {
          yearlyPoint: 50,
          profilePic: 'https://i.ibb.co/bHJZWGW/DP-2.jpg',
          userName: 'rdunham',
        },
      ],
    },
  },

  PRIZE: {
    responseStatus: 'SUCCESS',
    responseMessage: '',
    errorMessage: '',
    messageBody: {
      prize: [
        {
          id: 1,
          prize: 1000,
          heading: 'Grilled Kitchen',
          description:
            'Grilled Items for you to explore and shae with your friends. Find out the recepies that you will love. Cooks are here for you to entertain',
          imageUrl:
            'https://d3mdd3kkwsasns.cloudfront.net/Prize/97768f66-0a1f-4b51-ba33-c6d6395e40e7.png',
        },
        {
          id: 2,
          prize: 5000,
          heading: 'Theme Park',
          description:
            'Chance to visit to the fun activity park. Try your luck here, these are here for you to entertain',
          imageUrl:
            'https://d3mdd3kkwsasns.cloudfront.net/Prize/99d9dd69-f8c3-497a-b099-f0c453274229.png',
        },
        {
          id: 3,
          prize: 5000,
          heading: 'Sky Diving Experience',
          description:
            "Chance to grab the sky diving offer. Height that you never seen before from which you will be doing it by the world's finest Trained professionals",
          imageUrl:
            'https://d3mdd3kkwsasns.cloudfront.net/Prize/06b65001-5480-4f49-9f0e-d1902d7eeceb.png',
        },
        {
          id: 4,
          prize: 3000,
          heading: 'Mac book pro',
          description:
            'Go get the finest laptop in the world. That is Macbook for Trained professionals',
          imageUrl:
            'https://d3mdd3kkwsasns.cloudfront.net/Prize/240e50e2-d2c2-4bb2-8865-b130a2627f55.png',
        },
        {
          id: 5,
          prize: 2500,
          heading: 'Dresden Historic place',
          description:
            'Get the glimpse of Historic place, enhance your knowledge in the area of history',
          imageUrl:
            'https://d3mdd3kkwsasns.cloudfront.net/Prize/7f8add08-e240-455d-a18f-7bc9e0787922.png',
        },
      ],
    },
  },

  ALL_LEVELS: {
    responseStatus: 'SUCCESS',
    responseMessage: '',
    errorMessage: '',
    messageBody: {
      levelInfo: [
        {
          id: 'rank1',
          level: 1,
          points: '[0, 99]',
          info:
            'Rank 1: Vestibulum dolor diam, rhoncus sed sem luctus, finibus mollis justo.',
        },
        {
          id: 'rank2',
          level: 2,
          points: '[100, 499]',
          info:
            'Rank 2: Vestibulum dolor diam, rhoncus sed sem luctus, finibus mollis justo.',
        },
        {
          id: 'rank3',
          level: 3,
          points: '[500, 999]',
          info:
            'Rank 3: Vestibulum dolor diam, rhoncus sed sem luctus, finibus mollis justo.',
        },
        {
          id: 'rank4',
          level: 4,
          points: '[1000, 4999]',
          info:
            'Rank 4: Vestibulum dolor diam, rhoncus sed sem luctus, finibus mollis justo.',
        },
        {
          id: 'rank5',
          level: 5,
          points: '[5000,9999999]',
          info:
            'Rank 5: Vestibulum dolor diam, rhoncus sed sem luctus, finibus mollis justo.',
        },
      ],
    },
  },
};

export default getLeaderboardDataJSON;
