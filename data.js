const banner = 'Boxman Adventure Travel Co.';

const greeting = [
  "These travel services have been specially tailored to celebrate Mark Boxman's 70th birthday.",
  "Suzie and Jared's gift to you is assistance planning and financing the trip of your dreams. All inclusive package details for the trips shown below!",
];

const services = [
  {
    title: 'Best Travel Agents',
    info:
      "Seriously. These agents have planned and executed trips around the world. They've seen some things.",
  },
  {
    title: 'Happy Clients',
    info:
      'Their customers just keep coming back for more. Suzie, Jared, and Penny have almost never been scared for their lives.',
  },
  {
    title: 'Amazing Tours',
    info:
      'We like to keep it personal and we plan trips for our customers like they are family. Prepare for awesome!',
  },
  {
    title: 'Handpicked Accomodations',
    info:
      'While Suzie and Jared often requested tents and hostels, we know that you will be looking for a little more comfort and luxury. We got you!',
  },
];

const tours = [
  {
    title: 'Family Trip to Maine',
    id: 'maine',
    info: [
      'Take a drive up to the beautiful Acadia National Park in Maine. There you can relax with the wonderful company of your wife and two children who will accompany you on this trip. Stay in a fabulous bed and breakfast like The Harbour Cottage Inn just steps from the harbor in Southwest Harbor, ME and a short distance away from Acadia National Park. You can spend your days watching the fishing boats off the coast or take a hike among the 47,000 acres of Acadia National Park.',
      'Our Maine tours include a day trip to any of the iconic lighthouses in Bar Harbor or Acadia National Park, such as the Baker Island Light House established in 1828, a day of adventure filled hiking on the trail of your choice in Acadia National Park, and a stroll through Bar Harbor to watch the boats and fishing vessels navigate the towns harbor.',
      'You can celebrate your birthday in style while visiting this beautiful coastal town.',
    ],
    images: [
      {
        src: './images/maine-lighthouse.jpg',
        alt: 'lighthouse',
      },
      {
        src: './images/maine-overhead.jpg',
        alt: 'overhead shot of harbor',
      },
      {
        src: './images/maine-chairs.jpg',
        alt: 'house with chairs',
      },
    ],
    card: {
      href: '#maine',
      src: './images/maine-flag.webp',
      alt: 'Maine flag',
      stars: 5,
    },
  },
  {
    title: 'Exotic Flyfishing Adventure',
    id: 'flyfishing',
    info: [
      'Do you dream of finally catching that big one? Are you looking to hike your way to the perfect stream, nestled among majestic mountains? Then this is the adventure for you. Our fly fishing package includes a guided fly fishing trip at the location of your choice. It could be that overlooked stream right in your backyard of western North Carolina, or something a bit further out for the chance of a lifetime to fish in Bighorn River, Montana.',
      'It turns out when you look for some of the best places in the U.S. to go fly fishing, there are states you would not have expected to be on the list. Perhaps you want to go back to your original fly fishing grounds of Pennsylvania, or maybe you’d like to take a trip to Arkansas because you’ve never been and it looks absolutely beautiful.',
      'Choices abound when it comes to fly fishing. Just pick the time and the location and you’ll have a guide, trip planned, and ticket to get there. You might just catch the “big one” with this birthday trip.',
    ],
    images: [
      {
        src: './images/flyfishing-cast.jpg',
        alt: 'flyfishermen casting',
      },
      {
        src: './images/flyfishing-river.jpg',
        alt: 'overhead shot of harbor',
      },
    ],
    card: {
      href: '#flyfishing',
      src: './images/flyfishing-rod.jpg',
      alt: 'Flyfishing Reel',
      stars: 5,
    },
  },
  {
    title: 'Trip to the Homeland',
    id: 'israel',
    info: [
      'Make that pilgrimage to the homeland and take in the culture, sights, and history of Israel. We won’t sugar coat it, this is far away, but pop a Xanax and you’ll be there before you know it. Our tour service has offered specials on this travel deal before, but maybe the price just hasn’t been good enough. So we’re offering it one last time at the low, low, low price of anything you want.',
      'You’ll get history, great food, and guides with a rudimentary knowledge of how to get around. It isn’t Europe (our experienced guides learned that first-hand), but it is civilized and safe. Our travel experts couldn’t find any non-stop flights unless you leave from Newark, but it might be possible to fly with 1 stop Raleigh to Newark to Tel Aviv.',
      'In Israel you can explore the Mediterranean coast of Tel Aviv and Haifa, wander the Old City in Jerusalem, and visit the rolling hills of the Galilee. As a relatively small country with only 6 hours driving from North to South there is much to explore.',
    ],
    images: [
      {
        src: './images/israel-beach.jpg',
        alt: 'israel beach',
      },
      {
        src: './images/israel-evening.jpg',
        alt: 'israel evening',
      },
      {
        src: './images/israel-country.jpg',
        alt: 'israel country',
      },
    ],
    card: {
      href: 'israel',
      src: './images/israel-flag.webp',
      alt: 'Israel',
      stars: 5,
    },
  },
  {
    title: 'New England Nautical Adventure',
    id: 'nautical',
    info: [
      'Our nautical tours offer a splash of saltwater and a breath of fresh air from your very own chartered boat. Whether you want to take it out for a day or a week, we can work it out for you. Coordinating with our very own privately retained captain we can sail up and down the New England coastline or meet him somewhere along the East Coast for a day trip.',
      'The initial consideration for this trip was to plan a trip to a scenic New England town and plan to cross paths with our captain for a day trip out on the water. The whole family can be included as we settle into a quaint coastal town and take trips out on the water at our pleasure.',
      'There are a few options here, but the theme is being out on a boat…',
    ],
    images: [
      {
        src: './images/nautical-sailboat.jpg',
        alt: 'sailboat',
      },
      {
        src: './images/nautical-kayak.jpg',
        alt: 'kayak',
      },
      {
        src: './images/nautical-frigate.jpg',
        alt: 'frigate',
      },
    ],
    card: {
      href: '#nautical',
      src: './images/nautical-onboard.jpg',
      alt: 'Yacht',
      stars: 5,
    },
  },
  {
    title: "It's a feast",
    id: 'feast',
    info: [
      'Well this is a bit of an oddball adventure isn’t it? There isn’t a whole lot here other than that I think we needed another picture to make the website work out. That being said, we could do a feast. If hunger is the name of the game, then we at Boxman Adventure Travel Co. have the meal for you.',
      'You want to become the ultimate grill master? Well we’ll find you a grilling class. You want to bedazzle your wife with newfound wine snobbery? Well we’ll find you a sommelier class. Or maybe you just want a fancy steak dinner? Then we’ll find the best steak in Western NC and spoon feed it to you (literally if need be).',
      '*Note this option can be combined with other adventures and should not be considered an adventure in itself.',
    ],
    images: [
      {
        src: './images/feast-steak.jpg',
        alt: 'steak',
      },
      {
        src: './images/feast-wine.jpg',
        alt: 'wine',
      },
    ],
    card: {
      href: '#feast',
      src: './images/feast-hall.png',
      alt: 'Viking Feast',
      stars: 5,
    },
  },
  {
    title: "Birthday Guy's Choice",
    id: 'choice',
    info: [
      'Don’t like any of these choices? Well then tell us what you want and we’ll plan it. Our specialized services can plan any trip of any duration to any location. We can harness the power of the internet to make the adventure of your dreams come true!',
    ],
    images: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png',
        alt: 'question mark',
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png',
        alt: 'question mark',
      },
    ],
    card: {
      href: '#choice',
      src: './images/question-mark.png',
      alt: 'Question Mark',
      stars: 5,
    },
  },
];

const survey = [
  'Maine!',
  'Fly Fishing!',
  'Israeli!',
  'Nautical!',
  'Feast!',
  'Other!',
];

const footer = {
  trademark: {
    src:
      'https://www.pngkit.com/png/detail/288-2888122_compass-clipart-blank-dibujo-de-rosa-de-los.png',
    alt: 'compass rose logo',
    name: 'Boxman Adventure Travel Co.',
  },
  contact: {
    header: 'Contact Info',
    address1: '1234 Big Ol Trip Ln',
    address2: 'Funville, Anywhere 98765',
    email: 'marks70th@celebrate.you',
  },
};
