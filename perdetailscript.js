class Person {
  constructor(name, address, phoneNumber, email, dateOfBirth) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
  }

  get Name() {
    return `${this.name}`;
  }

  printDetails() {
    console.log(this.Name);
    console.log(this.address);
    console.log(this.phoneNumber);
    console.log(`Email: ${this.email}`);
    console.log(`Date of Birth: ${this.dateOfBirth}`);
  }
}

const Appu = new Person(
  "Gokul Vishnu K G",
  "No 49 DNC street Walajapet, Ranipet District",
  "+91 8056740650",
  "gokul.appu6@gmail.com",
  "18-08-1995"
);

Appu.printDetails();
