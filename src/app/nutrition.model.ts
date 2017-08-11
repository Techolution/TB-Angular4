export enum FoodGroup {
    Dairy = 1,
    Fruit,
    Grains,
    Meat,
    Vegetables
}

export class Nutrition {
    constructor(
        public cholesterol: number,
        public foodGroup: FoodGroup,
        public label: string,
        public saturatedFat: number,
        public sodium: number,
        public totalFat: number,
        public transFat: number
    ) {}
}

//input
//select
//checkbox
//radio