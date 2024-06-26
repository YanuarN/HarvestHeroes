const { Firestore } = require('@google-cloud/firestore');


async function storeData(id, data) {
    const db = new Firestore();
    db.settings({ ignoreUndefinedProperties: true })

    const predictCollection = db.collection('prediksibanana');
    return predictCollection.doc(id).set(data);
}

module.exports = storeData;