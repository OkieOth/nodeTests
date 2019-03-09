export class SimpleType {
    public numValue: number | null = null;
    public strValue: string | null = null;
    public dateValue: Date | null = null;

    public toString(): string {
        return JSON.stringify (this);
    }

    public equals(v: SimpleType): boolean {
        if (this.numValue !== v.numValue) {
            return false;
        }
        if (this.strValue !== v.strValue) {
            return false;
        }
        if (this.dateValue === null &&  v.dateValue !== null ) {
            return false;
        }
        if (this.dateValue !== null &&  v.dateValue === null ) {
            return false;
        }
        if (this.dateValue !== null && v.dateValue !== null &&
            ((this.dateValue.getTime() !== v.dateValue.getTime()) ||
            (this.dateValue.getMilliseconds() !== v.dateValue.getMilliseconds()))) {
            return false;
        }
        return true;
    }

    public clone(): SimpleType {
        const newObj: SimpleType = new SimpleType();
        newObj.numValue = this.numValue;
        newObj.strValue = this.strValue;
        if (this.dateValue == null) {
            newObj.dateValue = null;
        } else {
           newObj.dateValue = new Date(this.dateValue);
           newObj.dateValue.setMilliseconds(this.dateValue.getMilliseconds());
        }
        return newObj;
    }
}
