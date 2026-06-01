/* ================================================================
   HOT N TASTY ROLL — Assets & Data
   All static data: images, menu items, deals, testimonials
================================================================ */

// Menu Data
const menu = [
  {
    category: "SHAPATAR SPECIAL JUMBO ROLLS",
    items: [
      { name: "Shapatar Special Jumbo Roll", price: 320 },
      { name: "Crispy Spicy Jumbo Roll", price: 300 },
      { name: "Crispy Spicy Jumbo Roll Cheese", price: 350 },
      { name: "Crispy Jumbo Chatpata Roll", price: 300 },
      { name: "Small Crispy Roll", price: 200 }
    ]
  },
  {
    category: "CHICKEN ROLLS",
    items: [
      { name: "Chicken Chatni Roll", price: 180 },
      { name: "Chicken Mayo Garlic Roll", price: 200 },
      { name: "Chicken Cheese Roll", price: 230 },
      { name: "Chicken Behari Chatni Roll", price: 220 },
      { name: "Chicken Behari Cheese Roll", price: 250 },
      { name: "Chicken Juicy Mayo Roll", price: 220 },
      { name: "Chicken Chatpata Roll", price: 200 },
      { name: "Chicken Spicy Roll", price: 200 },
      { name: "Chicken Reshmi Kabab Chatni Roll", price: 220 },
      { name: "Chicken Reshmi Garlic Mayo Roll", price: 240 },
      { name: "Chicken Reshmi Cheese Roll", price: 270 },
      { name: "Chicken Reshmi Chatpata Roll", price: 240 },
      { name: "Chicken Reshmi Behari Chatni Roll", price: 250 },
      { name: "Chicken Reshmi Juicy Mayo Roll", price: 240 },
      { name: "Chicken Reshmi Behari Mayo Roll", price: 250 },
      { name: "Chicken Reshmi Behari Cheese Roll", price: 280 }
    ]
  },
  {
    category: "CHICKEN MALAI ROLLS",
    items: [
      { name: "Chicken Malai Chatni Roll", price: 240 },
      { name: "Chicken Malai Garlic Roll", price: 260 },
      { name: "Chicken Malai Mayo Cheese Roll", price: 310 },
      { name: "Chicken Malai Behari Roll", price: 280 },
      { name: "Chicken Juicy Malai Roll", price: 260 },
      { name: "Chicken Malai Chatpata Roll", price: 260 },
      { name: "Chicken Malai Behari Cheese Roll", price: 310 },
      { name: "Chicken Malai Spicy Mayo Roll", price: 280 }
    ]
  },
  {
    category: "BEEF BOTI ROLLS",
    items: [
      { name: "Beef Boti Roll", price: 220 },
      { name: "Beef Mayo Roll", price: 240 },
      { name: "Beef Cheese Roll", price: 270 },
      { name: "Beef Chatpata Roll", price: 240 },
      { name: "Beef Behari Roll", price: 250 },
      { name: "Beef Juicy Roll", price: 240 },
      { name: "Beef Spicy Roll", price: 240 }
    ]
  },
  {
    category: "BEEF KABAB ROLLS",
    items: [
      { name: "Beef Kabab Chatni Roll", price: 200 },
      { name: "Beef Kabab Mayo Roll", price: 220 },
      { name: "Beef Kabab Cheese Roll", price: 250 },
      { name: "Beef Kabab Chatpata Roll", price: 220 },
      { name: "Beef Kabab Behari Chatpata Roll", price: 240 },
      { name: "Beef Kabab Behari Chatni Roll", price: 240 },
      { name: "Beef Kabab Behari Mayo Cheese Roll", price: 290 },
      { name: "Beef Kabab Spicy Roll", price: 220 }
    ]
  },
  {
    category: "BAR B.Q",
    items: [
      { name: "Chicken Tikka (Leg)", price: 280 },
      { name: "Chicken Tikka (Chest)", price: 320 },
      { name: "Green Tikka", price: 320 },
      { name: "Malai Tikka", price: 340 },
      { name: "Chicken Malai Boti Plate", price: 380 },
      { name: "Chicken Boti Plate", price: 360 },
      { name: "Beef Boti Plate", price: 380 },
      { name: "Beef Kabab Plate", price: 350 },
      { name: "Beef Gola Kabab Plate", price: 370 },
      { name: "Malai Fry Boti", price: 400 },
      { name: "Dhaga Kabab", price: 370 },
      { name: "Chicken Reshmi Kabab", price: 360 },
      { name: "Chicken Makhni Kabab", price: 380 },
      { name: "Chandan Kabab", price: 390 },
      { name: "Green Boti", price: 360 },
      { name: "Namkeen Tikka", price: 340 },
      { name: "Turkish Kabab", price: 380 },
      { name: "Chicken Behari Tikka (Chest)", price: 340 },
      { name: "Chicken Behari Tikka (Leg)", price: 300 }
    ]
  },
  {
    category: "BURGERS",
    items: [
      { name: "Regular Beef Burger", price: 250 },
      { name: "Beef Cheese Burger", price: 300 },
      { name: "Beef Jumbo Burger", price: 350 },
      { name: "Beef Jumbo Cheese Burger", price: 400 },
      { name: "Chicken Burger", price: 220 },
      { name: "Chicken Cheese Burger", price: 270 },
      { name: "Chicken Big Burger", price: 300 },
      { name: "Chicken Big Burger Cheese", price: 350 }
    ]
  },
  {
    category: "ZINGER BURGER",
    items: [
      { name: "Junior Zinger", price: 280 },
      { name: "King Size Zinger Burger", price: 380 },
      { name: "Zinger Cheese Burger", price: 340 },
      { name: "Zinger Jumbo Cheese", price: 420 },
      { name: "Chicken Jumbo Zinger", price: 400 }
    ]
  },
  {
    category: "SUB BURGER",
    items: [
      { name: "Sub Burger Malai Boti", price: 320 },
      { name: "Sub Burger Tikka Boti", price: 300 },
      { name: "Sub Burger Reshmi Kabab", price: 310 },
      { name: "Sub Burger Seekh Kabab", price: 290 }
    ]
  },
  {
    category: "PIZZA",
    items: [
      { name: "Chicken Tikka", price: 600 },
      { name: "Chicken Fajita", price: 650 },
      { name: "Chicken Supreme", price: 750 },
      { name: "Chicken Achari", price: 680 },
      { name: "Chicken Afghani", price: 700 },
      { name: "Cheese Lover", price: 550 }
    ]
  },
  {
    category: "CHINESE",
    items: [
      { name: "Chicken Fried Rice", price: 350 },
      { name: "Egg Fried Rice", price: 300 },
      { name: "Vegetable Fried Rice", price: 280 },
      { name: "Masala Rice", price: 320 },
      { name: "Special Hot N Tasty Fried Rice", price: 420 },
      { name: "Chicken Chowmen", price: 350 },
      { name: "Vegetable Chowmen", price: 300 },
      { name: "Hot N Tasty Special Chowmen", price: 420 },
      { name: "Chicken Shahslik With Rice", price: 400 },
      { name: "Chicken Manchurian With Rice", price: 380 },
      { name: "Singapori Rice", price: 370 },
      { name: "Chicken Chilli With Rice", price: 380 },
      { name: "Chicken Chilli Dry With Rice", price: 400 },
      { name: "Chicken Jalfrezi", price: 420 }
    ]
  },
  {
    category: "BROAST",
    items: [
      { name: "Chicken Broast Qtr. Leg", price: 320 },
      { name: "Chest Broast Qtr. Chest", price: 340 },
      { name: "Chicken Cheese Broast Qtr. Chest", price: 390 },
      { name: "Mayo Garlic Broast Qtr. Chest", price: 390 },
      { name: "Chicken Broast Qtr. Chatpata (Chest)", price: 360 },
      { name: "Chicken Broast Chatpata Qtr. (Leg)", price: 340 },
      { name: "Chicken Broast Full", price: 1100 },
      { name: "Chicken Broast Half", price: 600 }
    ]
  },
  {
    category: "WINGS & DRUMSTICKS",
    items: [
      { name: "Hot Tasty Wings with Fries (6 Pcs)", price: 450 },
      { name: "Hot Tasty Wings with Fries (3 Pcs)", price: 280 },
      { name: "Chicken Drum Stick with Fries (6 Pcs)", price: 480 },
      { name: "Chicken Drum Stick with Fries (3 Pcs)", price: 300 }
    ]
  },
  {
    category: "SANDWICHES",
    items: [
      { name: "Chicken Sandwich", price: 250 },
      { name: "Chicken Club Sandwich", price: 320 },
      { name: "Chicken BBQ Sandwich", price: 280 },
      { name: "Chicken BBQ Club Sandwich", price: 350 },
      { name: "Chicken Malai Club Sandwich", price: 350 },
      { name: "Chicken Malai Sandwich", price: 300 },
      { name: "Crispy Club Sandwich", price: 350 }
    ]
  },
  {
    category: "KARAHI & HANDI",
    items: [
      { name: "Chicken Karahi", price: 800 },
      { name: "Chicken Brown Karahi", price: 850 },
      { name: "Chicken Shahi Karahi", price: 900 },
      { name: "Chicken White Karahi", price: 900 },
      { name: "Chicken Achari Karahi", price: 850 },
      { name: "Chicken Handi", price: 800 },
      { name: "Chicken Brown Handi", price: 850 },
      { name: "Chicken Makhni Handi", price: 900 }
    ]
  },
  {
    category: "PASTA",
    items: [
      { name: "Chicken Tikka Pasta", price: 380 },
      { name: "Creamy Pasta Small", price: 350 },
      { name: "Creamy Pasta Large", price: 550 }
    ]
  },
  {
    category: "FRIES",
    items: [
      { name: "Regular Fries", price: 150 },
      { name: "Masala Fries", price: 180 },
      { name: "Cheese Fries", price: 230 },
      { name: "Mayo Fries", price: 200 },
      { name: "Small Pizza Fries", price: 280 },
      { name: "Large Pizza Fries", price: 450 }
    ]
  },
  {
    category: "EXTRAS",
    items: [
      { name: "Paratha Small", price: 40 },
      { name: "Paratha Big", price: 60 },
      { name: "Chapati", price: 30 },
      { name: "Mayo Garlic Sauce", price: 80 },
      { name: "Coleslaw", price: 100 },
      { name: "Dinning Roti (Bun)", price: 50 },
      { name: "Chilli Sauce", price: 60 },
      { name: "Cheese Slice", price: 70 }
    ]
  },
  {
    category: "DRINKS",
    items: [
      { name: "Cold Drink 350ml", price: 100 },
      { name: "Cold Drink 500ml", price: 120 },
      { name: "Cold Drink 1 Ltr", price: 150 },
      { name: "Cold Drink 1.5 Ltr", price: 200 },
      { name: "Mineral Water Small", price: 60 },
      { name: "Mineral Water Large", price: 100 }
    ]
  }
];

