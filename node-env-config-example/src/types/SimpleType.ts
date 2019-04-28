export class SimpleType {
    public numValue?: number;
    public strValue?: string;
    // after the type is deserialized dateValue contains a string - JSON specific :-/
    public dateValue?: Date | string;

    public static equals(obj1: SimpleType, obj2: SimpleType): boolean {
        if (obj1.numValue !== obj2.numValue) {
            return false;
        }
        if ((obj1.strValue !== obj2.strValue) ||
            (obj1.dateValue === undefined &&  obj2.dateValue !== undefined ) ||
            (obj1.dateValue !== undefined &&  obj2.dateValue === undefined )) {
            return false;
        }
        if (obj1.dateValue !== undefined && obj2.dateValue !== undefined) {
            const date1: Date = typeof obj1.dateValue === "string" ? new Date(obj1.dateValue) : obj1.dateValue;
            const date2: Date = typeof obj2.dateValue === "string" ? new Date(obj2.dateValue) : obj2.dateValue;
            return (date1.getTime() === date2.getTime()) && (date1.getMilliseconds() === date2.getMilliseconds());
        }
        return true;
    }

    public static clone(obj: SimpleType): SimpleType {
        const ret = new SimpleType();
        ret.numValue = obj.numValue;
        ret.strValue = obj.strValue;
        ret.dateValue = obj.dateValue;
        return ret;
    }

    public static buildFromJSON(str: string): SimpleType {
        return JSON.parse(str, (key, value) => {
            if ((key === "dateValue") && (typeof value === "string")) {
                return new Date(value);
            }
            return value;
        });
    }
}
