import {test, expect} from "@playwright/test";
import {getToken, createHeader} from "../../lib/fixtures/api/authenFixture"

test.describe("booking/ DELETE requests", async () => {
    let token: string;
    let headers: any;
    let bookingID = 197;

    test.beforeAll(async ({}) => {
        token = await getToken();
        headers = await createHeader(token)
    });


    test("DELETE booking with specific id:", async ({request}) => {
        const response = await request.delete(`/booking/${bookingID}`, {
            headers: headers,
        });

        expect(response.status()).toBe(201);

        const body = await response.text();
        expect(body).toBe("Created");
    })

    test("DELETE booking with an id that doesn't exist", async ({ request }) => {
        const response = await request.delete("/booking/9999999", {
            headers: headers,
        });

        expect(response.status()).toBe(405);
    });

    test("DELETE booking id without authentication", async ({ request }) => {
        const response = await request.delete(`booking/${bookingID}`);

        expect(response.status()).toBe(403);

        const body = await response.text();
        expect(body).toBe("Forbidden");
    });
});