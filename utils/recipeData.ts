export interface Recipe {
	title: string;
	cookTime: string;
	calories: string;
	servings: string;
	description: string;
	ingredients: string[];
	steps: string[];
}

export const recipes: { [key: string]: Recipe } = {
	"herb-chicken": {
		title: "Herb Chicken",
		cookTime: "1 hr 10 min",
		calories: "195",
		servings: "4",
		description:
			"Juicy, herb-crusted chicken breast baked to perfection. A healthy and flavorful main dish that pairs well with any side.",
		ingredients: [
			"4 chicken breasts",
			"2 tbsp olive oil",
			"2 tsp dried thyme",
			"2 tsp dried rosemary",
			"1 tsp garlic powder",
			"1 tsp salt",
			"1/2 tsp black pepper",
			"1 lemon",
		],
		steps: [
			"Preheat oven to 375°F",
			"Mix herbs, salt, and pepper in a bowl",
			"Brush chicken with olive oil",
			"Coat chicken with herb mixture",
			"Bake for 25-30 minutes",
		],
	},
	"chicken-lo-mein": {
		title: "Chicken Lo Mein",
		cookTime: "40 min",
		calories: "875",
		servings: "4",
		description:
			"A takeout favorite made at home! Tender chicken and noodles tossed in a savory sauce with crisp vegetables.",
		ingredients: [
			"1 lb lo mein noodles",
			"2 chicken breasts, sliced",
			"2 cups mixed vegetables",
			"3 tbsp soy sauce",
			"2 tbsp sesame oil",
			"2 cloves garlic, minced",
			"1 tbsp ginger, grated",
			"1/4 cup oyster sauce",
		],
		steps: [
			"Cook noodles according to package",
			"Stir-fry chicken until cooked through",
			"Add vegetables and stir-fry",
			"Mix sauce ingredients",
			"Combine everything and toss well",
		],
	},
	"rice-and-beef-skillet": {
		title: "Rice & Beef Skillet",
		cookTime: "1 hr",
		calories: "500",
		servings: "3",
		description:
			"A hearty one-pan meal combining seasoned ground beef with fluffy rice. Perfect for busy weeknights!",
		ingredients: [
			"1 onion, chopped",
			"1 lb ground beef",
			"1 cup monterey jack cheese",
			"1 tsp dried mustard",
			"3 beef bullion cubes, crushed",
			"2 scallions, sliced",
			"1 cup rice",
		],
		steps: [
			"Heat olive oil in a skillet and [saute]sauté[/saute] onions",
			"Add ground beef, dried mustard, bullion cubes, rice, and 1 cup of water",
			"Let the water absorb for 25min",
		],
	},
	"pan-seared-ribeye-steak": {
		title: "Pan Seared Ribeye Steak",
		cookTime: "20 min",
		calories: "250",
		servings: "2",
		description:
			"A perfectly seared steak with a golden-brown crust and juicy center. Simple yet sophisticated.",
		ingredients: [
			"2 ribeye steaks, 1-inch thick",
			"2 tbsp olive oil",
			"3 cloves garlic, crushed",
			"2 sprigs fresh rosemary",
			"2 tbsp butter",
			"1 tsp salt",
			"1 tsp black pepper",
		],
		steps: [
			"Let steaks come to room temperature",
			"Season generously with salt and pepper",
			"Heat oil in pan until smoking",
			"[saute]Sear[/saute] steaks 4-5 minutes each side",
			"Add butter, garlic, and rosemary",
			"Baste steaks with butter for 1-2 minutes",
			"Rest for 5-10 minutes before serving",
		],
	},
	"pan-seared-salmon": {
		title: "Pan Seared Salmon",
		cookTime: "45 min",
		calories: "600",
		servings: "4",
		description:
			"Crispy-skinned salmon fillets with a lemon herb sauce. A healthy and delicious seafood option.",
		ingredients: [
			"4 salmon fillets",
			"2 tbsp olive oil",
			"1 lemon",
			"4 tbsp butter",
			"2 cloves garlic, minced",
			"1 tbsp fresh dill",
			"Salt and pepper to taste",
		],
		steps: [
			"Pat salmon dry with paper towels",
			"Season with salt and pepper",
			"Heat oil in a large skillet",
			"[saute]Sear[/saute] salmon skin-side up for 4 minutes",
			"Flip and cook for another 3 minutes",
			"Add butter, garlic, and lemon juice",
			"Garnish with fresh dill",
		],
	},
	carbonara: {
		title: "Classic Carbonara",
		cookTime: "30 min",
		calories: "300",
		servings: "4",
		description:
			"Traditional Italian pasta dish with crispy pancetta, eggs, and Pecorino Romano cheese. Rich and creamy without cream.",
		ingredients: [
			"1 lb spaghetti",
			"4 oz pancetta or guanciale",
			"4 large eggs",
			"1 cup Pecorino Romano",
			"1 cup Parmigiano Reggiano",
			"2 cloves garlic",
			"Black pepper to taste",
		],
		steps: [
			"Cook pasta in salted water",
			"[saute]Sauté[/saute] pancetta until crispy",
			"Whisk eggs and cheese together",
			"Toss hot pasta with egg mixture",
			"Add pancetta and black pepper",
			"Serve immediately with extra cheese",
		],
	},
	ramen: {
		title: "Homemade Ramen",
		cookTime: "25 min",
		calories: "200",
		servings: "2",
		description:
			"Quick and satisfying ramen bowl with soft-boiled eggs, fresh vegetables, and savory broth.",
		ingredients: [
			"2 packs ramen noodles",
			"4 cups chicken broth",
			"2 soft-boiled eggs",
			"1 cup bean sprouts",
			"2 green onions, sliced",
			"2 sheets nori",
			"Soy sauce to taste",
		],
		steps: [
			"Boil eggs for 6-7 minutes",
			"Cook noodles in broth",
			"[saute]Sauté[/saute] bean sprouts briefly",
			"Assemble bowls with noodles and broth",
			"Top with eggs, sprouts, and green onions",
			"Add nori and soy sauce",
		],
	},
	"beef-tacos": {
		title: "Beef Tacos",
		cookTime: "35 min",
		calories: "400",
		servings: "6",
		description:
			"Flavorful ground beef tacos with fresh toppings. A family favorite that's easy to customize.",
		ingredients: [
			"1 lb ground beef",
			"1 packet taco seasoning",
			"12 corn tortillas",
			"1 cup shredded lettuce",
			"1 cup diced tomatoes",
			"1 cup shredded cheese",
			"Sour cream for serving",
		],
		steps: [
			"[saute]Brown[/saute] ground beef in skillet",
			"Add taco seasoning and water",
			"Simmer until thickened",
			"Warm tortillas in a pan",
			"Assemble tacos with meat and toppings",
			"Serve with lime wedges",
		],
	},
};

export function getRecipeData(recipeId: string): Recipe | undefined {
	return recipes[recipeId];
}
