export class EmailMessage {
  name: string;
  email: string;
  message: string;

  constructor(name: string, email: string, message: string) {
    this.name = name;
    this.email = email;
    this.message = message;
  }

  // public static toJson() {
  //   return {
  //     name: this.name,
  //     email: this.email,
  //     message: this.message,
  //   };
  // }
}
