const db = new Map();

class User {
  constructor(firstName, lastName, email, password, isSubscribed = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.isSubscribed = isSubscribed;
    this.createAt = new Date();
    this.id = db.size + 1;
  }

  addUser() {
    db.set(this.id, this);
  }

  static findOne(userId) {
    return db.get(userId);
  }

  static findAll() {
    return [...db.values()];
  }

  deleteUser() {
    return db.delete(this.id);
  }

  updateInfoUser(updateFields) {
    db.set(this.id, { ...this, ...updateFields });
    return db.get(this.id);
  }
}

module.exports = User;
