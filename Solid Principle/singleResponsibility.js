// Without SRP
class User {
    constructor(name) {
      this.name = name;
    }
  
    saveToDatabase() {
      // Save user to the database
    }
  
    sendEmail() {
      // Send welcome email to the user
    }
  }
  
  // With SRP
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  class UserRepository {
    saveToDatabase(user) {
      // Save user to the database
    }
  }
  
  class EmailService {
    sendWelcomeEmail(user) {
      // Send welcome email to the user
    }
  }