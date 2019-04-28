import * as chai from "chai";
import {SimpleType} from "../src/types/SimpleType";

it("test to JSON", () => {
    const v1: SimpleType = new SimpleType();
    v1.strValue = "I am a test string";
    v1.dateValue = new Date(2019, 3, 10);

    const jsonStr = JSON.stringify(v1);
    console.log (jsonStr);

    const v2: SimpleType = SimpleType.buildFromJSON(jsonStr);
    chai.assert.isTrue(SimpleType.equals(v1, v2));
});

it("test clone 1", () => {
    const v1: SimpleType = new SimpleType();
    v1.strValue = "I am a test string";
    v1.dateValue = new Date(2019, 3, 10);

    const v2: SimpleType = SimpleType.clone(v1);
    chai.assert.isTrue(SimpleType.equals(v1, v2));
});

it("test clone 2", () => {
    const v1: SimpleType = new SimpleType();
    v1.strValue = "I am a test string";
    v1.numValue = 4.1;

    const v2: SimpleType = SimpleType.clone(v1);
    chai.assert.isTrue(SimpleType.equals(v1, v2));
});

it("test not equal 1", () => {
    const v1: SimpleType = new SimpleType();
    v1.strValue = "I am a test string_";
    v1.dateValue = new Date(2019, 3, 10);

    const v2: SimpleType = new SimpleType();
    v2.strValue = "I am a test string";
    v2.dateValue = new Date(2019, 3, 10);

    chai.assert.isFalse(SimpleType.equals(v1, v2));

    const v3: SimpleType = new SimpleType();
    v3.dateValue = new Date(2018, 3, 10);

    const v4: SimpleType = new SimpleType();
    v4.dateValue = new Date(2018, 4, 10);

    chai.assert.isFalse(SimpleType.equals(v3, v4));

});

it("test not equal 2", () => {
    const v1: SimpleType = new SimpleType();
    v1.strValue = "I am a test string";

    const v2: SimpleType = new SimpleType();
    v2.strValue = "I am a test string";
    v2.dateValue = new Date(2019, 3, 10);
    v2.numValue = 2;

    chai.assert.isFalse(SimpleType.equals(v1, v2));
});

it("test not equal 3", () => {
    const v1: SimpleType = new SimpleType();
    v1.strValue = "I am a test string";
    v1.dateValue = new Date(2019, 3, 10);

    const v2: SimpleType = new SimpleType();
    v2.strValue = "I am a test string";
    v2.numValue = 2;

    chai.assert.isFalse(SimpleType.equals(v1, v2));
});
