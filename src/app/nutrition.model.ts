export enum FoodGroup {
    Dairy = 1,
    Fruit,
    Grains,
    Meat,
    Vegetables
}

export class Nutrition {
    constructor(
        public foodGroup: number,
        public label: string,
        public cholesterol: number,
        public saturatedFat: number,
        public transFat: number,
        public totalFat: number
    ) {}
}