migrate((db) => {
  const collection = new Collection({
    "id": "qqmzbu1b3uawqz8",
    "created": "2023-06-27 23:45:23.672Z",
    "updated": "2023-06-27 23:45:23.672Z",
    "name": "conversations",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qqmzbu1b3uawqz8");

  return dao.deleteCollection(collection);
})
