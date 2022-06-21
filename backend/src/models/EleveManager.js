const AbstractManager = require("./AbstractManager");

class EleveController extends AbstractManager {
  static table = "eleve";

  insert(eleve) {
    return this.connection.query(
      `insert into ${EleveController.table} (nom, prenom, telephone, mail) values (?, ?, ?, ?)`,
      [eleve.nom, eleve.prenom, eleve.telephone, eleve.mail]
    );
  }

  update(eleve) {
    return this.connection.query(
      `update ${EleveController.table} set title = ? where id = ?`,
      [eleve.title, eleve.id]
    );
  }
}

module.exports = EleveController;
