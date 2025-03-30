import { Recipe } from "@/app/_models/Interfaces";
import { v4 as uuid } from "uuid";

export const recipes: Array<Recipe> = [
    {
        id: uuid(),
        name: "Mixed Berry Melody",
        reviews: 3,
        cookedBefore: true,
        ingredients: [
            "2 cups mixed berries (strawberries, blueberries, raspberries)",
            "1 tbsp honey",
            "1 tsp lemon juice",
            "1/2 cup Greek yogurt",
            "1/4 cup granola",
        ],
        preparation:
            "Wash and slice the berries. Mix with honey and lemon juice. Let sit for 10 minutes. Serve with yogurt and granola.",
    },
    {
        id: uuid(),
        name: "Thai red curry cauliflower soup",
        reviews: 2,
        cookedBefore: true,
        ingredients: [
            "1 head cauliflower, chopped",
            "2 tbsp red curry paste",
            "1 can coconut milk",
            "4 cups vegetable broth",
            "1 onion, diced",
            "2 cloves garlic, minced",
        ],
        preparation:
            "Sauté onion and garlic. Add curry paste and cook for 1 minute. Add cauliflower and broth, simmer until tender. Blend with coconut milk until smooth.",
    },
    {
        id: uuid(),
        name: "Crispy spiced eggplant",
        reviews: 3,
        cookedBefore: true,
        ingredients: [
            "1 large eggplant",
            "1/2 cup breadcrumbs",
            "1 tsp paprika",
            "1/2 tsp cumin",
            "1/4 cup olive oil",
            "Salt to taste",
        ],
        preparation:
            "Slice eggplant into rounds. Mix breadcrumbs with spices. Dredge eggplant in oil then breadcrumb mixture. Bake at 400°F for 20-25 minutes until crispy.",
    },
    {
        id: uuid(),
        name: "Pumpkin soup with a twist",
        reviews: 2,
        cookedBefore: true,
        ingredients: [
            "2 cups pumpkin puree",
            "1 apple, peeled and chopped",
            "1 onion, diced",
            "4 cups chicken stock",
            "1/2 tsp cinnamon",
            "1/4 cup cream",
        ],
        preparation:
            "Sauté onion and apple until soft. Add pumpkin and stock, simmer for 15 minutes. Blend until smooth. Stir in cinnamon and cream before serving.",
    },
    {
        id: uuid(),
        name: "Charred tofu, corn, and asparagus salad",
        reviews: 4,
        cookedBefore: true,
        ingredients: [
            "1 block firm tofu, cubed",
            "2 ears corn, kernels removed",
            "1 bunch asparagus, trimmed",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tbsp rice vinegar",
        ],
        preparation:
            "Grill or pan-sear tofu until charred. Sauté corn and asparagus. Whisk together dressing ingredients. Toss all components together while warm.",
    },
    {
        id: uuid(),
        name: "One pan creamy pesto chicken & gnocchi",
        reviews: 4,
        cookedBefore: true,
        ingredients: [
            "4 chicken breasts",
            "1 package gnocchi",
            "1/2 cup pesto",
            "1/2 cup heavy cream",
            "1 cup cherry tomatoes",
            "1/2 cup grated parmesan",
        ],
        preparation:
            "Brown chicken in a large skillet. Remove and cook gnocchi in same pan. Add pesto, cream, and tomatoes. Return chicken to pan, top with parmesan, and bake at 375°F for 15 minutes.",
    },
    {
        id: uuid(),
        name: "Creamy chicken bake",
        reviews: 3,
        cookedBefore: true,
        ingredients: [
            "4 chicken breasts",
            "1 can cream of mushroom soup",
            "1/2 cup sour cream",
            "1 cup shredded cheese",
            "1 cup crushed crackers",
        ],
        preparation:
            "Mix soup and sour cream. Place chicken in baking dish, cover with soup mixture. Top with cheese and crackers. Bake at 350°F for 35-40 minutes.",
    },
    {
        id: uuid(),
        name: "French-style chicken and potatoes",
        reviews: 2,
        cookedBefore: false,
        ingredients: [
            "4 chicken thighs",
            "4 potatoes, quartered",
            "1 onion, sliced",
            "2 cloves garlic",
            "1 tsp herbes de Provence",
            "1/2 cup white wine",
        ],
        preparation:
            "Brown chicken and set aside. Sauté potatoes, onion, and garlic. Return chicken to pan, add herbs and wine. Cover and simmer for 30 minutes until chicken is cooked through.",
    },
    {
        id: uuid(),
        name: "Braised beef and vegetables",
        reviews: 1,
        cookedBefore: true,
        ingredients: [
            "2 lbs beef chuck",
            "4 carrots, chopped",
            "3 potatoes, chopped",
            "2 onions, quartered",
            "4 cups beef broth",
            "2 tbsp tomato paste",
        ],
        preparation:
            "Sear beef on all sides. Add vegetables, broth, and tomato paste. Cover and braise in oven at 325°F for 3 hours until beef is fork-tender.",
    },
    {
        id: uuid(),
        name: "Pumpkin, spinach and lentil lasagne",
        reviews: 4,
        cookedBefore: true,
        ingredients: [
            "12 lasagne sheets",
            "2 cups pumpkin puree",
            "1 cup cooked lentils",
            "2 cups spinach",
            "2 cups ricotta",
            "2 cups grated mozzarella",
        ],
        preparation:
            "Layer lasagne sheets with pumpkin mixture, lentils, spinach, and cheeses. Repeat layers. Bake covered at 375°F for 45 minutes, then uncovered for 15 minutes.",
    },
    {
        id: uuid(),
        name: "Soothing chicken soup",
        reviews: 4,
        cookedBefore: true,
        ingredients: [
            "1 whole chicken",
            "3 carrots, sliced",
            "3 celery stalks, sliced",
            "1 onion, diced",
            "8 cups water",
            "1 tsp thyme",
        ],
        preparation:
            "Simmer chicken in water for 1 hour. Remove chicken, shred meat. Return meat to broth with vegetables and thyme. Simmer for 30 minutes until vegetables are tender.",
    },
    {
        id: uuid(),
        name: "Cornflake-crumbed chicken with wedges",
        reviews: 3,
        cookedBefore: true,
        ingredients: [
            "4 chicken breasts",
            "2 cups crushed cornflakes",
            "1/2 cup flour",
            "2 eggs, beaten",
            "4 potatoes, cut into wedges",
            "2 tbsp olive oil",
        ],
        preparation:
            "Dredge chicken in flour, egg, then cornflakes. Bake at 400°F for 20 minutes. Toss potato wedges with oil and bake alongside chicken for 30 minutes.",
    },
    {
        id: uuid(),
        name: "Quick beef enchiladas",
        reviews: 2,
        cookedBefore: true,
        ingredients: [
            "1 lb ground beef",
            "1 packet taco seasoning",
            "8 tortillas",
            "2 cups enchilada sauce",
            "2 cups shredded cheese",
            "1/2 cup sour cream",
        ],
        preparation:
            "Brown beef with seasoning. Fill tortillas with beef mixture, roll up. Place in baking dish, cover with sauce and cheese. Bake at 350°F for 20 minutes. Serve with sour cream.",
    },
    {
        id: uuid(),
        name: "Cheesy broccoli bake",
        reviews: 3,
        cookedBefore: true,
        ingredients: [
            "4 cups broccoli florets",
            "2 cups cheese sauce",
            "1/2 cup breadcrumbs",
            "1/4 cup grated parmesan",
            "1 tbsp butter",
        ],
        preparation:
            "Steam broccoli until tender-crisp. Place in baking dish, cover with cheese sauce. Mix breadcrumbs with parmesan and butter, sprinkle on top. Bake at 375°F for 15 minutes until bubbly.",
    },
    {
        id: uuid(),
        name: "Lamb shank ragu with pappardelle",
        reviews: 2,
        cookedBefore: true,
        ingredients: [
            "4 lamb shanks",
            "1 onion, diced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1 can crushed tomatoes",
            "1 lb pappardelle pasta",
        ],
        preparation:
            "Brown lamb shanks. Sauté vegetables. Add tomatoes and lamb, simmer for 2 hours until tender. Cook pasta according to package directions. Serve ragu over pasta.",
    },
];
