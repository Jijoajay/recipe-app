// home page tab data
export const homeTabData = [
    {
      title: "BreakFast",
      path: "breakfast",
    },
    {
      title: "Lunch",
      path: "lunch",
    },
    {
      title: "Dinner",
      path: "dinner",
    },
    {
      title: "Snack",
      path: "snack",
    },
    {
      title: "Tea Time",
      path: "teaTime",
    },
];

//  navbar page data
export const navTab = [
    {
        title: "Home",
        path:"/"
    },
    {
        title:"Recipes",
        path:"/recipe-collection"
    }
]

// filter data
export const filterPanelData = [
    {
        title: "Cooking Time",
        name:"time",
        icon: "RxLapTimer",
        options: [
            {
                title: "< 5 mins",
                value: "5"
            },
            {
                title: "10 - 20 mins",
                value: "10-20"
            },
            {
                title: "20-30 mins",
                value: "20-30"
            },
            {
                title: "30-45 mins",
                value: "30-45"
            },
        ]
    },
    {
        title: "Ingredients",
        name:"ingredients",
        icon: "Ingredients",
        options: [
            {
                title: "Vegetarian",
                value: "vegetarian"
            },
            {
                title: "Non Vegetarian",
                value: "non-vegetarian"
            }
        ]
    },
    {
        title: "Calories",
        name:"calories",
        icon: "Calories",
        options: [
            {
                title: "Low Calorie (< 100)",
                value: "low"
            },
            {
                title: "Moderate Calorie (100-300)",
                value: "moderate"
            },
            {
                title: "High Calorie (> 300)",
                value: "high"
            }
        ]
    },
    {
        title: "Diet",
        name:"dietLabels",
        icon: "diet",
        options: [
            {
                title: "Keto",
                value: "keto"
            },
            {
                title: "Paleo",
                value: "paleo"
            },
            {
                title: "Vegan",
                value: "vegan"
            },
            {
                title: "Gluten-Free",
                value: "gluten-free"
            }
        ]
    },
    {
        title: "Health",
        name:"healthLabels",
        icon: "health",
        options: [
            {
                title: "Heart Healthy",
                value: "heart-healthy"
            },
            {
                title: "Diabetes-Friendly",
                value: "diabetes-friendly"
            },
            {
                title: "Low Sugar",
                value: "low-sugar"
            },
            {
                title: "Low Sodium",
                value: "low-sodium"
            }
        ]
    },
    {
        title: "Meal",
        name:"mealType",
        icon: "meal",
        options: [
            {
                title: "Breakfast",
                value: "breakfast"
            },
            {
                title: "Lunch",
                value: "lunch"
            },
            {
                title: "Dinner",
                value: "dinner"
            },
            {
                title: "Snack",
                value: "snack"
            }
        ]
    },
    {
        title: "Dish",
        icon: "dish",
        name:"dishType",
        options: [
            {
                title: "Soup",
                value: "soup"
            },
            {
                title: "Salad",
                value: "salad"
            },
            {
                title: "Dessert",
                value: "dessert"
            },
            {
                title: "Main Course",
                value: "main-course"
            }
        ]
    },
    {
        title: "Cuisine",
        name:"cuisineType",
        icon: "cuisine",
        options: [
            {
                title: "Italian",
                value: "italian"
            },
            {
                title: "Indian",
                value: "indian"
            },
            {
                title: "Chinese",
                value: "chinese"
            },
            {
                title: "Mexican",
                value: "mexican"
            }
        ]
    }
];
