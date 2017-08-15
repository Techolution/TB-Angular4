export class Employee {

    constructor(
        public id: number,
        public name: string,
        public employeeOfTheMonth: boolean,
        public nickName?: string
    ) {}
    
}