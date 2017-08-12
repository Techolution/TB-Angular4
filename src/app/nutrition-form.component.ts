import { Component } from '@angular/core';
import { FoodGroup, Nutrition} from './nutrition.model';

@Component({
    selector: 'nutrition-form',
    templateUrl: './nutrition-form.component.html',
    styleUrls: ['./nutrition-form.component.css']
})
export class NutritionFormComponent {

    foodGroups: { id: number, group: string }[];

    model: Nutrition;

    submitted: boolean;

    constructor() {
        this.submitted = false;
        this.foodGroups = [
            { id: 1, group: FoodGroup[1]},
            { id: 2, group: FoodGroup[2]},
            { id: 3, group: FoodGroup[3]},
            { id: 4, group: FoodGroup[4]}
        ]
        this.reset();
    }

    onSubmit() {
        this.submitted = true;

    }

    reset() {
        this.model = new Nutrition(1, '', 0, 0, 0, 0);
    }

    updateTotalFat() {
        this.model.totalFat = this.model.saturatedFat + this.model.transFat;
    }
}