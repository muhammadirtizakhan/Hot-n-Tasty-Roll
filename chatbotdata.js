/* ================================================================
   HOT N TASTY ROLL - ULTRA DEEP CHATBOT TRAINING DATA
   This file contains complete knowledge base for AI chatbot.
   Includes: Menu (all items with prices, descriptions), Deals, FAQs,
   Location, Timings, Delivery info, Contact, Synonyms, Intents.
   Version: 2.0 - Comprehensive Training Data
================================================================ */

const CHATBOT_DATA = {
    // ============================================================
    // RESTAURANT PROFILE
    // ============================================================
    restaurant: {
        name: "Hot N Tasty Roll",
        full_name: "Hot N Tasty Roll - Premium Fast Food",
        tagline: "Karachi's Finest Signature Rolls & Fast Food",
        description: "Hot N Tasty Roll started in 2020 in Malir, Karachi. We serve authentic Pakistani fast food including signature rolls, BBQ, burgers, pizza, Chinese, and more. Known for our crispy rolls and juicy burgers.",
        established: 2020,
        cuisine_types: ["Pakistani", "Fast Food", "BBQ", "Chinese", "Continental"],
        specialties: ["Signature Rolls", "BBQ Platters", "Zinger Burgers", "Malai Boti", "Chicken Tikka"],
        awards: ["Best Fast Food in Malir 2023", "Top Rated Rolls Karachi"],
        payment_methods: ["Cash on Delivery", "Credit/Debit Card", "JazzCash", "EasyPaisa"],
        online_ordering: ["Foodpanda", "In-house Delivery", "WhatsApp Orders"]
    },

    // ============================================================
    // LOCATION & CONTACT (Ultra Detailed)
    // ============================================================
    location: {
        full_address: "Shop #9, Malir 15, Muhabbat Nagar, Karachi, Pakistan",
        area: "Malir 15",
        city: "Karachi",
        province: "Sindh",
        country: "Pakistan",
        landmark: "Near Muhabbat Nagar Chowk",
        map_url: "https://maps.google.com/?q=Malir+15+Karachi",
        directions: "From Malir 15 chowk, take the road towards Muhabbat Nagar. We are the 9th shop on the right side.",
        delivery_areas: [
            "Malir", "Gulshan-e-Hadeed", "Airport", "Shah Faisal", "Korangi", 
            "Landhi", "Saddar", "Clifton", "DHA", "North Karachi", "Gulberg", 
            "Johar", "Bahadurabad", "PECHS", "Tariq Road", "Gulistan-e-Johar"
        ],
        delivery_radius_km: 15,
        nearby_landmarks: ["Malir Cantt", "Safoora Chowrangi", "Malir Halt", "Gulistan-e-Johar Block 15"]
    },

    contact: {
        phone_numbers: [
            { number: "0318-2370631", type: "main", timings: "11 AM - 11 PM" },
            { number: "0320-3742455", type: "alternate", timings: "11 AM - 11 PM" }
        ],
        whatsapp: { number: "0341-3139107", name: "Order on WhatsApp", link: "https://wa.me/923413139107" },
        email: "info@hotntastyroll.com",
        social_media: {
            instagram: { handle: "@hotntastyroll", url: "https://instagram.com/hotntastyroll" },
            facebook: { handle: "Hot N Tasty Roll", url: "https://facebook.com/hotntastyroll" },
            tiktok: { handle: "@hotntastyroll", url: "https://tiktok.com/@hotntastyroll" }
        },
        emergency_contact: "0318-2370631 (Manager)"
    },

    // ============================================================
    // BUSINESS TIMINGS (Day-by-Day Detailed)
    // ============================================================
    timings: {
        monday: { open: "11:00", close: "23:00", open_am_pm: "11:00 AM", close_am_pm: "11:00 PM", status: "open" },
        tuesday: { open: "11:00", close: "23:00", open_am_pm: "11:00 AM", close_am_pm: "11:00 PM", status: "open" },
        wednesday: { open: "11:00", close: "23:00", open_am_pm: "11:00 AM", close_am_pm: "11:00 PM", status: "open" },
        thursday: { open: "11:00", close: "23:00", open_am_pm: "11:00 AM", close_am_pm: "11:00 PM", status: "open" },
        friday: { open: "12:00", close: "23:30", open_am_pm: "12:00 PM", close_am_pm: "11:30 PM", status: "open", note: "Friday prayers break from 1:00 PM to 2:00 PM" },
        saturday: { open: "11:00", close: "00:00", open_am_pm: "11:00 AM", close_am_pm: "12:00 AM (Midnight)", status: "open" },
        sunday: { open: "11:00", close: "00:00", open_am_pm: "11:00 AM", close_am_pm: "12:00 AM (Midnight)", status: "open" },
        delivery: {
            start: "11:00 AM",
            end: "10:30 PM",
            last_order: "10:15 PM",
            note: "Delivery orders after 10:30 PM are not accepted"
        },
        kitchen_closes: "10:45 PM",
        holiday_note: "Open on all public holidays except Eid ul Fitr (1st day) and Eid ul Adha (1st day)"
    },

    // ============================================================
    // COMPLETE MENU WITH DEEP DETAILS (Every item from assets.js)
    // ============================================================
    menu: {
        "SHAPATAR SPECIAL JUMBO ROLLS": {
            description: "Extra large premium rolls made with our secret spice blend and special sauce. These jumbo rolls are twice the size of regular rolls and packed with flavor.",
            image: "https://img.freepik.com/premium-photo/beef-shawarma-dark-background-shawarma-with-beef-pita-bread_135427-9077.jpg",
            items: [
                { name: "Shapatar Special Jumbo Roll", price: 320, description: "Our signature jumbo roll with special masala and secret sauce", spice: "Medium", vegetarian: false, bestseller: true, calories: "650 kcal" },
                { name: "Crispy Spicy Jumbo Roll", price: 300, description: "Crispy fried chicken with spicy mayo and fresh veggies", spice: "High", vegetarian: false, calories: "620 kcal" },
                { name: "Crispy Spicy Jumbo Roll Cheese", price: 350, description: "Crispy spicy roll with melted cheddar cheese", spice: "High", vegetarian: false, cheese: true, calories: "720 kcal" },
                { name: "Crispy Jumbo Chatpata Roll", price: 300, description: "Tangy and spicy chatpata flavor with crispy chicken", spice: "High", vegetarian: false, calories: "610 kcal" },
                { name: "Small Crispy Roll", price: 200, description: "Smaller version of our crispy roll, perfect for light appetite", spice: "Medium", vegetarian: false, calories: "450 kcal" }
            ]
        },
        "CHICKEN ROLLS": {
            description: "Tender chicken wrapped in soft paratha with our signature sauces. Our most popular category with 16 varieties.",
            items: [
                { name: "Chicken Chatni Roll", price: 180, description: "Classic chicken roll with mint chutney", spice: "Mild", bestseller: true, calories: "480 kcal" },
                { name: "Chicken Mayo Garlic Roll", price: 200, description: "Creamy mayo garlic sauce with tender chicken", spice: "Mild", sauce: "Mayo Garlic", calories: "520 kcal" },
                { name: "Chicken Cheese Roll", price: 230, description: "Melted cheese with chicken and special sauce", spice: "Mild", cheese: true, calories: "580 kcal" },
                { name: "Chicken Behari Chatni Roll", price: 220, description: "Behari spiced chicken with mint chutney", spice: "Medium", marination: "Behari", calories: "540 kcal" },
                { name: "Chicken Behari Cheese Roll", price: 250, description: "Behari chicken with melted cheese", spice: "Medium", cheese: true, calories: "600 kcal" },
                { name: "Chicken Juicy Mayo Roll", price: 220, description: "Extra juicy chicken with creamy mayo", spice: "Mild", sauce: "Juicy Mayo", calories: "550 kcal" },
                { name: "Chicken Chatpata Roll", price: 200, description: "Tangy and spicy chatpata flavor", spice: "High", calories: "510 kcal" },
                { name: "Chicken Spicy Roll", price: 200, description: "For spice lovers - extra spicy chicken", spice: "High", calories: "505 kcal" },
                { name: "Chicken Reshmi Kabab Chatni Roll", price: 220, description: "Soft reshmi kabab with mint chutney", spice: "Mild", kabab_type: "Reshmi", calories: "530 kcal" },
                { name: "Chicken Reshmi Garlic Mayo Roll", price: 240, description: "Reshmi kabab with garlic mayo sauce", spice: "Mild", calories: "560 kcal" },
                { name: "Chicken Reshmi Cheese Roll", price: 270, description: "Reshmi kabab with melted cheese", spice: "Mild", cheese: true, calories: "620 kcal" },
                { name: "Chicken Reshmi Chatpata Roll", price: 240, description: "Reshmi kabab with chatpata masala", spice: "High", calories: "570 kcal" },
                { name: "Chicken Reshmi Behari Chatni Roll", price: 250, description: "Reshmi + Behari flavors with chutney", spice: "Medium", calories: "590 kcal" },
                { name: "Chicken Reshmi Juicy Mayo Roll", price: 240, description: "Reshmi kabab with juicy mayo", spice: "Mild", calories: "580 kcal" },
                { name: "Chicken Reshmi Behari Mayo Roll", price: 250, description: "Reshmi Behari with creamy mayo", spice: "Medium", calories: "600 kcal" },
                { name: "Chicken Reshmi Behari Cheese Roll", price: 280, description: "Loaded with reshmi, behari spices, and cheese", spice: "Medium", cheese: true, bestseller: true, calories: "680 kcal" }
            ]
        },
        "CHICKEN MALAI ROLLS": {
            description: "Creamy malai chicken rolls with delicate aromatic spices. A premium offering for those who love mild, creamy flavors.",
            items: [
                { name: "Chicken Malai Chatni Roll", price: 240, description: "Creamy malai chicken with mint chutney", spice: "Mild", premium: true, calories: "550 kcal" },
                { name: "Chicken Malai Garlic Roll", price: 260, description: "Malai chicken with garlic mayo", spice: "Mild", premium: true, calories: "580 kcal" },
                { name: "Chicken Malai Mayo Cheese Roll", price: 310, description: "Ultimate creamy - malai, mayo, and cheese", spice: "Mild", cheese: true, premium: true, calories: "680 kcal" },
                { name: "Chicken Malai Behari Roll", price: 280, description: "Malai + Behari fusion", spice: "Medium", premium: true, calories: "620 kcal" },
                { name: "Chicken Juicy Malai Roll", price: 260, description: "Extra juicy malai chicken", spice: "Mild", premium: true, calories: "590 kcal" },
                { name: "Chicken Malai Chatpata Roll", price: 260, description: "Malai with chatpata twist", spice: "High", calories: "600 kcal" },
                { name: "Chicken Malai Behari Cheese Roll", price: 310, description: "Premium - Malai, Behari, and Cheese", spice: "Medium", cheese: true, premium: true, bestseller: true, calories: "700 kcal" },
                { name: "Chicken Malai Spicy Mayo Roll", price: 280, description: "Creamy with a spicy kick", spice: "High", calories: "630 kcal" }
            ]
        },
        "BEEF BOTI ROLLS": {
            description: "Succulent beef boti with authentic spice blend. Our beef rolls are made with tender boti pieces marinated for hours.",
            items: [
                { name: "Beef Boti Roll", price: 220, description: "Tender beef boti with special spices", spice: "Medium", bestseller: true, calories: "520 kcal" },
                { name: "Beef Mayo Roll", price: 240, description: "Beef boti with creamy mayo", spice: "Medium", calories: "560 kcal" },
                { name: "Beef Cheese Roll", price: 270, description: "Beef boti with melted cheese", spice: "Medium", cheese: true, calories: "610 kcal" },
                { name: "Beef Chatpata Roll", price: 240, description: "Tangy chatpata beef roll", spice: "High", calories: "550 kcal" },
                { name: "Beef Behari Roll", price: 250, description: "Behari spiced beef boti", spice: "Medium", marination: "Behari", calories: "570 kcal" },
                { name: "Beef Juicy Roll", price: 240, description: "Extra juicy beef boti", spice: "Medium", bestseller: true, calories: "555 kcal" },
                { name: "Beef Spicy Roll", price: 240, description: "Spicy beef for heat lovers", spice: "High", calories: "545 kcal" }
            ]
        },
        "BEEF KABAB ROLLS": {
            description: "Flavorful beef kababs with signature chutneys. Made from premium minced beef and secret spices.",
            items: [
                { name: "Beef Kabab Chatni Roll", price: 200, description: "Beef kabab with mint chutney", spice: "Medium", bestseller: true, calories: "490 kcal" },
                { name: "Beef Kabab Mayo Roll", price: 220, description: "Beef kabab with creamy mayo", spice: "Medium", calories: "520 kcal" },
                { name: "Beef Kabab Cheese Roll", price: 250, description: "Beef kabab with melted cheese", spice: "Medium", cheese: true, calories: "570 kcal" },
                { name: "Beef Kabab Chatpata Roll", price: 220, description: "Tangy chatpata beef kabab", spice: "High", calories: "510 kcal" },
                { name: "Beef Kabab Behari Chatpata Roll", price: 240, description: "Behari spiced with chatpata", spice: "High", calories: "550 kcal" },
                { name: "Beef Kabab Behari Chatni Roll", price: 240, description: "Behari kabab with mint chutney", spice: "Medium", calories: "540 kcal" },
                { name: "Beef Kabab Behari Mayo Cheese Roll", price: 290, description: "Loaded - Behari, Mayo, Cheese", spice: "Medium", cheese: true, bestseller: true, calories: "660 kcal" },
                { name: "Beef Kabab Spicy Roll", price: 220, description: "Extra spicy beef kabab", spice: "High", calories: "505 kcal" }
            ]
        },
        "BAR B.Q": {
            description: "Authentic charcoal-grilled BBQ with our secret marinade. All items are grilled fresh on charcoal.",
            items: [
                { name: "Chicken Tikka (Leg)", price: 280, description: "Juicy leg piece tikka", spice: "Medium", bestseller: true, calories: "380 kcal" },
                { name: "Chicken Tikka (Chest)", price: 320, description: "Tender chest piece tikka", spice: "Medium", bestseller: true, calories: "350 kcal" },
                { name: "Green Tikka", price: 320, description: "Herb-infused green tikka", spice: "Medium", signature: true, calories: "360 kcal" },
                { name: "Malai Tikka", price: 340, description: "Creamy malai tikka", spice: "Mild", premium: true, calories: "400 kcal" },
                { name: "Chicken Malai Boti Plate", price: 380, description: "Malai boti with paratha", spice: "Mild", includes: "Boti + Paratha", calories: "650 kcal" },
                { name: "Chicken Boti Plate", price: 360, description: "Chicken boti with paratha", spice: "Medium", includes: "Boti + Paratha", calories: "620 kcal" },
                { name: "Beef Boti Plate", price: 380, description: "Beef boti with paratha", spice: "Medium", includes: "Boti + Paratha", calories: "640 kcal" },
                { name: "Beef Kabab Plate", price: 350, description: "Beef kabab with paratha", spice: "Medium", includes: "Kabab + Paratha", calories: "600 kcal" },
                { name: "Beef Gola Kabab Plate", price: 370, description: "Soft gola kabab with paratha", spice: "Medium", calories: "610 kcal" },
                { name: "Malai Fry Boti", price: 400, description: "Fried malai boti - extra crispy", spice: "Mild", premium: true, calories: "520 kcal" },
                { name: "Dhaga Kabab", price: 370, description: "Threaded kabab - unique texture", spice: "Medium", signature: true, calories: "430 kcal" },
                { name: "Chicken Reshmi Kabab", price: 360, description: "Soft reshmi kabab", spice: "Mild", calories: "420 kcal" },
                { name: "Chicken Makhni Kabab", price: 380, description: "Buttery makhni kabab", spice: "Mild", buttery: true, calories: "480 kcal" },
                { name: "Chandan Kabab", price: 390, description: "Aromatic chandan spiced kabab", spice: "Medium", signature: true, calories: "440 kcal" },
                { name: "Green Boti", price: 360, description: "Herb-marinated green boti", spice: "Medium", calories: "410 kcal" },
                { name: "Namkeen Tikka", price: 340, description: "Salty and spicy tikka", spice: "High", calories: "370 kcal" },
                { name: "Turkish Kabab", price: 380, description: "Turkish style kabab", spice: "Medium", calories: "450 kcal" },
                { name: "Chicken Behari Tikka (Chest)", price: 340, description: "Behari tikka chest piece", spice: "Medium", calories: "360 kcal" },
                { name: "Chicken Behari Tikka (Leg)", price: 300, description: "Behari tikka leg piece", spice: "Medium", calories: "390 kcal" }
            ]
        },
        "BURGERS": {
            description: "Juicy flame-grilled burgers with premium cuts. Made fresh to order.",
            items: [
                { name: "Regular Beef Burger", price: 250, description: "Classic beef patty with lettuce and sauce", spice: "Mild", bestseller: true, calories: "450 kcal" },
                { name: "Beef Cheese Burger", price: 300, description: "Beef patty with cheddar cheese", spice: "Mild", cheese: true, calories: "520 kcal" },
                { name: "Beef Jumbo Burger", price: 350, description: "Double patty jumbo beef burger", spice: "Medium", jumbo: true, calories: "680 kcal" },
                { name: "Beef Jumbo Cheese Burger", price: 400, description: "Double patty with double cheese", spice: "Medium", jumbo: true, cheese: true, calories: "750 kcal" },
                { name: "Chicken Burger", price: 220, description: "Grilled chicken patty", spice: "Mild", bestseller: true, calories: "420 kcal" },
                { name: "Chicken Cheese Burger", price: 270, description: "Chicken patty with cheese", spice: "Mild", cheese: true, calories: "490 kcal" },
                { name: "Chicken Big Burger", price: 300, description: "Large chicken patty", spice: "Medium", jumbo: true, calories: "580 kcal" },
                { name: "Chicken Big Burger Cheese", price: 350, description: "Large chicken patty with cheese", spice: "Medium", jumbo: true, cheese: true, calories: "650 kcal" }
            ]
        },
        "ZINGER BURGER": {
            description: "Crispy zinger fillet with lettuce and special sauce. Our most popular burger category.",
            items: [
                { name: "Junior Zinger", price: 280, description: "Small zinger for light appetite", spice: "Mild", size: "Small", calories: "380 kcal" },
                { name: "King Size Zinger Burger", price: 380, description: "Large crispy zinger fillet", spice: "Medium", size: "King", bestseller: true, calories: "620 kcal" },
                { name: "Zinger Cheese Burger", price: 340, description: "Zinger with melted cheese", spice: "Medium", cheese: true, bestseller: true, calories: "560 kcal" },
                { name: "Zinger Jumbo Cheese", price: 420, description: "Jumbo zinger with extra cheese", spice: "Medium", jumbo: true, cheese: true, calories: "720 kcal" },
                { name: "Chicken Jumbo Zinger", price: 400, description: "Jumbo chicken zinger", spice: "Medium", jumbo: true, calories: "680 kcal" }
            ]
        },
        "SUB BURGER": {
            description: "Loaded sub-style burgers with premium fillings.",
            items: [
                { name: "Sub Burger Malai Boti", price: 320, description: "Malai boti in sub roll", spice: "Mild", premium: true, calories: "540 kcal" },
                { name: "Sub Burger Tikka Boti", price: 300, description: "Tikka boti sub", spice: "Medium", bestseller: true, calories: "520 kcal" },
                { name: "Sub Burger Reshmi Kabab", price: 310, description: "Reshmi kabab sub", spice: "Mild", calories: "510 kcal" },
                { name: "Sub Burger Seekh Kabab", price: 290, description: "Seekh kabab sub", spice: "Medium", calories: "500 kcal" }
            ]
        },
        "PIZZA": {
            description: "Wood-fired pizza with premium toppings and three cheese blend. Large size only.",
            items: [
                { name: "Chicken Tikka", price: 600, description: "Chicken tikka, onions, capsicum", spice: "Medium", bestseller: true, size: "Large", calories: "1200 kcal" },
                { name: "Chicken Fajita", price: 650, description: "Fajita chicken, bell peppers, onions", spice: "Mild", bestseller: true, size: "Large", calories: "1250 kcal" },
                { name: "Chicken Supreme", price: 750, description: "Chicken tikka, fajita, sausage, mushrooms", spice: "Medium", premium: true, size: "Large", calories: "1400 kcal" },
                { name: "Chicken Achari", price: 680, description: "Achari chicken with pickled spices", spice: "High", signature: true, size: "Large", calories: "1300 kcal" },
                { name: "Chicken Afghani", price: 700, description: "Creamy afghani chicken", spice: "Mild", premium: true, size: "Large", calories: "1350 kcal" },
                { name: "Cheese Lover", price: 550, description: "Three cheese blend - mozzarella, cheddar, parmesan", spice: "Mild", vegetarian: true, size: "Large", calories: "1150 kcal" }
            ]
        },
        "CHINESE": {
            description: "Wok-tossed Chinese favorites with authentic sauces.",
            items: [
                { name: "Chicken Fried Rice", price: 350, description: "Classic chicken fried rice", spice: "Mild", bestseller: true, calories: "550 kcal" },
                { name: "Egg Fried Rice", price: 300, description: "Egg fried rice", spice: "Mild", calories: "480 kcal" },
                { name: "Vegetable Fried Rice", price: 280, description: "Mix vegetable fried rice", spice: "Mild", vegetarian: true, calories: "450 kcal" },
                { name: "Masala Rice", price: 320, description: "Spicy masala rice", spice: "Medium", calories: "520 kcal" },
                { name: "Special Hot N Tasty Fried Rice", price: 420, description: "Special house fried rice with chicken, egg, veggies", spice: "Medium", signature: true, calories: "650 kcal" },
                { name: "Chicken Chowmen", price: 350, description: "Chicken chow mein noodles", spice: "Medium", bestseller: true, calories: "540 kcal" },
                { name: "Vegetable Chowmen", price: 300, description: "Vegetable chow mein", spice: "Mild", vegetarian: true, calories: "470 kcal" },
                { name: "Hot N Tasty Special Chowmen", price: 420, description: "Special house chow mein", spice: "Medium", signature: true, calories: "630 kcal" },
                { name: "Chicken Shahslik With Rice", price: 400, description: "Chicken shahslik on sizzling plate with rice", spice: "Medium", calories: "620 kcal" },
                { name: "Chicken Manchurian With Rice", price: 380, description: "Chicken manchurian gravy with rice", spice: "Medium", bestseller: true, calories: "600 kcal" },
                { name: "Singapori Rice", price: 370, description: "Singapore style rice", spice: "Mild", calories: "560 kcal" },
                { name: "Chicken Chilli With Rice", price: 380, description: "Chicken chilli gravy with rice", spice: "High", calories: "590 kcal" },
                { name: "Chicken Chilli Dry With Rice", price: 400, description: "Dry chicken chilli with rice", spice: "High", calories: "610 kcal" },
                { name: "Chicken Jalfrezi", price: 420, description: "Chicken jalfrezi with rice", spice: "Medium", calories: "640 kcal" }
            ]
        },
        "BROAST": {
            description: "Crispy golden broast chicken with secret herb blend. Pressure-fried for extra crispiness.",
            items: [
                { name: "Chicken Broast Qtr. Leg", price: 320, description: "Leg piece broast", spice: "Medium", piece: "Leg", calories: "450 kcal" },
                { name: "Chest Broast Qtr. Chest", price: 340, description: "Chest piece broast", spice: "Medium", piece: "Chest", calories: "420 kcal" },
                { name: "Chicken Cheese Broast Qtr. Chest", price: 390, description: "Cheese stuffed chest broast", spice: "Medium", cheese: true, calories: "520 kcal" },
                { name: "Mayo Garlic Broast Qtr. Chest", price: 390, description: "Chest broast with mayo garlic sauce", spice: "Mild", sauce: "Mayo Garlic", calories: "510 kcal" },
                { name: "Chicken Broast Qtr. Chatpata (Chest)", price: 360, description: "Chatpata spicy chest broast", spice: "High", calories: "460 kcal" },
                { name: "Chicken Broast Chatpata Qtr. (Leg)", price: 340, description: "Chatpata spicy leg broast", spice: "High", calories: "480 kcal" },
                { name: "Chicken Broast Full", price: 1100, description: "Full broast (4 pieces - 2 legs, 2 chests)", spice: "Medium", serves: "4-5 people", calories: "1750 kcal" },
                { name: "Chicken Broast Half", price: 600, description: "Half broast (2 pieces)", spice: "Medium", serves: "2-3 people", calories: "900 kcal" }
            ]
        },
        "WINGS & DRUMSTICKS": {
            description: "Crunchy wings and drumsticks with signature spice.",
            items: [
                { name: "Hot Tasty Wings with Fries (6 Pcs)", price: 450, description: "6 spicy wings with fries", spice: "High", calories: "780 kcal" },
                { name: "Hot Tasty Wings with Fries (3 Pcs)", price: 280, description: "3 spicy wings with fries", spice: "High", calories: "480 kcal" },
                { name: "Chicken Drum Stick with Fries (6 Pcs)", price: 480, description: "6 drumsticks with fries", spice: "Medium", calories: "820 kcal" },
                { name: "Chicken Drum Stick with Fries (3 Pcs)", price: 300, description: "3 drumsticks with fries", spice: "Medium", calories: "510 kcal" }
            ]
        },
        "SANDWICHES": {
            description: "Freshly made sandwiches with premium fillings.",
            items: [
                { name: "Chicken Sandwich", price: 250, description: "Grilled chicken sandwich", bestseller: true, calories: "420 kcal" },
                { name: "Chicken Club Sandwich", price: 320, description: "Triple-layer club sandwich", premium: true, calories: "550 kcal" },
                { name: "Chicken BBQ Sandwich", price: 280, description: "BBQ chicken sandwich", sauce: "BBQ", calories: "470 kcal" },
                { name: "Chicken BBQ Club Sandwich", price: 350, description: "Triple-layer BBQ club", premium: true, calories: "600 kcal" },
                { name: "Chicken Malai Club Sandwich", price: 350, description: "Malai chicken club", premium: true, calories: "590 kcal" },
                { name: "Chicken Malai Sandwich", price: 300, description: "Malai chicken sandwich", calories: "500 kcal" },
                { name: "Crispy Club Sandwich", price: 350, description: "Crispy chicken club", bestseller: true, calories: "580 kcal" }
            ]
        },
        "KARAHI & HANDI": {
            description: "Traditional karahi and handi dishes slow-cooked with aromatic spices. Served with 2 naan.",
            items: [
                { name: "Chicken Karahi", price: 800, description: "Classic chicken karahi", spice: "Medium", bestseller: true, serves: "2-3", calories: "1100 kcal" },
                { name: "Chicken Brown Karahi", price: 850, description: "Brown karahi with roasted spices", spice: "Medium", signature: true, serves: "2-3", calories: "1150 kcal" },
                { name: "Chicken Shahi Karahi", price: 900, description: "Royal shahi karahi with nuts", spice: "Mild", premium: true, serves: "2-3", calories: "1250 kcal" },
                { name: "Chicken White Karahi", price: 900, description: "Creamy white karahi", spice: "Mild", premium: true, serves: "2-3", calories: "1200 kcal" },
                { name: "Chicken Achari Karahi", price: 850, description: "Pickle-spiced achari karahi", spice: "High", serves: "2-3", calories: "1080 kcal" },
                { name: "Chicken Handi", price: 800, description: "Chicken handi - slow cooked", spice: "Medium", bestseller: true, serves: "2-3", calories: "1120 kcal" },
                { name: "Chicken Brown Handi", price: 850, description: "Brown handi", spice: "Medium", serves: "2-3", calories: "1140 kcal" },
                { name: "Chicken Makhni Handi", price: 900, description: "Butter chicken style makhni handi", spice: "Mild", premium: true, serves: "2-3", calories: "1280 kcal" }
            ]
        },
        "PASTA": {
            description: "Creamy indulgent pasta with fresh ingredients.",
            items: [
                { name: "Chicken Tikka Pasta", price: 380, description: "Penne pasta with chicken tikka", spice: "Medium", calories: "620 kcal" },
                { name: "Creamy Pasta Small", price: 350, description: "White sauce creamy pasta", spice: "Mild", size: "Small", calories: "550 kcal" },
                { name: "Creamy Pasta Large", price: 550, description: "Large white sauce creamy pasta", spice: "Mild", size: "Large", calories: "850 kcal" }
            ]
        },
        "FRIES": {
            description: "Crispy golden fries seasoned to perfection.",
            items: [
                { name: "Regular Fries", price: 150, description: "Classic salted fries", size: "Regular", bestseller: true, calories: "320 kcal" },
                { name: "Masala Fries", price: 180, description: "Spicy masala fries", spice: "Medium", calories: "350 kcal" },
                { name: "Cheese Fries", price: 230, description: "Fries topped with melted cheese", cheese: true, calories: "480 kcal" },
                { name: "Mayo Fries", price: 200, description: "Fries with creamy mayo", sauce: "Mayo", calories: "420 kcal" },
                { name: "Small Pizza Fries", price: 280, description: "Pizza-style fries with sauce and cheese", size: "Small", calories: "520 kcal" },
                { name: "Large Pizza Fries", price: 450, description: "Large pizza-style fries", size: "Large", calories: "820 kcal" }
            ]
        },
        "EXTRAS": {
            description: "Complement your meal with our sides and sauces.",
            items: [
                { name: "Paratha Small", price: 40, description: "Small soft paratha", calories: "150 kcal" },
                { name: "Paratha Big", price: 60, description: "Large fluffy paratha", calories: "220 kcal" },
                { name: "Chapati", price: 30, description: "Whole wheat chapati", calories: "80 kcal" },
                { name: "Mayo Garlic Sauce", price: 80, description: "Creamy mayo garlic dip", calories: "120 kcal" },
                { name: "Coleslaw", price: 100, description: "Fresh coleslaw", calories: "90 kcal" },
                { name: "Dinning Roti (Bun)", price: 50, description: "Burger bun", calories: "110 kcal" },
                { name: "Chilli Sauce", price: 60, description: "Spicy chilli sauce", calories: "30 kcal" },
                { name: "Cheese Slice", price: 70, description: "Cheddar cheese slice", calories: "80 kcal" }
            ]
        },
        "DRINKS": {
            description: "Refreshing cold beverages.",
            items: [
                { name: "Cold Drink 350ml", price: 100, description: "Can of cold drink", size: "350ml", calories: "140 kcal" },
                { name: "Cold Drink 500ml", price: 120, description: "Bottle of cold drink", size: "500ml", calories: "200 kcal" },
                { name: "Cold Drink 1 Ltr", price: 150, description: "1 liter cold drink", size: "1 Liter", calories: "400 kcal" },
                { name: "Cold Drink 1.5 Ltr", price: 200, description: "1.5 liter cold drink", size: "1.5 Liter", calories: "600 kcal" },
                { name: "Mineral Water Small", price: 60, description: "500ml water bottle", size: "500ml", calories: "0 kcal" },
                { name: "Mineral Water Large", price: 100, description: "1.5 liter water bottle", size: "1.5 Liter", calories: "0 kcal" }
            ]
        }
    },

    // ============================================================
    // DEALS & OFFERS (Detailed)
    // ============================================================
    deals: [
        { id: 1, name: "Family Deal 1", price: 1200, original_price: 1600, savings: 400, discount_percent: 25, items: ["2 Chicken Rolls", "1 Zinger Burger", "2 Regular Fries", "2 Cold Drinks"], serves: "2-3 people", bestseller: true },
        { id: 2, name: "Family Deal 2", price: 1500, original_price: 2000, savings: 500, discount_percent: 25, items: ["2 Beef Rolls", "1 Pizza", "1 Large Fries", "2 Cold Drinks"], serves: "3-4 people" },
        { id: 3, name: "BBQ Deal", price: 1800, original_price: 2400, savings: 600, discount_percent: 25, items: ["Chicken Tikka", "Malai Boti", "2 Paratha", "Cold Drink"], serves: "2-3 people", bestseller: true, popular: true },
        { id: 4, name: "Broast Deal", price: 1400, original_price: 1850, savings: 450, discount_percent: 24, items: ["Full Broast", "Large Fries", "Coleslaw", "2 Cold Drinks"], serves: "3-4 people", bestseller: true },
        { id: 5, name: "Combo Deal 1", price: 800, original_price: 1100, savings: 300, discount_percent: 27, items: ["Zinger Burger", "Regular Fries", "Cold Drink"], bestseller: true },
        { id: 6, name: "Combo Deal 2", price: 900, original_price: 1200, savings: 300, discount_percent: 25, items: ["Beef Burger", "Cheese Fries", "Cold Drink"] },
        { id: 7, name: "Roll Deal", price: 600, original_price: 800, savings: 200, discount_percent: 25, items: ["2 Chicken Rolls", "2 Cold Drinks"], bestseller: true },
        { id: 8, name: "Chinese Deal", price: 1000, original_price: 1350, savings: 350, discount_percent: 26, items: ["Chicken Fried Rice", "Chicken Chowmen", "2 Cold Drinks"], serves: "2 people" }
    ],

    // ============================================================
    // DELIVERY INFORMATION (Ultra Detailed)
    // ============================================================
    delivery: {
        platforms: ["Foodpanda", "In-house delivery", "WhatsApp orders"],
        delivery_time: "30-45 minutes",
        delivery_time_range: { min: 30, max: 45, unit: "minutes" },
        minimum_order: { amount: 300, currency: "PKR" },
        delivery_charges: {
            within_5km: { amount: 80, description: "Rs. 80 for orders under Rs. 1500" },
            within_10km: { amount: 120, description: "Rs. 120 for orders under Rs. 2000" },
            above_10km: { amount: 150, description: "Rs. 150 for orders under Rs. 2500" }
        },
        free_delivery: { threshold: 1500, description: "Free delivery on orders above Rs. 1500" },
        payment_methods: ["Cash on Delivery", "Credit/Debit Card", "JazzCash", "EasyPaisa"],
        online_payment: ["Visa", "Mastercard", "JazzCash", "EasyPaisa"],
        delivery_zones: [
            { zone: "Zone A", areas: ["Malir", "Gulshan-e-Hadeed", "Airport"], charge: 80 },
            { zone: "Zone B", areas: ["Shah Faisal", "Korangi", "Landhi"], charge: 100 },
            { zone: "Zone C", areas: ["Saddar", "Clifton", "DHA"], charge: 120 }
        ],
        order_tracking: "You can track your order via WhatsApp or phone call",
        packaging: "Eco-friendly tamper-proof packaging",
        delivery_note: "Delivery riders are instructed to follow all safety protocols"
    },

    // ============================================================
    // FREQUENTLY ASKED QUESTIONS (Detailed Answers)
    // ============================================================
    faqs: [
        { 
            question: "What are your opening hours?", 
            answer: "We are open Monday to Thursday from 11 AM to 11 PM. Friday from 12 PM to 11:30 PM (with a break for Friday prayers from 1 PM to 2 PM). Saturday and Sunday from 11 AM to 12 AM (midnight). Delivery is available until 10:30 PM.",
            keywords: ["timing", "hours", "open", "close", "time", "kab tak", "kab se"]
        },
        { 
            question: "Do you deliver? What is the delivery time?", 
            answer: "Yes, we deliver across Karachi. Delivery time is 30-45 minutes depending on your location. Minimum order is Rs. 300. Free delivery on orders above Rs. 1500.",
            keywords: ["delivery", "deliver", "home delivery", "send", "time", "duration", "30 minutes", "45 minutes"]
        },
        { 
            question: "What is your most popular item?", 
            answer: "Our most popular items are Chicken Chatni Roll (Rs. 180), Zinger Burger (Rs. 340), Chicken Tikka (Rs. 280), and the BBQ Deal (Rs. 1800). Customers also love our Chicken Fried Rice and Malai Boti.",
            keywords: ["popular", "best seller", "famous", "top", "favorite", "most ordered"]
        },
        { 
            question: "Do you have vegetarian options?", 
            answer: "Yes, we have vegetarian options including Vegetable Fried Rice (Rs. 280), Vegetable Chowmein (Rs. 300), Cheese Lover Pizza (Rs. 550), and Cheese Fries (Rs. 230).",
            keywords: ["vegetarian", "veg", "no meat", "plant based", "veggie", "without chicken"]
        },
        { 
            question: "How can I place an order?", 
            answer: "You can place an order in multiple ways: 1) Call us at 0318-2370631 or 0320-3742455, 2) WhatsApp us at 0341-3139107, 3) Order via Foodpanda, 4) Visit our location in Malir 15 for dine-in or takeaway.",
            keywords: ["order", "place order", "how to order", "booking", "online order"]
        },
        { 
            question: "Do you have family deals or party platters?", 
            answer: "Yes! We have several family deals: Family Deal 1 (Rs. 1200) serves 2-3 people, Family Deal 2 (Rs. 1500) serves 3-4 people, BBQ Deal (Rs. 1800) serves 2-3 people, and Broast Deal (Rs. 1400) serves 3-4 people. All deals include multiple items.",
            keywords: ["family deal", "party", "platter", "combo", "group", "family pack", "deal for family"]
        },
        { 
            question: "What payment methods do you accept?", 
            answer: "We accept Cash on Delivery (COD), Credit/Debit Cards (Visa, Mastercard), JazzCash, and EasyPaisa. For online orders via Foodpanda, you can also pay via card.",
            keywords: ["payment", "pay", "cash", "card", "jazzcash", "easypaisa", "cod", "online payment"]
        },
        { 
            question: "Do you offer dine-in?", 
            answer: "Yes, we have a dine-in facility at our Malir 15 location. Our dine-in area is clean and spacious with seating for up to 30 people. We also have air conditioning.",
            keywords: ["dine in", "eat in", "restaurant", "sit in", "dining", "seating"]
        },
        { 
            question: "Where are you located?", 
            answer: "We are located at Shop #9, Malir 15, Muhabbat Nagar, Karachi. Landmark: Near Muhabbat Nagar Chowk. You can find us on Google Maps by searching 'Hot N Tasty Roll Malir'.",
            keywords: ["location", "address", "where", "malir", "shop", "kahan", "address kya hai"]
        },
        { 
            question: "What makes your rolls special?", 
            answer: "Our rolls are special because we use fresh ingredients daily, our secret spice blends, signature chutneys, and we cook each roll fresh on order. The paratha is soft yet crispy, and the fillings are generous.",
            keywords: ["roll", "special", "unique", "why", "different", "best roll"]
        },
        { 
            question: "Do you have discounts for bulk orders?", 
            answer: "Yes, for bulk orders (10+ people) we offer special discounts. Please call us at 0318-2370631 to discuss your requirements and we will provide a custom quote.",
            keywords: ["bulk order", "large order", "discount", "corporate", "event", "party order"]
        },
        { 
            question: "What is the minimum order for delivery?", 
            answer: "The minimum order amount for delivery is Rs. 300. Orders below this amount cannot be delivered. Free delivery is available on orders above Rs. 1500.",
            keywords: ["minimum order", "min order", "limit", "delivery minimum", "order limit"]
        },
        { 
            question: "Do you have a loyalty program?", 
            answer: "Yes, we have a loyalty program. Every 10th order you get 10% off. Ask our staff to note your phone number for tracking.",
            keywords: ["loyalty", "reward", "points", "membership", "card", "offer for regular"]
        },
        { 
            question: "What are your most affordable items?", 
            answer: "Our most affordable items include: Chapati (Rs. 30), Paratha Small (Rs. 40), Cold Drink (Rs. 100), Regular Fries (Rs. 150), Chicken Chatni Roll (Rs. 180), and Chicken Burger (Rs. 220).",
            keywords: ["cheap", "affordable", "budget", "low price", "cheapest", "sasta"]
        },
        { 
            question: "Do you have breakfast items?", 
            answer: "We currently do not serve breakfast. We open at 11 AM, so our menu is lunch and dinner focused.",
            keywords: ["breakfast", "morning", "early", "brunch"]
        }
    ],

    // ============================================================
    // INTENT MAPPING (For AI to understand user intent)
    // ============================================================
    intents: {
        greeting: {
            patterns: ["hi", "hello", "hey", "salam", "assalam", "good morning", "good evening", "konnichiwa", "namaste"],
            response_template: "Assalam-o-Alaikum! 👋 Welcome to Hot N Tasty Roll! How can I help you today? You can ask me about our menu, prices, deals, delivery, or location."
        },
        price_check: {
            patterns: ["price", "cost", "rate", "kitne ka", "how much", "kya rate hai", "kya price hai", "kitna", "charges"],
            response_template: "Let me help you with prices. Which item are you interested in? You can ask like 'What is the price of Zinger Burger?'"
        },
        menu_inquiry: {
            patterns: ["menu", "what do you have", "items", "food", "dishes", "kya kya hai", "options", "varieties"],
            response_template: "We have a wide variety: Signature Rolls, Chicken Rolls, Beef Rolls, BBQ, Burgers, Zinger, Pizza, Chinese, Broast, Sandwiches, Karahi, Pasta, Fries, and Drinks. Which category interests you?"
        },
        deals_inquiry: {
            patterns: ["deal", "offer", "discount", "combo", "saving", "family pack", "special offer", "promotion"],
            response_template: "We have great deals! Family Deal 1 (Rs. 1200), BBQ Deal (Rs. 1800), Broast Deal (Rs. 1400), Combo Deal (Rs. 800), and Roll Deal (Rs. 600). Would you like details of any specific deal?"
        },
        delivery_inquiry: {
            patterns: ["delivery", "deliver", "home delivery", "send", "delivery time", "delivery charges", "deliver kar dete ho"],
            response_template: "Yes, we deliver across Karachi! Delivery time is 30-45 minutes. Minimum order Rs. 300. Free delivery on orders above Rs. 1500. Delivery charges: Rs. 80 (within 5km), Rs. 120 (within 10km), Rs. 150 (above 10km)."
        },
        timing_inquiry: {
            patterns: ["timing", "hours", "open", "close", "kab tak", "kab se", "kitne baje", "operating hours"],
            response_template: "⏰ Our timings: Mon-Thu: 11 AM-11 PM, Fri: 12 PM-11:30 PM, Sat-Sun: 11 AM-12 AM (Midnight). Delivery available until 10:30 PM."
        },
        location_inquiry: {
            patterns: ["location", "address", "where", "kahan", "malir", "shop", "jao", "pata"],
            response_template: "📍 We're at Shop #9, Malir 15, Muhabbat Nagar, Karachi. Near Muhabbat Nagar Chowk. Open for dine-in and takeaway. You can also order delivery across Karachi!"
        },
        contact_inquiry: {
            patterns: ["contact", "phone", "number", "call", "whatsapp", "mobile", "contact number", "phone number"],
            response_template: "📞 Contact us: 0318-2370631, 0320-3742455 | WhatsApp: 0341-3139107 | Instagram: @hotntastyroll | Facebook: Hot N Tasty Roll"
        },
        popular_items: {
            patterns: ["popular", "best seller", "famous", "top rated", "most ordered", "recommend", "suggest", "acha kya hai"],
            response_template: "🌟 Our most popular items:\n• Chicken Chatni Roll (Rs. 180)\n• Zinger Burger (Rs. 340)\n• Chicken Tikka (Rs. 280)\n• BBQ Deal (Rs. 1800)\n• Chicken Fried Rice (Rs. 350)\nWould you like prices for any of these?"
        },
        thankyou: {
            patterns: ["thank", "shukriya", "thanks", "appreciate", "good help", "nice"],
            response_template: "You're most welcome! 😊 Enjoy your meal! Is there anything else I can help you with? Have a great day!"
        },
        farewell: {
            patterns: ["bye", "goodbye", "exit", "close", "khuda hafiz", "allah hafiz", "see you", "tata"],
            response_template: "Thank you for visiting Hot N Tasty Roll! Khuda Hafiz! 👋 Come back soon or order online. Have a delicious day!"
        }
    },

    // ============================================================
    // LANGUAGE SUPPORT (Urdu/English keywords)
    // ============================================================
    language_support: {
        urdu_keywords: {
            "price": ["kitne ka hai", "kitna paisa", "rate kya hai", "daam kya hai", "qemat"],
            "roll": ["roll", "paratha roll", "kathi roll"],
            "burger": ["burger", "burger"],
            "delivery": ["ghar pahunchao", "delivery karo", "ghar bhejo"],
            "location": ["pata", "jaga", "kahan ho", "address"],
            "timing": ["waqt", "kab se kab tak", "open kab hota hai"],
            "deal": ["sasta deal", "offer", "combo", "family deal"],
            "thankyou": ["shukriya", "meharbani", "thanks"]
        }
    },

    // ============================================================
    // RESPONSE TEMPLATES (For dynamic answers)
    // ============================================================
    response_templates: {
        price_response: (itemName, price, category) => {
            return `${itemName} costs Rs. ${price}. It's from our ${category} category. Would you like to know about similar items?`;
        },
        category_summary: (categoryName, itemCount, priceRange) => {
            return `Our ${categoryName} category has ${itemCount} items ranging from Rs. ${priceRange.min} to Rs. ${priceRange.max}. Which specific item are you interested in?`;
        },
        deal_summary: (dealName, price, savings, items) => {
            return `${dealName}: Rs. ${price} (Save Rs. ${savings}). Includes: ${items}. Great value for money!`;
        },
        not_found: (query) => {
            return `I'm not sure about "${query}". Could you please rephrase? You can ask about menu items, prices, deals, delivery, timings, or location.`;
        },
        fallback: () => {
            return "I'm here to help! You can ask me about:\n• Menu & Prices\n• Deals & Offers\n• Delivery & Timings\n• Location & Contact\n• Popular Dishes\n\nWhat would you like to know?";
        }
    }
};

// ============================================================
// EXPORT FOR USE IN CHATBOT
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHATBOT_DATA;
}

// Make available globally
window.CHATBOT_DATA = CHATBOT_DATA;

console.log("✅ Chatbot training data loaded! Total items: " + Object.values(CHATBOT_DATA.menu).reduce((acc, cat) => acc + cat.items.length, 0));