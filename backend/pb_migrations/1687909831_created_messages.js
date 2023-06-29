migrate((db) => {
  const collection = new Collection({
    "id": "4mpsinrm5x326b1",
    "created": "2023-06-27 23:50:31.477Z",
    "updated": "2023-06-27 23:50:31.477Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sskd2ymy",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fd7tko04",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "8lkne2k8",
        "name": "conversation_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "qqmzbu1b3uawqz8",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("4mpsinrm5x326b1");

  return dao.deleteCollection(collection);
})
