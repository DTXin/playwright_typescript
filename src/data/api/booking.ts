import { faker } from "@faker-js/faker";

export async function createRandomBookingBody(checkInString: string, checkOutString: string) {
    return {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        totalprice: faker.number.int({ min: 100, max: 999 }),
        depositpaid: Math.random() < 0.5, //returns true or false,
        bookingdates: {
            checkin: checkInString,
            checkout: checkOutString
        },
        additionalneeds: "breakfast"
    };
}