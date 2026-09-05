import {test, expect} from "@playwright/test";
import Ajv from "ajv";
import bookingSchema from '../../tests/api/schema/bookingSchema.json';

test("Example schema validation.", async ({ request }) => {
    const response = await request.get("/booking/5");
    const responseBody = await response.json();

    const ajv = new Ajv();
    const validate = ajv.compile(bookingSchema);
    const result = validate(responseBody);
    console.log(result);
    // expect(result).toBe(true)

    // Using for display error. To debug.
    expect(result, JSON.stringify(validate.errors)).toBe(true);
});