"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const faker_1 = require("@faker-js/faker");
class User {
    constructor() {
        this.name = faker_1.faker.name.fullName();
        this.location = { lat: parseFloat(faker_1.faker.address.latitude()), lng: parseFloat(faker_1.faker.address.longitude()) };
    }
}
exports.User = User;
