import {EmployeeDetails} from "./hrmInterface";
import { faker } from '@faker-js/faker';

export function getRandomEmployeeDetails(): EmployeeDetails {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        middleName: faker.person.middleName(),
        employeeId: faker.number.int(1000).toString(),
    };
}