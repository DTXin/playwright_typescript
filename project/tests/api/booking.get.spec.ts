import {test, expect} from "@playwright/test";
import {isValidDate} from "../../lib/helpers/dateHelper";

test.describe("booking/ GET requests", async () => {
    test("Get all booking results", async ({request}) => {
        const response = await request.get("/booking");
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.length).toBeGreaterThan(0)
    })

    test("GET booking by id with details.", async ({ request }) => {
        const response = await request.get("/booking/1");
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.firstname).toBe("Susan");
        expect(body.lastname).toBe("Ericsson");
        expect(body.totalprice).toBe(547);
        expect(body.depositpaid).toBe(false);
        expect(isValidDate(body.bookingdates.checkin)).toBe(true);
        expect(isValidDate(body.bookingdates.checkout)).toBe(true);
    });

    test("GET booking by id that doesn't exists.", async ({ request }) => {
        const response = await request.get("/booking/9999999999");
        expect(response.status()).toBe(404);
    });
});

