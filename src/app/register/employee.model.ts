export class Employee {
    private firstName: string;
    private lastName: string;
    private gender: string;
    private dateOfBirth: string;
    private departmentName: string;

    get FirstName(): string {
        return this.firstName;
    }

    set FirstName(FirstName: string) {
        this.firstName = FirstName;
    }

    get LastName(): string {
        return this.lastName;
    }

    set LastName(LastName: string) {
        this.lastName = LastName;
    }

    get Gender(): string {
        return this.gender;
    }

    set Gender(Gender: string) {
        this.gender = Gender;
    }

    get DateOfBirth(): string {
        return this.dateOfBirth;
    }

    set DateOfBirth(DateOfBirth: string) {
        this.dateOfBirth = DateOfBirth;
    }

    get DepartmentName(): string {
        return this.departmentName;
    }

    set DepartmentName(DepartmentName: string) {
        this.departmentName = DepartmentName;
    }
    
}