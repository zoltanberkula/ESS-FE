function readDocuments(collection, options = {}) {
  let { where, orderBy, limit } = options;
  let query = firebase.firestore().collection(collection);

  if (where) {
    if (where[0] instanceof Array) {
      for (let w of where) {
        query = query.where(...w);
      }
    } else {
      query = query.where(...where);
    }
  }

  if (orderBy) {
    query = query.orderBy(...orderBy);
  }

  if (limit) {
    query = query.limit(limit);
  }

  return query.get().then().catch();
}

