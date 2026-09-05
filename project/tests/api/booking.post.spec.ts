import {test, expect} from "@playwright/test";
import {createRandomBookingBody} from "../../lib/data/api/booking"
import {getFutureDate, getToday} from "../../lib/helpers/dateHelper"

test.describe("booking/ POST requests", async () => {
    let requestBody: { firstname: string;
        lastname: string; totalprice: number; depositpaid: boolean;
        bookingdates: {
            checkin: string;
            checkout: string;
        };
        additionalneeds: string; };

    test.beforeEach(async ({request}) => {
        let checkinString = getToday();
        let checkoutString = getFutureDate(checkinString, 5);

        requestBody = await createRandomBookingBody(
            checkinString,
            checkoutString
        );
    });

    test("POST new booking with full body", async ({request}) => {
        const response = await request.post("booking/", {
            data: requestBody,
        });

        expect(response.status()).toBe(200);
        const body = await response.json();

        const booking = await body.booking;
        expect(booking.firstname).toBe(requestBody.firstname);
        expect(booking.lastname).toBe(requestBody.lastname);
        expect(booking.totalprice).toBe(requestBody.totalprice);
        expect(booking.depositpaid).toBe(requestBody.depositpaid);

        const bookingDates = await booking.bookingdates;
        expect(bookingDates.checkin).toBe(requestBody.bookingdates.checkin);
        expect(bookingDates.checkout).toBe(requestBody.bookingdates.checkout);
    });
});