// Deals Data
const deals = [
  {
    id: 1,
    name: "Deal 01",
    price: 650,
    items: [
      "1 King Zinger Burger",
      "1 Mayo Roll",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 2,
    name: "Deal 02",
    price: 710,
    items: [
      "1 Beef Burger",
      "1 Ch Broast (Leg)",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 3,
    name: "Deal 03",
    price: 660,
    items: [
      "1 Crispy Broast Leg (Qtr)",
      "1 Chicken Garlic Roll",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 4,
    name: "Deal 04",
    price: 800,
    items: [
      "1 Chicken Big Burger",
      "1 Chicken Behari Tikka Leg",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 5,
    name: "Deal 05",
    price: 950,
    items: [
      "1 Mega Zinger Burger",
      "1 Chicken Malai Mayo Roll",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 6,
    name: "Deal 06",
    price: 620,
    items: [
      "1 King Size Zinger Burger",
      "1 Half Club Sandwich",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 7,
    name: "Deal 07",
    price: 700,
    items: [
      "1 Qtr. Broast Leg",
      "1 Half Club Sandwich",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 8,
    name: "Deal 08",
    price: 500,
    items: [
      "1 Beef Burger",
      "1 Chicken Roll",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 9,
    name: "Deal 09",
    price: 580,
    items: [
      "1 Junior Zinger Burger",
      "1 Ch Chatni Roll",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 10,
    name: "Deal 10",
    price: 850,
    items: [
      "1 King Size Zinger Burger",
      "1 Qtr. Broast Leg",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 11,
    name: "Deal 11",
    price: 500,
    items: [
      "1 Chicken Burger",
      "1 Beef Boti Roll",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 12,
    name: "Deal 12",
    price: 1900,
    items: [
      "4 Chicken Roll",
      "3 Beef Roll",
      "2 Mayo Roll"
    ]
  },
  {
    id: 13,
    name: "Deal 13",
    price: 840,
    items: [
      "1 Beef Boti Plate",
      "1 Beef Roll",
      "1 Small Paratha",
      "Chatni Salad"
    ]
  },
  {
    id: 14,
    name: "Deal 14",
    price: 1060,
    items: [
      "1 Plate Beef Boti",
      "1 Plate Beef Kabab",
      "2 Small Paratha",
      "Chatni Salad"
    ]
  },
  {
    id: 15,
    name: "Deal 15",
    price: 1330,
    items: [
      "2 Chicken Tikka Leg",
      "2 Small Paratha",
      "2 Ch Mayo Roll",
      "Raita Salad"
    ]
  },
  {
    id: 16,
    name: "Deal 16",
    price: 610,
    items: [
      "1 Chicken Tikka (Leg)",
      "1 Small Paratha",
      "1 Beef Roll",
      "Raita Salad"
    ]
  },
  {
    id: 17,
    name: "Deal 17",
    price: 1050,
    items: [
      "1 Plate Reshmi Kabab",
      "1 Plate Malai Boti",
      "2 Small Paratha",
      "Chatni Raita"
    ]
  },
  {
    id: 18,
    name: "Deal 18",
    price: 730,
    items: [
      "1 Plate Chicken Boti",
      "1 Ch Mayo Roll",
      "1 Small Paratha",
      "Salad Raita"
    ]
  },
  {
    id: 19,
    name: "Deal 19",
    price: 730,
    items: [
      "1 Plate Reshmi Kabab",
      "1 Small Paratha",
      "1 Mayo Roll",
      "Raita Salad"
    ]
  },
  {
    id: 20,
    name: "Deal 20",
    price: 450,
    items: [
      "1 Small Pizza",
      "1 Cold Drink 300ml"
    ]
  },
  {
    id: 21,
    name: "Deal 21",
    price: 830,
    items: [
      "1 Regular Pizza",
      "1 Cold Drink 500ml"
    ]
  },
  {
    id: 22,
    name: "Deal 22",
    price: 1300,
    items: [
      "1 Large Pizza",
      "1 Cold Drink 1.5 ltr"
    ]
  },
  {
    id: 23,
    name: "Deal 23",
    price: 1650,
    items: [
      "1 Jumbo Pizza",
      "1 Cold Drink 1.5 ltr"
    ]
  },
  {
    id: 24,
    name: "Deal 24",
    price: 670,
    items: [
      "1 BBQ Sandwich",
      "1 Chicken Juicy Roll",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 25,
    name: "Deal 25",
    price: 630,
    items: [
      "1 Club Sandwich",
      "1 Mayo Roll",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 26,
    name: "Deal 26",
    price: 820,
    items: [
      "1 Club Sandwich",
      "1 Zinger Burger",
      "Fries",
      "Coleslaw"
    ]
  },
  {
    id: 27,
    name: "Family Deal 01 BBQ",
    price: 2750,
    items: [
      "1 Malai Boti Plate",
      "1 Beef Boti Plate",
      "1 Reshmi Kabab Plate",
      "1 Seekh Kabab Plate",
      "1 Behari Tikka Plate",
      "10 Small Paratha",
      "1 Cold Drink 1.5 ltr"
    ]
  },
  {
    id: 28,
    name: "Family Deal 02",
    price: 2600,
    items: [
      "2 Zinger",
      "2 Qtr Leg",
      "2 Tikka Leg",
      "2 Small Paratha",
      "1 Cold Drink 1.5 ltr",
      "Raita+Salad"
    ]
  },
  {
    id: 29,
    name: "Special BBQ Platter",
    price: 2350,
    items: [
      "1 Seekh Malai Boti",
      "1 Seekh Makhmali Kabab",
      "1 Seekh Reshmi Kabab",
      "1 Seekh Beef Boti",
      "1 Seekh Kabab",
      "1 Tikka Leg Pcs",
      "10 Small Paratha",
      "1 Cold Drink 1.5 ltr"
    ]
  }
];
// Deal Images
const dealImages = {
  1: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format",
  2: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format",
  3: "https://thegastronaut.businesswala.pk/assets/uploads/9c4b33bb6568232ba00958e3edcd0c49.png",
  4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPn0vJ74pc5BvynU8bTbhzlY7ta5Cf-p4RA&s",
  5: "https://services.eatx.pk//ProductImages/cd2b92e7-fd72-42d6-bfb1-bf4799ebf5b4.jpeg",
  6: "https://services.eatx.pk//ProductImages/cd2b92e7-fd72-42d6-bfb1-bf4799ebf5b4.jpeg",
  7: "https://www.eatingwell.com/thmb/cwCxxIpDoKC8cQk7cTnY9FpyDE4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Veggie--Cream-Cheese-Sandwich-Beauty-1x1-56919_preview_maxWidth_4000_maxHeight_4000_ppi_300_quality_100-fdb2de8c05234e5a97f37fa3ad485220.jpg",
  8: "https://www.shutterstock.com/image-photo/fried-chicken-burger-coleslaw-pickles-600nw-2601285017.jpg",
   9:"https://ik.imagekit.io/iwcam3r8ka/prod/blog-header/202410/55d1668b-dd11-45cc-a2b8-c95c9bcce76b.jpg",
   10:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaZjhUZSqGGDqVtiPMwOTszTYqPwUfrjz0g&s",
   11:"https://thumbs.dreamstime.com/b/two-different-burgers-boxes-chicken-roll-vegetables-paper-sheet-vertical-view-179365919.jpg",
   12:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2xhw3yKzUtAtifr0Rx1Fjy8OBDl5IsqhUg&s",
   13:"https://www.shutterstock.com/image-photo/beef-bihari-boti-salad-600nw-2525129159.jpg",
   14:"https://kitchendiariesbyzubda.com/wp-content/uploads/2025/05/IMG_1820-819x1024.jpg",
   15:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvdOYf6iPeDGimytLkdBFzeJ_3BWC3zmrLQ&s",
   16:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNtqf3USTsUGzvRTgX8SLospAyvQs_PNL5Q&s",
   17:"https://i0.wp.com/blendofspicesbysara.com/wp-content/uploads/2021/04/PXL_20210403_202602593.PORTRAIT-01.jpeg?resize=800%2C840&ssl=1",
   18:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNVc9AQQvaSFRA5TRfKF8HbCCr4MvAEQyig&s",
   19:"https://i.ytimg.com/vi/zM1qjHTlVy8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJJhvpiojJXk3G6HZjD3A9uBxpUQ",
   20:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFedlpTNDwEF4ajz2z_ggLVLez_r6EYBVHQ&s",
   21:"https://amblerpizza.com/wp-content/uploads/2023/02/unnamed-1024x682.jpeg",
   22:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nBejpC-AeSaXCfl0toEsUriAzL4NHug6iQ&s",
   23:"https://tb-static.uber.com/prod/image-proc/processed_images/2f5918c9461da108cb4c89931d29171d/63d18745892c100be9e4ef3c560c9204.jpeg",
   24:"https://challengedairy.com/wp-content/uploads/recipe-bbq-pulled-pork-sandwich-2280.webp",
   25:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4EN1TRCx8feZqxlkyqDTzqLNeuOufwBLow&s",
   26:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZTI_z4c5Vqq1Gk2mn9_aRe-r8ATf8-xWpQ&s",
   27:"https://butteroverbae.com/wp-content/uploads/2025/04/chicken-malai-boti.jpg",
   28:"https://www.celebrationinmykitchen.com/uploads/4/8/6/2/48622077/zinger-burger3_orig.jpg"
};

// Menu Item Images
const itemImages = {
  // SHAPATAR SPECIAL JUMBO ROLLS
  'Shapatar Special Jumbo Roll': 'https://img.freepik.com/premium-photo/beef-shawarma-dark-background-shawarma-with-beef-pita-bread_135427-9077.jpg?semt=ais_hybrid&w=740&q=80',
  'Crispy Spicy Jumbo Roll': 'https://assets.indolj.io/upload/1765524508-Zinger%20jumbo%20Roll.webp',
  'Crispy Spicy Jumbo Roll Cheese': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3k_wcPKoE262guR1lRutuL6FyoKngKxC23tTtktiDeIFcMj_y6K-5EqOxHChC',
  'Crispy Jumbo Chatpata Roll': 'https://www.tablefortwoblog.com/wp-content/uploads/2023/01/crispy-spring-rolls-recipe-photo-tablefortwoblog-12-scaled.jpg',
  'Small Crispy Roll': 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg',

  // CHICKEN ROLLS
  'Chicken Chatni Roll': 'https://bakewithzoha.com/wp-content/uploads/2024/03/chicken-tikka-paratha-rolls-14-scaled.jpg',
  'Chicken Mayo Garlic Roll': 'https://www.morselmint.com/wp-content/uploads/2026/02/Cheesy_Garlic_Chicken_Wraps_n5uzld.webp',
  'Chicken Cheese Roll': 'https://easychickenrecipes.com/wp-content/uploads/2024/05/boursin-chicken-roll-ups-recipe-2.jpg',
  'Chicken Behari Chatni Roll': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GDkMOfGfgog2eTkDTUopVf9GAKO9Xx4OWsphupN4XVUjoBNybF9rcw2DHIqi',
  'Chicken Behari Cheese Roll': 'https://images.deliveryhero.io/image/fd-pk/LH/vgye-hero.jpg?width=512&height=384&quality=45',
  'Chicken Juicy Mayo Roll': 'https://www.shutterstock.com/image-photo/egg-chicken-roll-popular-street-600nw-2639619989.jpg',
  'Chicken Chatpata Roll': 'https://www.shutterstock.com/image-photo/selective-focus-indian-food-paneer-600nw-2441817529.jpg',
  'Chicken Spicy Roll': 'https://lh4.googleusercontent.com/proxy/EG-kWc7b5gqVrXOriIpVK4ao-jNHc5WfpDzv2g0PV_yIhzAl4tAXAy_9q69f00QG-3odYcWYf2jb7keCIUv5DCp2xp16tSMiXnpn',
  
  // CHICKEN RESHMI ROLLS
  'Chicken Reshmi Kabab Chatni Roll': 'https://mirchihut.pk/wp-content/uploads/2020/10/Chicken-Reshmi-Kabab.jpg',
  'Chicken Reshmi Garlic Mayo Roll': 'https://mirchihut.pk/wp-content/uploads/2020/09/Chicken-roll.jpg',
  'Chicken Reshmi Cheese Roll': 'https://i.ytimg.com/vi/hu4c0wvw5jM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAWF3U9aLajEQReqQu65PrgUpu7gA',
  'Chicken Reshmi Chatpata Roll': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpuDKp9p9GK2kz36BAB2W27cLJyPyo13byA&s',
  'Chicken Reshmi Behari Chatni Roll': 'https://i.ytimg.com/vi/VRL771RLcPU/maxresdefault.jpg',
  'Chicken Reshmi Juicy Mayo Roll': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFoPVgHrps1vSqoySJClH7UxWoLKAcTLtSQ&s',
  'Chicken Reshmi Behari Mayo Roll': 'https://i.ytimg.com/vi/VRL771RLcPU/maxresdefault.jpg',   
  'Chicken Reshmi Behari Cheese Roll': 'https://ranveerbrar.com/wp-content/uploads/2021/02/chicken-burrito-1-scaled-scaled.jpg',
  
  // CHICKEN MALAI ROLLS
  'Chicken Malai Chatni Roll': 'https://cukkoosdeli.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-19-at-1.16.14-PM.jpeg',
  'Chicken Malai Garlic Roll': 'https://www.flourandspiceblog.com/wp-content/uploads/2021/05/IMG_2742.jpg',
  'Chicken Malai Mayo Cheese Roll': 'https://ritefrozenfoods.pk/wp-content/uploads/2025/03/WhatsApp-Image-2026-02-09-at-8.01.21-PM-1.jpeg',
  'Chicken Malai Behari Roll': 'https://images.deliveryhero.io/image/fd-pk/LH/p1mi-listing.jpg',
  'Chicken Juicy Malai Roll': 'https://nabeelafoodhub.com/wp-content/uploads/2024/03/paratha-roll.jpeg',
  'Chicken Malai Chatpata Roll': 'https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/chicken-kathi-roll-chicken-frankie.jpg',
  'Chicken Malai Behari Cheese Roll': 'https://www.unileverfoodsolutions.pk/dam/global-ufs/mcos/meps/pakistan/calcmenu/recipes/PK-recipes/sandwiches/garlic-mayo-roll/main-header.jpg',
  'Chicken Malai Spicy Mayo Roll': 'https://www.sugarspicenmore.com/wp-content/uploads/2023/05/Chicken-Paratha-Roll-5.jpg',

  // BEEF BOTI ROLLS
  'Beef Boti Roll': 'https://foodaazz.com/wp-content/uploads/2023/10/61534315-387f-4676-a500-197a626ee93a-1.jpeg',
  'Beef Mayo Roll': 'https://order.waheedkabab.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1753997373-kabab-roll.jpg&w=3840&q=75',
  'Beef Cheese Roll': 'https://homefoodie.com.ph/uploads/Magnolia%20Meal%20Planner%20Images%20-%20New/Magnolia-Enchilada_074.jpg',
  'Beef Chatpata Roll': 'https://i.ytimg.com/vi/yexqciEbvdg/maxresdefault.jpg',
  'Beef Behari Roll': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxmwE7nWn-m18Te4nt4Y65WOk8qj4VElD1g&s',
  'Beef Juicy Roll': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnN9LcztUUntbVn_C7813yci3LDj0Ov8i0w&s',
  'Beef Spicy Roll': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtfgkJNoc5k2-fIygDidXRXRoo2y0Rnanvw&s',

  // BEEF KABAB ROLLS
  'Beef Kabab Chatni Roll': 'https://images.food52.com/aOM2Tx8Efi8H24nHXGn4A5Qng2g=/a0247e36-ea75-4436-92ee-85a8009c32b2--2021-0427_kathi-kebab-roll_3x2_mark-weinberg-141.jpg?w=3840&q=75',
  'Beef Kabab Mayo Roll': 'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/nlmbxhpk/e12960b5-9fd2-4276-95fa-610d36d36bf9.jpg',
  'Beef Kabab Cheese Roll': 'https://mirchnspicy.com/wp-content/uploads/2025/11/Beef-Kabab-Jumbo-Cheese-Roll.webp',
  'Beef Kabab Chatpata Roll': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YKRg6Y9veCsA0WVO-Yml-Qdi9jad5iGpWQ&s',
  'Beef Kabab Behari Chatpata Roll': 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/c1c644b38fbd37b8ac56e77445a2f7df',
  'Beef Kabab Behari Chatni Roll': 'https://foodaazz.com/wp-content/uploads/2023/10/995c17b6-b863-41a9-9c9f-89b3e32605da-1.jpeg',
  'Beef Kabab Behari Mayo Cheese Roll': 'https://hot-nspicy.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1769240742-WhatsApp%20Image%202026-01-24%20at%201.55.53%20AM_11zon.webp%3Fq%3D10&w=3840&q=75',
  'Beef Kabab Spicy Roll': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOu5-JGORZOL_10RRkLYmoGqJd9hOQHvEOw&s',

  // BAR B.Q
  'Chicken Tikka (Leg)': 'https://i.ytimg.com/vi/4pdul_dURpw/sddefault.jpg',
  'Chicken Tikka (Chest)': 'https://zaiqabazaar.com/wp-content/uploads/2025/02/a0f20-chicken-tikka-chest-piece.jpg',
  'Green Tikka': 'https://www.burlapandbarrel.com/cdn/shop/articles/20221016055557-paneer-20green-20tikka.jpg?v=1710893044&width=480',
  'Malai Tikka': 'https://untoldrecipesbynosheen.com/wp-content/uploads/2024/05/malai-chicken-tikka-featured-500x500.jpg',
  'Chicken Malai Boti Plate': 'https://img.freepik.com/premium-photo/chicken-malai-tikka-boti-served-plate-isolated-table-top-view-indian-pakistani-spicy-food_689047-4029.jpg',
  'Chicken Boti Plate': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1sd55MgnL5cabJ4Yg8gdUaWSuK5irFIIJQ&s',
  'Beef Boti Plate': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bEpLSBoNn5A2TAuapd-bxmHmwf5g8xn6Bg&s',
  'Beef Kabab Plate': 'https://mirchihut.pk/wp-content/uploads/2020/10/beef-seekh-kabab.jpg',
  'Beef Gola Kabab Plate': 'https://mirchihut.pk/wp-content/uploads/2020/10/Chicken-gola-kabab.jpg',
  'Malai Fry Boti': 'https://i.ytimg.com/vi/EZQ_ZtfCoes/maxresdefault.jpg',
  'Dhaga Kabab': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdOJtrHwrZnWhV9QlQa5-0znLc5XKEwTylIg&s',
  'Chicken Reshmi Kabab': 'https://i0.wp.com/blendofspicesbysara.com/wp-content/uploads/2021/04/PXL_20210403_202602593.PORTRAIT-01.jpeg?fit=%2C&ssl=1',
  'Chicken Makhni Kabab': 'https://i.ytimg.com/vi/-QLbWClgUdY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmBveas6rGUMY8mxvTq5IzEQiGqA',
  'Chandan Kabab': 'https://www.bonappeteach.com/wp-content/uploads/2020/08/Grilled-Butter-Chicken-Kebabs-1-1-scaled.jpg',
  'Green Boti': 'https://i.ytimg.com/vi/IRt22EDYppQ/maxresdefault.jpg',
  'Namkeen Tikka': 'https://i.ytimg.com/vi/2v5xw65CHdM/maxresdefault.jpg',
  'Turkish Kabab': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFj8P9SI7SpUt3QGICP1fKLZVerB0NTDlW3A&s',
  'Chicken Behari Tikka (Chest)': 'https://butteroverbae.com/wp-content/uploads/2024/07/Bihari-chicken-tikka-recipe-card.jpg',
  'Chicken Behari Tikka (Leg)': 'https://akazfoods.businesswala.pk/assets/uploads/1478_b045a15b37cabc5537d4f68d44c6fd4d.png',

  // BURGERS
  'Regular Beef Burger': 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg',
  'Beef Cheese Burger': 'https://images.arla.com/recordid/C2988878-79A5-4917-B4E94026A7F77B9B/kraft-x-hassans-juicy-beef-burger-special-edition.jpg',
  'Beef Jumbo Burger': 'https://makanifoods.com/cdn/shop/files/980422.jpg?v=1703925343&width=2000',
  'Beef Jumbo Cheese Burger': 'https://www.shutterstock.com/image-photo/studio-shot-diner-style-burger-600nw-2725579719.jpg',
  'Chicken Burger': 'https://www.thecookingcollective.com.au/wp-content/uploads/2025/03/chicken-burgers-5-of-14-500x500.jpg',
  'Chicken Cheese Burger': 'https://www.fivehearthome.com/wp-content/uploads/2025/08/Chicken-Burger-Recipe_1200pxFeatured-1.jpg',
  'Chicken Big Burger': 'https://globalmartpk.com/cdn/shop/files/Albaik-Big-Baik-Chicken-Burger-Pre-Order-SF-Traders-1251.jpg?v=1703176365',
  'Chicken Big Burger Cheese': 'https://www.shutterstock.com/image-photo/chiken-patty-burger-cheese-600nw-2587422423.jpg',

  // ZINGER BURGERS
  'Junior Zinger': 'https://static.tossdown.com/images/a1c30559-43b1-4fc9-8c0b-04aa06c28324.webp',
  'King Size Zinger Burger': 'https://b.zmtcdn.com/data/dish_photos/421/418e7dc325cf65d7c1d9faab2e646421.jpeg',
  'Zinger Cheese Burger': 'https://mirchihut.pk/wp-content/uploads/2020/09/zinger-cheese-burger.jpg',
  'Zinger Jumbo Cheese': 'https://www.shutterstock.com/image-photo/zinger-burger-mega-cheese-fries-600nw-2395280589.jpg',
  'Chicken Jumbo Zinger': 'https://i.pinimg.com/564x/db/40/76/db4076314df0396db67a5da459546f34.jpg',

  // SUB BURGER
  'Sub Burger Malai Boti': 'https://5.imimg.com/data5/SELLER/Default/2023/7/328145278/YI/TR/TE/230579/chk-tikka-burger-165.jpg',
  'Sub Burger Tikka Boti': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFF3yVoRk5za9NSj2Fy_21jhwdDydYj5dbOA&s',
  'Sub Burger Reshmi Kabab': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroD_anQIY2guVWmm2rWVB_-ZO99T8Yh2i-A&s',
  'Sub Burger Seekh Kabab': 'https://i0.wp.com/lovelaughmirch.com/wp-content/uploads/2022/06/Masala-Kebab-Burgers-1.jpg?resize=650%2C975&ssl=1',

  // PIZZA
  'Chicken Tikka': 'https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw=',
  'Chicken Fajita': 'https://static.tossdown.com/images/7c7838da-0e20-487f-afa6-3da96555ad88.webp',
  'Chicken Supreme': 'https://static.tossdown.com/images/3caf0887-badd-48ca-b5c2-8815063d4e9f.webp',
  'Chicken Achari': 'https://151745025.cdn6.editmysite.com/uploads/1/5/1/7/151745025/OP2YEP54VMD5MYWY4AUKW3QZ.jpeg',
  'Chicken Afghani': 'https://i.ytimg.com/vi/UKBy6LBvKqU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJnjhFxLcdXwCJcVHVq7Zr8YUYLQ',
  'Cheese Lover': 'https://www.homeruninnpizza.com/wp-content/uploads/2023/02/CheeseLovers_MediaTextBlock.jpg',

  // CHINESE
  'Chicken Fried Rice': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMAfXx8BQs0VKUcMDuY799kKoiJnqJgkdgQ&s',
  'Egg Fried Rice': 'https://www.seriouseats.com/thmb/BJjCEDw9OZe95hpZxmNcD3rJnHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230529-SEA-EggFriedRice-AmandaSuarez-hero-c8d95fbf69314b318bc279159f582882.jpg',
  'Vegetable Fried Rice': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTey292Onfpb2JbRzo1wv8J0Q8UNaiL552fhg&s',
  'Masala Rice': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGAmhrnER7bKQK3OxoCHe27YJlD9K9ss6RA&s',
  'Special Hot N Tasty Fried Rice': 'https://www.sharmispassions.com/wp-content/uploads/2013/04/EggFriedRice4-500x500.jpg',
  'Chicken Chowmen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAMC0Z2G27sK1SKFD1ex2-qqmOW7WLm7kCQ&s',
  'Vegetable Chowmen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4puVxXrSRBtCMNDfFo5cs1f5ZaObIl15-A&s',
  'Hot N Tasty Special Chowmen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbjldjhdglXUDIa-P-9u--Dzh9OdPyJZpKw&s',
  'Chicken Shahslik With Rice': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_hEEQ6VXpsbDDl7Q2HlDN2ouqsSQXUZkAA&s',
  'Chicken Manchurian With Rice': 'https://i.ytimg.com/vi/rgc9BDPexOk/maxresdefault.jpg',
  'Singapori Rice': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0-69wSh7gOL9y08eaa8D_4mvYKuN9RIdtw&s',
  'Chicken Chilli With Rice': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqK9jtK_tLT1X-WrfxLEgJFO1r8Jthr0K8A&s',
  'Chicken Chilli Dry With Rice': 'https://www.sugarspicenmore.com/wp-content/uploads/2022/12/Chilli-Chicken-4-500x500.jpg',
  'Chicken Jalfrezi': 'https://spoonsofflavor.com/wp-content/uploads/2022/10/Chicken-Jalfrezi-Recipe-2.jpg',

  // BROAST
  'Chicken Broast Qtr. Leg': 'https://pizzadesert.businesswala.pk/assets/uploads/81b6fd147b63ed4bbce29b49f581e167.jpg',
  'Chest Broast Qtr. Chest': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZIXH4kjzSNMTrR1GXWrxzLePL6IzsgfpGw&s',
  'Chicken Cheese Broast Qtr. Chest': 'https://newhotnroll.businesswala.pk/assets/uploads/ee19e55c7783c1fee74ad28c80b46a14.png',
  'Mayo Garlic Broast Qtr. Chest': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI17LO5_5fUZefkiDIc3oyi9vV8k4COPnfZA&s',
  'Chicken Broast Qtr. Chatpata (Chest)': 'https://newhotnroll.businesswala.pk/assets/uploads/ee19e55c7783c1fee74ad28c80b46a14.png',
  'Chicken Broast Chatpata Qtr. (Leg)': 'https://www.tandoorihut.com.pk/wp-content/uploads/2014/12/spicy-Chicken.jpg',
  'Chicken Broast Full': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRUiSYV7-RIvYfEUgOHoy4qVsn3mAIdEttQ&s',
  'Chicken Broast Half': 'https://www.womansworld.com/wp-content/uploads/2024/09/Homemade-fried-chicken-on-a-plate_1.jpg?w=1200&h=675&crop=1&quality=55&strip=all',

  // WINGS & DRUMSTICKS
  'Hot Tasty Wings with Fries (6 Pcs)': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObMVVnWCnlcrevzoMqQ9-lNEO2h0RABZ_Vg&s',
  'Hot Tasty Wings with Fries (3 Pcs)': 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=70/media/photosV2/ed8742cc-bdc4-4b2d-908c-05a75a8d52ea-retina-large.jpg',
  'Chicken Drum Stick with Fries (6 Pcs)': 'https://thumbs.dreamstime.com/b/crispy-fried-chicken-drum-stick-french-fries-ketchup-delicious-plate-food-featuring-golden-brown-drumstick-lemon-391702818.jpg',
  'Chicken Drum Stick with Fries (3 Pcs)': 'https://static.vecteezy.com/system/resources/previews/057/707/344/non_2x/fried-chicken-drumsticks-served-with-crispy-fries-and-coleslaw-creating-delicious-and-satisfying-meal-perfect-for-comfort-food-lovers-photo.JPG',

  // SANDWICHES
  'Chicken Sandwich': 'https://www.foodandwine.com/thmb/peWKytU7_SWhjOgLXMw9h0mLBu4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Fried-Chicken-Sandwich-With-Anchovy-Garlic-Dressing-VT-RECIPE0122-6900345e56ea477d8fd9fa87c2661625.jpg',
  'Chicken Club Sandwich': 'https://img.taste.com.au/OX2Wle32/taste/2016/11/marinated-chicken-club-sandwich-1970-1.jpeg',
  'Chicken BBQ Sandwich': 'https://www.closetcooking.com/wp-content/uploads/2021/05/BBQ-Chicken-Grilled-Cheese-1200-4839.jpg',
  'Chicken BBQ Club Sandwich': 'https://i.ytimg.com/vi/Wgj9JVVQ6Sc/maxresdefault.jpg',
  'Chicken Malai Club Sandwich': 'https://foodaazz.com/wp-content/uploads/2023/10/6299164c-f565-4a65-a552-bd3d9349fe67-1.jpg',
  'Chicken Malai Sandwich': 'https://mirchihut.pk/wp-content/uploads/2020/09/malai-boti-sandwich.jpg',
  'Crispy Club Sandwich': 'https://f000.backblazeb2.com/file/recipekit-bucket/20240725081844-chicken-20bacon-20club-20sandwich-20main-20landscape.jpg',

  // KARAHI & HANDI
  'Chicken Karahi': 'https://i.ytimg.com/vi/HSPDArjEwJM/maxresdefault.jpg',
  'Chicken Brown Karahi': 'https://www.thenomadiccook.com/wp-content/uploads/2021/11/Chicken-Karahi_1.jpg',
  'Chicken Shahi Karahi': 'https://i.ytimg.com/vi/uu2-cnumCQo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAeuUk1sQ3kfgxrfmhqzaleAum7nw',
  'Chicken White Karahi': 'https://stewwithsaba.com/wp-content/uploads/2023/08/IMG_0585-500x500.jpg?crop=1',
  'Chicken Achari Karahi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wtbBKP66xxma91sRsyQCfiUj24csrBUorA&s',
  'Chicken Handi': 'https://tiffinandteaofficial.com/wp-content/uploads/2020/10/Untitled-1-1.jpg',
  'Chicken Brown Handi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc34PaSSD7nYOUQaAk3cuLKkeyjCXZZH7DAw&s',
  'Chicken Makhni Handi': 'https://i.ytimg.com/vi/jcNtjjmL70I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCtHgu-Bo1YDo2Pmk7RKPB6wwuncA',

  // PASTA
  'Chicken Tikka Pasta': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0z1Jo0SnU2Wrzk280U7IYZ9XqkMFWZ43-eA&s',
  'Creamy Pasta Small': 'https://i0.wp.com/kennascooks.com/wp-content/uploads/2025/03/img_9240.jpg?w=1080&ssl=1',
  'Creamy Pasta Large': 'https://easychickenrecipes.com/wp-content/uploads/2024/06/creamy-chicken-spaghetti-recipe-7-edited.jpg',

  // FRIES
  'Regular Fries': 'https://images.squarespace-cdn.com/content/v1/57f1462015d5dbf1ae364486/1537703834286-0YZEDZDGVS2CRMY21O0B/sweet+potato+fries+or+white+potato+fries+which+is+better+vegan+nutrition+nutritionist.jpg',
  'Masala Fries': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhqLCRsvKX-CYLu6BN4f064rukBiH4FYOTQ&s',
  'Cheese Fries': 'https://www.bunsinmyoven.com/wp-content/uploads/2023/09/thumb-4-500x500.jpg',
  'Mayo Fries': 'https://images.food52.com/QPmItv5N73jJTZ0eIYOzlaqdi7s=/fb54463b-83f6-4918-aa5b-3494f6a6dbea--daylight_fries.jpeg',
  'Small Pizza Fries': 'https://midwestfoodieblog.com/wp-content/uploads/2021/12/FINAL-pizza-fries-1-6-1200x1800.jpg',
  'Large Pizza Fries': 'https://www.unileverfoodsolutions.pk/dam/global-ufs/mcos/meps/pakistan/calcmenu/recipes/PK-recipes/chicken-&-other-poultry-dishes/bbq-chicken-pizza-fries/main-header.jpg',

  // EXTRAS
  'Paratha Small': 'https://5.imimg.com/data5/SELLER/Default/2020/10/ZC/EB/MJ/78469313/small-paratha.jpg',
  'Paratha Big': 'https://5.imimg.com/data5/SELLER/Default/2020/10/BW/XI/OI/78469313/big-paratha-500x500.jpg',
  'Chapati': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRa5oqHjrJibxosA3s6thHoA1bDQrHkv4cgg&s',
  'Mayo Garlic Sauce': 'https://hungryfoodie.com/wp-content/uploads/2021/04/Roasted-Garlic-Mayonnaise-Hungry-Foodie2-scaled.jpg',
  'Coleslaw': 'https://www.twopeasandtheirpod.com/wp-content/uploads/2025/06/Creamy-Coleslaw-12.jpg',
  'Dinning Roti (Bun)': 'https://bakewithzoha.com/wp-content/uploads/2024/03/papparoti-coffee-buns-13-scaled.jpg',
  'Chilli Sauce': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfZ2iwgGiIkK3HPFF89EMx9Tpip8zQ9BDRw&s',
  'Cheese Slice': 'https://newsite.spinneyfields.com/wp-content/uploads/2020/02/Twice-graded-Cheese-Slices.jpg',

  // DRINKS
  'Cold Drink 350ml': 'https://5.imimg.com/data5/QZ/UY/SL/SELLER-3541922/coke-can.jpg',
  'Cold Drink 500ml': 'https://m.media-amazon.com/images/I/81fw7QKh8fL.jpg',
  'Cold Drink 1 Ltr': 'https://static-01.daraz.pk/p/dfb2c67a075ab592ccab85da0434b10f.jpg',
  'Cold Drink 1.5 Ltr': 'https://pizzaloft.pk/wp-content/uploads/2025/04/1-5litre.jpg',
  'Mineral Water Small': 'https://static.tossdown.com/images/a0e7e451-2999-42c6-a72c-7d99618b1d63.webp',
  'Mineral Water Large': 'https://foodaazz.com/wp-content/uploads/2023/10/819fe373-aa6f-40b8-a288-6b9292f42733.jpeg'
};

// Default placeholder image
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop';

// Testimonials Data
const testimonials = [
  { 
    name: 'Ali Raza', 
    role: 'Regular Customer', 
    avatar: 'https://i.pravatar.cc/60?img=8', 
    text: 'Best rolls in Malir. The quality is consistent and the flavors are amazing. Highly recommended.', 
    stars: 5 
  },
  { 
    name: 'Sana Khan', 
    role: 'Food Blogger', 
    avatar: 'https://i.pravatar.cc/60?img=5', 
    text: 'I have tried their entire menu. The BBQ platter is a must try. Hot N Tasty never disappoints.', 
    stars: 5 
  },
  { 
    name: 'Usman Ahmed', 
    role: 'Happy Customer', 
    avatar: 'https://i.pravatar.cc/60?img=12', 
    text: 'Fast delivery and great taste. Their zinger burger is the best I have had in Karachi.', 
    stars: 5 
  }
];

// Category Descriptions & Tags
const categoryInfo = {
  'CHICKEN ROLL': {
    desc: 'Crispy fried chicken with signature sauce and fresh vegetables wrapped in soft paratha.',
    tag: 'Best Seller'
  },
  'BEEF BOTI ROLL': {
    desc: 'Tender beef boti with special spices and mint chutney in freshly baked paratha.',
    tag: 'Popular'
  },
  'BEEF KABAB ROLL': {
    desc: 'Succulent beef kababs with our secret blend of spices and signature chutneys.',
    tag: 'Signature'
  },
  'CHICKEN MALAI ROLLS': {
    desc: 'Creamy malai chicken with delicate spices wrapped in a perfectly toasted paratha.',
    tag: 'Premium'
  },
  'SHAPATAR SPECIAL JUMBO ROLLS': {
    desc: 'Extra large signature rolls loaded with premium fillings and our secret sauce.',
    tag: 'Jumbo Size'
  },
  'ZINGER BURGER': {
    desc: 'Crispy zinger fillet with lettuce, cheese, and secret sauce in a soft bun.',
    tag: 'Fan Favorite'
  },
  'PIZZA': {
    desc: 'Wood-fired pizza with premium toppings and three cheese blend.',
    tag: 'Chef\'s Pick'
  },
  'BAR B.Q': {
    desc: 'Authentic charcoal-grilled BBQ with our secret spice marinade.',
    tag: 'Signature'
  },
  'CHINESE': {
    desc: 'Wok-tossed Chinese favorites with authentic sauces and fresh vegetables.',
    tag: 'Popular'
  },
  'BURGERS': {
    desc: 'Juicy, flame-grilled burgers made with premium cuts and fresh ingredients.',
    tag: 'Grilled Fresh'
  },
  'SUB BURGER': {
    desc: 'Loaded sub-style burgers with premium fillings and signature sauces.',
    tag: 'Loaded'
  },
  'BROAST': {
    desc: 'Crispy golden broast chicken marinated with our secret blend of herbs and spices.',
    tag: 'Crispy'
  },
  'WINGS & DRUMSTICKS': {
    desc: 'Crunchy wings and drumsticks seasoned to perfection with our signature spice mix.',
    tag: 'Spicy'
  },
  'SANDWICHES': {
    desc: 'Freshly made sandwiches with premium fillings, crisp vegetables, and artisan bread.',
    tag: 'Fresh'
  },
  'KARAHI & HANDI': {
    desc: 'Traditional karahi and handi dishes slow-cooked with aromatic spices.',
    tag: 'Traditional'
  },
  'PASTA': {
    desc: 'Creamy, indulgent pasta made with fresh ingredients and authentic sauces.',
    tag: 'Creamy'
  },
  'FRIES': {
    desc: 'Crispy golden fries seasoned to perfection, the perfect side to any meal.',
    tag: 'Crispy'
  },
  'EXTRAS': {
    desc: 'Complement your meal with our selection of sides, sauces, and extras.',
    tag: 'Add-On'
  },
  'DRINKS': {
    desc: 'Refreshing cold beverages to complete your meal experience.',
    tag: 'Refreshing'
  }
};

// Image helper functions
function getDealImage(dealId) {
  return dealImages[dealId] || DEFAULT_IMAGE;
}

function getItemImage(itemName) {
  return itemImages[itemName] || DEFAULT_IMAGE;
}

function getDescriptionForCategory(category) {
  return categoryInfo[category]?.desc || 'Freshly prepared with premium ingredients and authentic flavors.';
}

function getTagForCategory(category) {
  return categoryInfo[category]?.tag || 'Popular';
}
