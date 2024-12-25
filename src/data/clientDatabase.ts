import {Client} from "../types/clientTypes";

export const clients: Client[] = [
    {
        id: 1,
        name: "Boules",
        coachId: 1,
        dietPlan: [
            {
                day: "Monday",
                meals: [
                    {
                        name: "Breakfast",
                        food: "Eggs"
                    },
                    {
                        name: "Lunch",
                        food: "Chicken"
                    },
                    {
                        name: "Dinner",
                        food: "Salmon"
                    }
                ]
            },
            {
                day: "Tuesday",
                meals: [
                    {
                        name: "Breakfast",
                        food: "Oatmeal"
                    },
                    {
                        name: "Lunch",
                        food: "Turkey"
                    },
                    {
                        name: "Dinner",
                        food: "Steak"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Thomas",
        coachId: 2,
        dietPlan: [
            {
                day: "Monday",
                meals: [
                    {
                        name: "Breakfast",
                        food: "Eggs"
                    },
                    {
                        name: "Lunch",
                        food: "Chicken"
                    },
                    {
                        name: "Dinner",
                        food: "Salmon"
                    }
                ]
            },
            {
                day: "Tuesday",
                meals: [
                    {
                        name: "Breakfast",
                        food: "Eggs"
                    },
                    {
                        name: "Lunch",
                        food: "Turkey"
                    },
                    {
                        name: "Dinner",
                        food: "Steak"
                    }
                ]
            }
        ]
    }
]