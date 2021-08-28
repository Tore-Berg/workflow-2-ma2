import { returnPerson } from "./returnPerson"
import { expect } from "@jest/globals";

test("is this the person?", function() {
    expect(returnPerson("Tore", 39)).toEqual({name: "Tore", age: 39})
})