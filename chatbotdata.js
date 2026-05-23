/* ================================================================
   HOT N TASTY ROLL - CHATBOT TRAINING DATA v3.0
   Complete knowledge base — 150+ menu items, full restaurant data,
   conversation flows, personality config, and general knowledge hints
================================================================ */

const CHATBOT_DATA = {

    // ============================================================
    // RESTAURANT PROFILE
    // ============================================================
    restaurant: {
        name: "Hot N Tasty Roll",
        full_name: "Hot N Tasty Roll - Premium Fast Food",
        tagline: "Karachi's Finest Signature Rolls & Fast Food",
        description: "Hot N Tasty Roll started in 2020 in Malir, Karachi. We serve authentic Pakistani fast food including signature rolls, BBQ, burgers, pizza, Chinese, broast, karahi, and more. Known for our crispy rolls and juicy burgers.",
        established: 2020,
        cuisine_types: ["Pakistani", "Fast Food", "BBQ", "Chinese", "Continental"],
        specialties: ["Signature Rolls", "BBQ Platters", "Zinger Burgers", "Malai Boti", "Chicken Tikka", "Broast"],
        payment_methods: ["Cash on Delivery", "Credit/Debit Card", "JazzCash", "EasyPaisa"],
        online_ordering: ["Foodpanda", "In-house Delivery", "WhatsApp Orders"],
        dine_in: { available: true, capacity: 30, air_conditioned: true },
        parking: true,
        wifi: false,
        rating: 4.8,
        total_reviews: 500,
        total_menu_items: 150
    },

    // ============================================================
    // LOCATION & CONTACT
    // ============================================================
    location: {
        full_address: "Shop #9, Malir 15, Muhabbat Nagar, Karachi, Pakistan",
        area: "Malir 15",
        city: "Karachi",
        province: "Sindh",
        country: "Pakistan",
        landmark: "Near Muhabbat Nagar Chowk",
        google_maps: "https://maps.google.com/?q=Hot+N+Tasty+Roll+Malir+15+Karachi",
        directions: "From Malir 15 chowk, take the road towards Muhabbat Nagar. We are the 9th shop on the right side.",
        delivery_areas: [
            "Malir", "Gulshan-e-Hadeed", "Airport", "Shah Faisal", "Korangi",
            "Landhi", "Saddar", "Clifton", "DHA", "North Karachi", "Gulberg",
            "Johar", "Bahadurabad", "PECHS", "Tariq Road", "Gulistan-e-Johar",
            "Liaquatabad", "Nazimabad", "FB Area", "Surjani", "Orangi"
        ],
        delivery_radius_km: 15,
        nearby_landmarks: ["Malir Cantt", "Safoora Chowrangi", "Malir Halt", "Gulistan-e-Johar Block 15"]
    },

    contact: {
        phone_numbers: [
            { number: "0318-2370631", type: "main", timings: "11 AM - 11 PM" },
            { number: "0320-3742455", type: "alternate", timings: "11 AM - 11 PM" }
        ],
        whatsapp: { number: "0341-3139107", link: "https://wa.me/923413139107" },
        email: "info@hotntastyroll.com",
        social_media: {
            instagram: "@hotntastyroll",
            facebook: "Hot N Tasty Roll",
            tiktok: "@hotntastyroll"
        }
    },

    // ============================================================
    // TIMINGS
    // ============================================================
    timings: {
        monday:    { open: "11:00 AM", close: "11:00 PM" },
        tuesday:   { open: "11:00 AM", close: "11:00 PM" },
        wednesday: { open: "11:00 AM", close: "11:00 PM" },
        thursday:  { open: "11:00 AM", close: "11:00 PM" },
        friday:    { open: "12:00 PM", close: "11:30 PM", note: "Friday prayers break 1PM-2PM" },
        saturday:  { open: "11:00 AM", close: "12:00 AM (Midnight)" },
        sunday:    { open: "11:00 AM", close: "12:00 AM (Midnight)" },
        delivery:  { start: "11:00 AM", end: "10:30 PM", last_order: "10:15 PM" },
        kitchen_closes: "10:45 PM",
        holiday_note: "Open all public holidays except 1st day of Eid ul Fitr and Eid ul Adha"
    },

    // ============================================================
    // DELIVERY
    // ============================================================
    delivery: {
        available: true,
        time: "30-45 minutes",
        minimum_order: { amount: 300, currency: "PKR" },
        free_delivery_above: 1500,
        charges: {
            within_5km:  80,
            within_10km: 120,
            above_10km:  150
        },
        payment_methods: ["Cash on Delivery", "Credit Card", "Debit Card", "JazzCash", "EasyPaisa"],
        platforms: ["Foodpanda", "Direct call", "WhatsApp"],
        tracking: "Track via WhatsApp or phone call",
        packaging: "Eco-friendly tamper-proof packaging",
        bulk_order_discount: "10+ people — call for custom quote",
        corporate_orders: true
    },

    // ============================================================
    // COMPLETE MENU
    // ============================================================
    menu: {
        "SHAPATAR SPECIAL JUMBO ROLLS": {
            description: "Extra large premium rolls with secret spice blend and special sauce. Twice the size of regular rolls.",
            items: [
                { name: "Shapatar Special Jumbo Roll", price: 320, description: "Signature jumbo roll with special masala and secret sauce", spice: "Medium", bestseller: true },
                { name: "Crispy Spicy Jumbo Roll", price: 300, description: "Crispy fried chicken with spicy mayo and fresh veggies", spice: "High" },
                { name: "Crispy Spicy Jumbo Roll Cheese", price: 350, description: "Crispy spicy roll with melted cheddar cheese", spice: "High", cheese: true },
                { name: "Crispy Jumbo Chatpata Roll", price: 300, description: "Tangy and spicy chatpata flavor with crispy chicken", spice: "High" },
                { name: "Small Crispy Roll", price: 200, description: "Smaller crispy roll, perfect for light appetite", spice: "Medium" }
            ]
        },
        "CHICKEN ROLLS": {
            description: "Tender chicken wrapped in soft paratha with signature sauces. 16 varieties available.",
            items: [
                { name: "Chicken Chatni Roll", price: 180, description: "Classic chicken roll with mint chutney", spice: "Mild", bestseller: true },
                { name: "Chicken Mayo Garlic Roll", price: 200, description: "Creamy mayo garlic sauce with tender chicken", spice: "Mild" },
                { name: "Chicken Cheese Roll", price: 230, description: "Melted cheese with chicken and special sauce", spice: "Mild", cheese: true },
                { name: "Chicken Behari Chatni Roll", price: 220, description: "Behari spiced chicken with mint chutney", spice: "Medium" },
                { name: "Chicken Behari Cheese Roll", price: 250, description: "Behari chicken with melted cheese", spice: "Medium", cheese: true },
                { name: "Chicken Juicy Mayo Roll", price: 220, description: "Extra juicy chicken with creamy mayo", spice: "Mild" },
                { name: "Chicken Chatpata Roll", price: 200, description: "Tangy and spicy chatpata flavor", spice: "High" },
                { name: "Chicken Spicy Roll", price: 200, description: "For spice lovers - extra spicy chicken", spice: "High" },
                { name: "Chicken Reshmi Kabab Chatni Roll", price: 220, description: "Soft reshmi kabab with mint chutney", spice: "Mild" },
                { name: "Chicken Reshmi Garlic Mayo Roll", price: 240, description: "Reshmi kabab with garlic mayo sauce", spice: "Mild" },
                { name: "Chicken Reshmi Cheese Roll", price: 270, description: "Reshmi kabab with melted cheese", spice: "Mild", cheese: true },
                { name: "Chicken Reshmi Chatpata Roll", price: 240, description: "Reshmi kabab with chatpata masala", spice: "High" },
                { name: "Chicken Reshmi Behari Chatni Roll", price: 250, description: "Reshmi + Behari flavors with chutney", spice: "Medium" },
                { name: "Chicken Reshmi Juicy Mayo Roll", price: 240, description: "Reshmi kabab with juicy mayo", spice: "Mild" },
                { name: "Chicken Reshmi Behari Mayo Roll", price: 250, description: "Reshmi Behari with creamy mayo", spice: "Medium" },
                { name: "Chicken Reshmi Behari Cheese Roll", price: 280, description: "Loaded with reshmi, behari spices, and cheese", spice: "Medium", cheese: true, bestseller: true }
            ]
        },
        "CHICKEN MALAI ROLLS": {
            description: "Creamy malai chicken rolls with delicate aromatic spices. Premium offering for mild flavor lovers.",
            items: [
                { name: "Chicken Malai Chatni Roll", price: 240, description: "Creamy malai chicken with mint chutney", spice: "Mild", premium: true },
                { name: "Chicken Malai Garlic Roll", price: 260, description: "Malai chicken with garlic mayo", spice: "Mild", premium: true },
                { name: "Chicken Malai Mayo Cheese Roll", price: 310, description: "Ultimate creamy — malai, mayo, and cheese", spice: "Mild", cheese: true, premium: true },
                { name: "Chicken Malai Behari Roll", price: 280, description: "Malai + Behari fusion", spice: "Medium", premium: true },
                { name: "Chicken Juicy Malai Roll", price: 260, description: "Extra juicy malai chicken", spice: "Mild", premium: true },
                { name: "Chicken Malai Chatpata Roll", price: 260, description: "Malai with chatpata twist", spice: "High" },
                { name: "Chicken Malai Behari Cheese Roll", price: 310, description: "Premium — Malai, Behari, and Cheese", spice: "Medium", cheese: true, bestseller: true },
                { name: "Chicken Malai Spicy Mayo Roll", price: 280, description: "Creamy with a spicy kick", spice: "High" }
            ]
        },
        "BEEF BOTI ROLLS": {
            description: "Succulent beef boti with authentic spice blend. Tender boti pieces marinated for hours.",
            items: [
                { name: "Beef Boti Roll", price: 220, description: "Tender beef boti with special spices", spice: "Medium", bestseller: true },
                { name: "Beef Mayo Roll", price: 240, description: "Beef boti with creamy mayo", spice: "Medium" },
                { name: "Beef Cheese Roll", price: 270, description: "Beef boti with melted cheese", spice: "Medium", cheese: true },
                { name: "Beef Chatpata Roll", price: 240, description: "Tangy chatpata beef roll", spice: "High" },
                { name: "Beef Behari Roll", price: 250, description: "Behari spiced beef boti", spice: "Medium" },
                { name: "Beef Juicy Roll", price: 240, description: "Extra juicy beef boti", spice: "Medium", bestseller: true },
                { name: "Beef Spicy Roll", price: 240, description: "Spicy beef for heat lovers", spice: "High" }
            ]
        },
        "BEEF KABAB ROLLS": {
            description: "Flavorful beef kababs with signature chutneys. Made from premium minced beef.",
            items: [
                { name: "Beef Kabab Chatni Roll", price: 200, description: "Beef kabab with mint chutney", spice: "Medium", bestseller: true },
                { name: "Beef Kabab Mayo Roll", price: 220, description: "Beef kabab with creamy mayo", spice: "Medium" },
                { name: "Beef Kabab Cheese Roll", price: 250, description: "Beef kabab with melted cheese", spice: "Medium", cheese: true },
                { name: "Beef Kabab Chatpata Roll", price: 220, description: "Tangy chatpata beef kabab", spice: "High" },
                { name: "Beef Kabab Behari Chatpata Roll", price: 240, description: "Behari spiced with chatpata", spice: "High" },
                { name: "Beef Kabab Behari Chatni Roll", price: 240, description: "Behari kabab with mint chutney", spice: "Medium" },
                { name: "Beef Kabab Behari Mayo Cheese Roll", price: 290, description: "Loaded — Behari, Mayo, Cheese", spice: "Medium", cheese: true, bestseller: true },
                { name: "Beef Kabab Spicy Roll", price: 220, description: "Extra spicy beef kabab", spice: "High" }
            ]
        },
        "BAR B.Q": {
            description: "Authentic charcoal-grilled BBQ with secret marinade. All items grilled fresh on charcoal.",
            items: [
                { name: "Chicken Tikka (Leg)", price: 280, description: "Juicy leg piece tikka, marinated overnight", spice: "Medium", bestseller: true },
                { name: "Chicken Tikka (Chest)", price: 320, description: "Tender chest piece tikka", spice: "Medium", bestseller: true },
                { name: "Green Tikka", price: 320, description: "Herb-infused green tikka — unique and aromatic", spice: "Medium", signature: true },
                { name: "Malai Tikka", price: 340, description: "Creamy malai tikka, melt-in-mouth texture", spice: "Mild", premium: true },
                { name: "Chicken Malai Boti Plate", price: 380, description: "Malai boti with paratha", spice: "Mild", includes: "Boti + Paratha" },
                { name: "Chicken Boti Plate", price: 360, description: "Chicken boti with paratha", spice: "Medium", includes: "Boti + Paratha" },
                { name: "Beef Boti Plate", price: 380, description: "Beef boti with paratha", spice: "Medium", includes: "Boti + Paratha" },
                { name: "Beef Kabab Plate", price: 350, description: "Beef kabab with paratha", spice: "Medium", includes: "Kabab + Paratha" },
                { name: "Beef Gola Kabab Plate", price: 370, description: "Soft gola kabab with paratha", spice: "Medium" },
                { name: "Malai Fry Boti", price: 400, description: "Fried malai boti — extra crispy outside, juicy inside", spice: "Mild", premium: true },
                { name: "Dhaga Kabab", price: 370, description: "Threaded kabab — unique texture and taste", spice: "Medium", signature: true },
                { name: "Chicken Reshmi Kabab", price: 360, description: "Soft, silky reshmi kabab", spice: "Mild" },
                { name: "Chicken Makhni Kabab", price: 380, description: "Buttery makhni kabab", spice: "Mild" },
                { name: "Chandan Kabab", price: 390, description: "Aromatic chandan spiced kabab — house specialty", spice: "Medium", signature: true },
                { name: "Green Boti", price: 360, description: "Herb-marinated green boti", spice: "Medium" },
                { name: "Namkeen Tikka", price: 340, description: "Salty and spicy tikka", spice: "High" },
                { name: "Turkish Kabab", price: 380, description: "Turkish style spiced kabab", spice: "Medium" },
                { name: "Chicken Behari Tikka (Chest)", price: 340, description: "Behari tikka chest piece", spice: "Medium" },
                { name: "Chicken Behari Tikka (Leg)", price: 300, description: "Behari tikka leg piece", spice: "Medium" }
            ]
        },
        "BURGERS": {
            description: "Juicy flame-grilled burgers with premium cuts. Made fresh to order.",
            items: [
                { name: "Regular Beef Burger", price: 250, description: "Classic beef patty with lettuce and sauce", spice: "Mild", bestseller: true },
                { name: "Beef Cheese Burger", price: 300, description: "Beef patty with cheddar cheese", spice: "Mild", cheese: true },
                { name: "Beef Jumbo Burger", price: 350, description: "Double patty jumbo beef burger", spice: "Medium" },
                { name: "Beef Jumbo Cheese Burger", price: 400, description: "Double patty with double cheese", spice: "Medium", cheese: true },
                { name: "Chicken Burger", price: 220, description: "Grilled chicken patty", spice: "Mild", bestseller: true },
                { name: "Chicken Cheese Burger", price: 270, description: "Chicken patty with cheese", spice: "Mild", cheese: true },
                { name: "Chicken Big Burger", price: 300, description: "Large chicken patty burger", spice: "Medium" },
                { name: "Chicken Big Burger Cheese", price: 350, description: "Large chicken patty with cheese", spice: "Medium", cheese: true }
            ]
        },
        "ZINGER BURGER": {
            description: "Crispy zinger fillet with lettuce and special sauce. Our most popular burger category.",
            items: [
                { name: "Junior Zinger", price: 280, description: "Small zinger for light appetite", spice: "Mild" },
                { name: "King Size Zinger Burger", price: 380, description: "Large crispy zinger fillet", spice: "Medium", bestseller: true },
                { name: "Zinger Cheese Burger", price: 340, description: "Zinger with melted cheese", spice: "Medium", cheese: true, bestseller: true },
                { name: "Zinger Jumbo Cheese", price: 420, description: "Jumbo zinger with extra cheese — the ultimate zinger", spice: "Medium", cheese: true },
                { name: "Chicken Jumbo Zinger", price: 400, description: "Jumbo chicken zinger", spice: "Medium" }
            ]
        },
        "SUB BURGER": {
            description: "Loaded sub-style burgers with premium fillings.",
            items: [
                { name: "Sub Burger Malai Boti", price: 320, description: "Malai boti in sub roll", spice: "Mild", premium: true },
                { name: "Sub Burger Tikka Boti", price: 300, description: "Tikka boti sub", spice: "Medium", bestseller: true },
                { name: "Sub Burger Reshmi Kabab", price: 310, description: "Reshmi kabab sub", spice: "Mild" },
                { name: "Sub Burger Seekh Kabab", price: 290, description: "Seekh kabab sub", spice: "Medium" }
            ]
        },
        "PIZZA": {
            description: "Premium pizza with fresh toppings and three cheese blend. Large size.",
            items: [
                { name: "Chicken Tikka", price: 600, description: "Chicken tikka, onions, capsicum on pizza", spice: "Medium", bestseller: true },
                { name: "Chicken Fajita", price: 650, description: "Fajita chicken, bell peppers, onions", spice: "Mild", bestseller: true },
                { name: "Chicken Supreme", price: 750, description: "Chicken tikka, fajita, sausage, mushrooms", spice: "Medium", premium: true },
                { name: "Chicken Achari", price: 680, description: "Achari chicken with pickled spices — unique flavor", spice: "High", signature: true },
                { name: "Chicken Afghani", price: 700, description: "Creamy afghani chicken pizza", spice: "Mild", premium: true },
                { name: "Cheese Lover", price: 550, description: "Three cheese blend — mozzarella, cheddar, parmesan", spice: "Mild", vegetarian: true }
            ]
        },
        "CHINESE": {
            description: "Wok-tossed Chinese favorites with authentic sauces.",
            items: [
                { name: "Chicken Fried Rice", price: 350, description: "Classic chicken fried rice", spice: "Mild", bestseller: true },
                { name: "Egg Fried Rice", price: 300, description: "Egg fried rice", spice: "Mild" },
                { name: "Vegetable Fried Rice", price: 280, description: "Mix vegetable fried rice", spice: "Mild", vegetarian: true },
                { name: "Masala Rice", price: 320, description: "Spicy masala rice", spice: "Medium" },
                { name: "Special Hot N Tasty Fried Rice", price: 420, description: "Special house fried rice with chicken, egg, veggies", spice: "Medium", signature: true },
                { name: "Chicken Chowmen", price: 350, description: "Chicken chow mein noodles", spice: "Medium", bestseller: true },
                { name: "Vegetable Chowmen", price: 300, description: "Vegetable chow mein", spice: "Mild", vegetarian: true },
                { name: "Hot N Tasty Special Chowmen", price: 420, description: "Special house chow mein", spice: "Medium", signature: true },
                { name: "Chicken Shahslik With Rice", price: 400, description: "Chicken shahslik on sizzling plate with rice", spice: "Medium" },
                { name: "Chicken Manchurian With Rice", price: 380, description: "Chicken manchurian gravy with rice", spice: "Medium", bestseller: true },
                { name: "Singapori Rice", price: 370, description: "Singapore style flavored rice", spice: "Mild" },
                { name: "Chicken Chilli With Rice", price: 380, description: "Chicken chilli gravy with rice", spice: "High" },
                { name: "Chicken Chilli Dry With Rice", price: 400, description: "Dry chicken chilli with rice", spice: "High" },
                { name: "Chicken Jalfrezi", price: 420, description: "Chicken jalfrezi with rice", spice: "Medium" }
            ]
        },
        "BROAST": {
            description: "Crispy golden broast chicken with secret herb blend. Pressure-fried for extra crispiness.",
            items: [
                { name: "Chicken Broast Qtr. Leg", price: 320, description: "Leg piece broast", spice: "Medium" },
                { name: "Chest Broast Qtr. Chest", price: 340, description: "Chest piece broast", spice: "Medium" },
                { name: "Chicken Cheese Broast Qtr. Chest", price: 390, description: "Cheese stuffed chest broast", spice: "Medium", cheese: true },
                { name: "Mayo Garlic Broast Qtr. Chest", price: 390, description: "Chest broast with mayo garlic sauce", spice: "Mild" },
                { name: "Chicken Broast Qtr. Chatpata (Chest)", price: 360, description: "Chatpata spicy chest broast", spice: "High" },
                { name: "Chicken Broast Chatpata Qtr. (Leg)", price: 340, description: "Chatpata spicy leg broast", spice: "High" },
                { name: "Chicken Broast Full", price: 1100, description: "Full broast (4 pieces — 2 legs, 2 chests). Serves 4-5 people", spice: "Medium", serves: "4-5" },
                { name: "Chicken Broast Half", price: 600, description: "Half broast (2 pieces). Serves 2-3 people", spice: "Medium", serves: "2-3" }
            ]
        },
        "WINGS & DRUMSTICKS": {
            description: "Crunchy wings and drumsticks with signature spice.",
            items: [
                { name: "Hot Tasty Wings with Fries (6 Pcs)", price: 450, description: "6 spicy wings with fries", spice: "High" },
                { name: "Hot Tasty Wings with Fries (3 Pcs)", price: 280, description: "3 spicy wings with fries", spice: "High" },
                { name: "Chicken Drum Stick with Fries (6 Pcs)", price: 480, description: "6 drumsticks with fries", spice: "Medium" },
                { name: "Chicken Drum Stick with Fries (3 Pcs)", price: 300, description: "3 drumsticks with fries", spice: "Medium" }
            ]
        },
        "SANDWICHES": {
            description: "Freshly made sandwiches with premium fillings.",
            items: [
                { name: "Chicken Sandwich", price: 250, description: "Grilled chicken sandwich", bestseller: true },
                { name: "Chicken Club Sandwich", price: 320, description: "Triple-layer club sandwich", premium: true },
                { name: "Chicken BBQ Sandwich", price: 280, description: "BBQ chicken sandwich" },
                { name: "Chicken BBQ Club Sandwich", price: 350, description: "Triple-layer BBQ club", premium: true },
                { name: "Chicken Malai Club Sandwich", price: 350, description: "Malai chicken club", premium: true },
                { name: "Chicken Malai Sandwich", price: 300, description: "Malai chicken sandwich" },
                { name: "Crispy Club Sandwich", price: 350, description: "Crispy chicken club", bestseller: true }
            ]
        },
        "KARAHI & HANDI": {
            description: "Traditional karahi and handi dishes slow-cooked with aromatic spices. Served with 2 naan.",
            items: [
                { name: "Chicken Karahi", price: 800, description: "Classic chicken karahi. Serves 2-3", spice: "Medium", bestseller: true, serves: "2-3" },
                { name: "Chicken Brown Karahi", price: 850, description: "Brown karahi with roasted spices", spice: "Medium", signature: true, serves: "2-3" },
                { name: "Chicken Shahi Karahi", price: 900, description: "Royal shahi karahi with nuts", spice: "Mild", premium: true, serves: "2-3" },
                { name: "Chicken White Karahi", price: 900, description: "Creamy white karahi", spice: "Mild", premium: true, serves: "2-3" },
                { name: "Chicken Achari Karahi", price: 850, description: "Pickle-spiced achari karahi", spice: "High", serves: "2-3" },
                { name: "Chicken Handi", price: 800, description: "Chicken handi — slow cooked. Serves 2-3", spice: "Medium", bestseller: true, serves: "2-3" },
                { name: "Chicken Brown Handi", price: 850, description: "Brown handi. Serves 2-3", spice: "Medium", serves: "2-3" },
                { name: "Chicken Makhni Handi", price: 900, description: "Butter chicken style makhni handi. Serves 2-3", spice: "Mild", premium: true, serves: "2-3" }
            ]
        },
        "PASTA": {
            description: "Creamy indulgent pasta with fresh ingredients.",
            items: [
                { name: "Chicken Tikka Pasta", price: 380, description: "Penne pasta with chicken tikka", spice: "Medium" },
                { name: "Creamy Pasta Small", price: 350, description: "White sauce creamy pasta", spice: "Mild" },
                { name: "Creamy Pasta Large", price: 550, description: "Large white sauce creamy pasta", spice: "Mild" }
            ]
        },
        "FRIES": {
            description: "Crispy golden fries seasoned to perfection.",
            items: [
                { name: "Regular Fries", price: 150, description: "Classic salted fries", bestseller: true },
                { name: "Masala Fries", price: 180, description: "Spicy masala fries", spice: "Medium" },
                { name: "Cheese Fries", price: 230, description: "Fries topped with melted cheese", cheese: true },
                { name: "Mayo Fries", price: 200, description: "Fries with creamy mayo" },
                { name: "Small Pizza Fries", price: 280, description: "Pizza-style fries with sauce and cheese" },
                { name: "Large Pizza Fries", price: 450, description: "Large pizza-style fries" }
            ]
        },
        "EXTRAS": {
            description: "Sides and sauces.",
            items: [
                { name: "Paratha Small", price: 40, description: "Small soft paratha" },
                { name: "Paratha Big", price: 60, description: "Large fluffy paratha" },
                { name: "Chapati", price: 30, description: "Whole wheat chapati" },
                { name: "Mayo Garlic Sauce", price: 80, description: "Creamy mayo garlic dip" },
                { name: "Coleslaw", price: 100, description: "Fresh coleslaw" },
                { name: "Dining Roti (Bun)", price: 50, description: "Burger bun" },
                { name: "Chilli Sauce", price: 60, description: "Spicy chilli sauce" },
                { name: "Cheese Slice", price: 70, description: "Cheddar cheese slice" }
            ]
        },
        "DRINKS": {
            description: "Refreshing cold beverages.",
            items: [
                { name: "Cold Drink 350ml", price: 100, description: "Can of cold drink" },
                { name: "Cold Drink 500ml", price: 120, description: "Bottle of cold drink" },
                { name: "Cold Drink 1 Ltr", price: 150, description: "1 liter cold drink" },
                { name: "Cold Drink 1.5 Ltr", price: 200, description: "1.5 liter cold drink" },
                { name: "Mineral Water Small", price: 60, description: "500ml water bottle" },
                { name: "Mineral Water Large", price: 100, description: "1.5 liter water bottle" }
            ]
        }
    },

    // ============================================================
    // DEALS
    // ============================================================
    deals: [
        { id: 1, name: "Family Deal 1", price: 1200, original_price: 1600, savings: 400, discount_percent: 25, items: ["2 Chicken Rolls", "1 Zinger Burger", "2 Regular Fries", "2 Cold Drinks"], serves: "2-3 people", bestseller: true },
        { id: 2, name: "Family Deal 2", price: 1500, original_price: 2000, savings: 500, discount_percent: 25, items: ["2 Beef Rolls", "1 Pizza", "1 Large Fries", "2 Cold Drinks"], serves: "3-4 people" },
        { id: 3, name: "BBQ Deal", price: 1800, original_price: 2400, savings: 600, discount_percent: 25, items: ["Chicken Tikka", "Malai Boti", "2 Paratha", "Cold Drink"], serves: "2-3 people", bestseller: true },
        { id: 4, name: "Broast Deal", price: 1400, original_price: 1850, savings: 450, discount_percent: 24, items: ["Full Broast", "Large Fries", "Coleslaw", "2 Cold Drinks"], serves: "3-4 people", bestseller: true },
        { id: 5, name: "Combo Deal 1", price: 800, original_price: 1100, savings: 300, discount_percent: 27, items: ["Zinger Burger", "Regular Fries", "Cold Drink"], bestseller: true },
        { id: 6, name: "Combo Deal 2", price: 900, original_price: 1200, savings: 300, discount_percent: 25, items: ["Beef Burger", "Cheese Fries", "Cold Drink"] },
        { id: 7, name: "Roll Deal", price: 600, original_price: 800, savings: 200, discount_percent: 25, items: ["2 Chicken Rolls", "2 Cold Drinks"], bestseller: true },
        { id: 8, name: "Chinese Deal", price: 1000, original_price: 1350, savings: 350, discount_percent: 26, items: ["Chicken Fried Rice", "Chicken Chowmen", "2 Cold Drinks"], serves: "2 people" }
    ],

    // ============================================================
    // POPULAR ITEMS (Quick reference)
    // ============================================================
    popular_items: [
        { name: "Chicken Chatni Roll", price: 180, category: "CHICKEN ROLLS", rank: 1 },
        { name: "Zinger Cheese Burger", price: 340, category: "ZINGER BURGER", rank: 2 },
        { name: "Chicken Tikka (Leg)", price: 280, category: "BAR B.Q", rank: 3 },
        { name: "Chicken Fried Rice", price: 350, category: "CHINESE", rank: 4 },
        { name: "Malai Tikka", price: 340, category: "BAR B.Q", rank: 5 },
        { name: "Chicken Reshmi Behari Cheese Roll", price: 280, category: "CHICKEN ROLLS", rank: 6 },
        { name: "Chicken Malai Behari Cheese Roll", price: 310, category: "CHICKEN MALAI ROLLS", rank: 7 },
        { name: "Beef Kabab Behari Mayo Cheese Roll", price: 290, category: "BEEF KABAB ROLLS", rank: 8 },
        { name: "BBQ Deal", price: 1800, category: "DEALS", rank: 9 },
        { name: "Chicken Fajita Pizza", price: 650, category: "PIZZA", rank: 10 }
    ],

    // ============================================================
    // BUDGET RECOMMENDATIONS
    // ============================================================
    budget_guide: [
        { budget: 200, recommendation: "Chicken Chatni Roll (Rs.180) + Cold Drink (Rs.100) — great value!" },
        { budget: 300, recommendation: "2x Chicken Rolls or 1 Zinger Burger + Fries" },
        { budget: 500, recommendation: "Zinger Cheese Burger + Fries + Cold Drink, or 2 Beef Rolls + Cold Drinks" },
        { budget: 800, recommendation: "Combo Deal 1 (Zinger + Fries + Drink) — saves Rs.300!" },
        { budget: 1000, recommendation: "Broast Half + Fries + 2 Drinks, or Chinese Deal" },
        { budget: 1500, recommendation: "Family Deal 1 — best value for 2-3 people!" },
        { budget: 2000, recommendation: "BBQ Deal (Rs.1800) — perfect for 2-3 people, best BBQ experience!" }
    ],

    // ============================================================
    // SPECIAL DIETARY INFO
    // ============================================================
    dietary: {
        vegetarian: ["Vegetable Fried Rice", "Vegetable Chowmen", "Cheese Lover Pizza", "Cheese Fries", "Regular Fries", "Masala Fries", "Mayo Fries", "Coleslaw"],
        mild_spice: ["Chicken Chatni Roll", "Chicken Malai Chatni Roll", "Malai Tikka", "Chicken Fajita Pizza", "Chicken Sandwich"],
        high_spice: ["Chicken Spicy Roll", "Beef Chatpata Roll", "Chicken Chilli With Rice", "Namkeen Tikka", "Chicken Achari Pizza"],
        cheese_items: ["Chicken Cheese Roll", "Beef Cheese Roll", "Zinger Cheese Burger", "Cheese Fries", "Chicken Cheese Broast"],
        for_families: ["Broast Full (Rs.1100)", "Chicken Karahi (Rs.800)", "Family Deal 1 (Rs.1200)", "Family Deal 2 (Rs.1500)", "BBQ Deal (Rs.1800)"],
        for_solo: ["Chicken Chatni Roll (Rs.180)", "Zinger Burger (Rs.340)", "Combo Deal 1 (Rs.800)", "Chicken Fried Rice (Rs.350)"]
    },

    // ============================================================
    // FAQs (Comprehensive)
    // ============================================================
    faqs: [
        {
            question: "What are your opening hours?",
            answer: "We are open Monday to Thursday: 11 AM - 11 PM. Friday: 12 PM - 11:30 PM (Friday prayers break 1PM-2PM). Saturday & Sunday: 11 AM - 12 AM (Midnight). Delivery until 10:30 PM.",
            keywords: ["timing", "hours", "open", "close", "time", "kab", "schedule", "operating"]
        },
        {
            question: "Do you deliver? What is the delivery time?",
            answer: "Yes! We deliver across Karachi in 30-45 minutes. Minimum order Rs. 300. Free delivery on orders above Rs. 1,500. Charges: Rs.80 (5km), Rs.120 (10km), Rs.150 (above 10km).",
            keywords: ["delivery", "deliver", "home", "send", "ghar", "time", "duration", "minutes"]
        },
        {
            question: "What is your most popular item?",
            answer: "Our top 5 most ordered items are: 1) Chicken Chatni Roll (Rs.180), 2) Zinger Cheese Burger (Rs.340), 3) Chicken Tikka Leg (Rs.280), 4) Chicken Fried Rice (Rs.350), and 5) Malai Tikka (Rs.340).",
            keywords: ["popular", "best seller", "famous", "top", "favorite", "most ordered", "recommend"]
        },
        {
            question: "Do you have vegetarian options?",
            answer: "Yes! Vegetarian options include: Vegetable Fried Rice (Rs.280), Vegetable Chowmein (Rs.300), Cheese Lover Pizza (Rs.550), Cheese Fries (Rs.230), Regular Fries (Rs.150), and Masala Fries (Rs.180).",
            keywords: ["vegetarian", "veg", "no meat", "plant", "veggie", "without chicken"]
        },
        {
            question: "How can I place an order?",
            answer: "You can order in 4 ways: 1) Call 0318-2370631 or 0320-3742455, 2) WhatsApp 0341-3139107, 3) Foodpanda app, 4) Visit us at Malir 15 for dine-in or takeaway.",
            keywords: ["order", "place order", "how to order", "booking", "online order", "kaise mangwao"]
        },
        {
            question: "Do you have family deals?",
            answer: "Yes! Family Deal 1 (Rs.1200) serves 2-3 people, Family Deal 2 (Rs.1500) serves 3-4 people, BBQ Deal (Rs.1800) serves 2-3 people, Broast Deal (Rs.1400) serves 3-4 people.",
            keywords: ["family deal", "party", "combo", "group", "family pack", "deal"]
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept Cash on Delivery (COD), Credit/Debit Cards (Visa, Mastercard), JazzCash, and EasyPaisa.",
            keywords: ["payment", "pay", "cash", "card", "jazzcash", "easypaisa", "cod"]
        },
        {
            question: "Do you offer dine-in?",
            answer: "Yes! Our Malir 15 restaurant has dine-in with seating for up to 30 people. It's air-conditioned and comfortable.",
            keywords: ["dine in", "eat in", "restaurant", "sit in", "seating", "table"]
        },
        {
            question: "Do you have a loyalty program?",
            answer: "Yes! Every 10th order gets you 10% off. Give your phone number when ordering and we track it for you.",
            keywords: ["loyalty", "reward", "points", "membership", "regular customer", "discount"]
        },
        {
            question: "What are your cheapest items?",
            answer: "Most affordable items: Chapati (Rs.30), Paratha Small (Rs.40), Mineral Water (Rs.60), Regular Fries (Rs.150), Chicken Chatni Roll (Rs.180), Vegetable Fried Rice (Rs.280).",
            keywords: ["cheap", "affordable", "budget", "low price", "cheapest", "sasta", "kam paise"]
        },
        {
            question: "Do you have parking?",
            answer: "Yes, parking is available at our Malir 15 location.",
            keywords: ["parking", "park", "car"]
        },
        {
            question: "Do you cater for events or parties?",
            answer: "Yes! We cater for events, parties, and corporate orders. For 10+ people, call us at 0318-2370631 for a custom quote with special discounts.",
            keywords: ["event", "party", "catering", "corporate", "bulk", "wedding", "gathering"]
        },
        {
            question: "Are your ingredients halal?",
            answer: "Yes, absolutely! All our ingredients and meat are 100% halal certified. We source from trusted halal suppliers.",
            keywords: ["halal", "halal food", "certified", "halal meat", "pork"]
        },
        {
            question: "Can I customize my order?",
            answer: "Yes! You can customize spice levels, add/remove ingredients, and request extra sauces. Just mention it when ordering.",
            keywords: ["customize", "custom", "special request", "extra", "less spicy", "no onion"]
        }
    ],

    // ============================================================
    // PERSONALITY & CONVERSATION CONFIG
    // ============================================================
    personality: {
        name: "Tasty",
        role: "AI Food Assistant at Hot N Tasty Roll",
        traits: ["warm", "friendly", "knowledgeable", "desi", "helpful"],
        languages: ["English", "Urdu", "Roman Urdu"],
        emoji_style: "moderate",
        can_answer_general: true,
        general_topics: [
            "general knowledge", "cooking tips", "food facts", "weather",
            "math help", "language translation", "general advice",
            "fun facts", "jokes", "recipe ideas", "health tips"
        ],
        general_topics_to_avoid: [
            "medical diagnosis", "legal advice", "financial investment",
            "political opinions", "religious rulings (fatwas)"
        ],
        response_style: {
            restaurant: "concise, informative, with prices",
            general: "conversational, helpful, bring back to food if natural",
            complaint: "empathetic, apologetic, solution-focused"
        }
    },

    // ============================================================
    // COMPLAINT HANDLING
    // ============================================================
    complaint_responses: {
        late_delivery: "I sincerely apologize for the delay! Please call us at 0318-2370631 and we'll prioritize your order right away.",
        wrong_order: "I'm so sorry about the wrong order! Please call 0318-2370631 immediately and we'll send the correct order ASAP.",
        cold_food: "That's not acceptable and I apologize! Please contact us at 0318-2370631 and we'll make it right for you.",
        quality_issue: "Your satisfaction is our priority. Please call 0318-2370631 or WhatsApp 0341-3139107 and our manager will personally handle your concern.",
        general: "I'm really sorry about your experience! Please contact us at 0318-2370631 or WhatsApp 0341-3139107 so we can resolve this for you immediately."
    }
};

// ============================================================
// GLOBAL EXPORT
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHATBOT_DATA;
}

window.CHATBOT_DATA = CHATBOT_DATA;

const totalItems = Object.values(CHATBOT_DATA.menu).reduce((acc, cat) => acc + cat.items.length, 0);
console.log(`✅ Chatbot training data loaded! Total items: ${totalItems}`);
