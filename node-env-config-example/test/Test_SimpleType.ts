import * as chai from "chai";
import {SimpleType} from "../src/types/SimpleType";

it("test create", () => {
    const v1: SimpleType = new SimpleType();
    chai.assert.isNotNull(v1, "fresh object is not null");

    const v2: SimpleType = new SimpleType();
    chai.assert.isTrue(v2.equals(v1));
    chai.assert.isNotNull(v2.toString());

    chai.assert.deepEqual(v1, v2, "fresh objects are equal");

    v2.numValue = 5;
    chai.assert.notDeepEqual(v1, v2, "modified objects are equal");
    chai.assert.isNotTrue(v2.equals(v1));
    chai.assert.isNotTrue(v1.equals(v2));

    v1.numValue = 5;
    chai.assert.deepEqual(v1, v2, "modified objects are not equal");

    const v3: SimpleType = v2.clone();
    chai.assert.deepEqual(v2, v3, "cloned objects are equal");
    chai.assert.isTrue(v2.equals(v3));
    chai.assert.isTrue(v3.equals(v2));

});

it("test compare date type", () => {
    const v1: SimpleType = new SimpleType();
    chai.assert.isNotNull(v1, "fresh object is not null");

    const v2: SimpleType = new SimpleType();
    chai.assert.isTrue(v2.equals(v1));

    const now = new Date();
    v1.dateValue = now;
    chai.assert.isNotTrue(v2.equals(v1));
    chai.assert.isNotTrue(v1.equals(v2));
    v2.dateValue = now;
    chai.assert.isTrue(v2.equals(v1));

    const v1Cloned: SimpleType = v1.clone();
    chai.assert.isTrue(v1.equals(v1Cloned));

    v1Cloned.dateValue = new Date();
    v1Cloned.dateValue.setMilliseconds(30);
    const dateCloned: any = v1Cloned.dateValue;
    const timeCloned: any = v1Cloned.dateValue.getTime();
    const milliSecondsCloned: any = v1Cloned.dateValue.getMilliseconds();

    const dateOriginal: any = v1.dateValue;
    const timeOriginal: any = v1.dateValue.getTime();
    const milliOriginal: any = v1.dateValue.getMilliseconds();

    chai.assert.isNotTrue(v1.equals(v1Cloned));
});
