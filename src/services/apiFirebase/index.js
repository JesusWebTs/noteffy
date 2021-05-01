import db from "../../firebase.config";

class ApiConnect {
  static post = async (data) => {
    return db
      .collection("notes")
      .doc()
      .set(data)
      .then((writeResult) => writeResult)
      .catch((err) => {
        console.log(err);
      });
  };
  static getOne = async (uid) => {
    return db
      .collection("notes")
      .where("uid", "==", uid)
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((i) => data.push(i.data()));
        return data;
      });
  };
  static getAll = async (uid) => {
    return db
      .collection("notes")
      .where("uid", "==", uid)
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((i) => data.push(i.data()));
        return data;
      });
  };
  static update = async (uuid, data) => {
    return db
      .collection("notes")
      .where("uuid", "==", uuid)
      .get()
      .then((querySnapshot) => {
        let id = 0;
        querySnapshot.forEach((i) => (id = i.id));
        return db
          .collection("notes")
          .doc(id)
          .update(data)
          .then((writeResult) => {
            return writeResult;
          });
      });
  };
  static delete = async (uuid) => {
    return db
      .collection("notes")
      .where("uuid", "==", uuid)
      .get()
      .then((querySnapshot) => {
        let id = 0;
        querySnapshot.forEach((i) => (id = i.id));
        return db
          .collection("notes")
          .doc(id)
          .delete()
          .then((writeResult) => {
            return writeResult;
          });
      });
  };
}

export default ApiConnect;
