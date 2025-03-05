import { convertIntegerParameter } from "../convertIntegerParameter.js";

describe("test convertIntegerParameter", function() {
    it("Tests parameters", function() {
    let integer = 3;
    let parameters = convertIntegerParameter(integer);
    expect(parameters).toBe("Yee");
    });
});
describe("test convertIntegerParameter", function() {
    it("Tests parameters", function() {
    let integer = 7;
    let parameters = convertIntegerParameter(integer);
    expect(parameters).toBe("Ha");
    });
});
describe("test convertIntegerParameter", function() {
    it("Tests parameters", function() {
    let integer = 21;
    let parameters = convertIntegerParameter(integer);
    expect(parameters).toBe("Yee Ha");
    });
});
describe("test convertIntegerParameter", function() {
    it("Tests parameters", function() {
    let integer = 17;
    let parameters = convertIntegerParameter(integer);
    expect(parameters).toBe("Nada");
    });
});