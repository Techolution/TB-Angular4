import { Injectable } from '@angular/core';
import { NUMBERS } from './numbers';

export class MyFirstService {

    constructor() {}

    getNumbers(): number[] {
        return NUMBERS;
    }
}