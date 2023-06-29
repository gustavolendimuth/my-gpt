migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qqmzbu1b3uawqz8")

  // remove
  collection.schema.removeField("iraukit4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfxq1lya",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qqmzbu1b3uawqz8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iraukit4",
    "name": "user_id",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("yfxq1lya")

  return dao.saveCollection(collection)
})
