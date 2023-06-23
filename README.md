##graphql query

query {
  getCompanyTree {
    id
    cost
    parentId
    name
    children {
      id
      cost
      name
      parentId
      children {
        id
        cost
        parentId
        children {
          id
        }
      }
    }
    createdAt
  }
}

{
  "data": {
    "getCompanyTree": {
      "id": "uuid-1",
      "cost": 52983,
      "parentId": "0",
      "name": "Webprovise Corp",
      "children": [
        {
          "id": "uuid-2",
          "cost": 5199,
          "name": "Stamm LLC",
          "parentId": "uuid-1",
          "children": [
            {
              "id": "uuid-4",
              "cost": 1340,
              "parentId": "uuid-2",
              "children": null
            },
            {
              "id": "uuid-7",
              "cost": 1636,
              "parentId": "uuid-2",
              "children": null
            },
            {
              "id": "uuid-19",
              "cost": 794,
              "parentId": "uuid-2",
              "children": null
            }
          ]
        },
        {
          "id": "uuid-3",
          "cost": 15713,
          "name": "Blanda, Langosh and Barton",
          "parentId": "uuid-1",
          "children": [
            {
              "id": "uuid-5",
              "cost": 1288,
              "parentId": "uuid-3",
              "children": null
            },
            {
              "id": "uuid-6",
              "cost": 2512,
              "parentId": "uuid-3",
              "children": null
            },
            {
              "id": "uuid-9",
              "cost": 3086,
              "parentId": "uuid-3",
              "children": null
            },
            {
              "id": "uuid-17",
              "cost": 4072,
              "parentId": "uuid-3",
              "children": null
            },
            {
              "id": "uuid-20",
              "cost": 908,
              "parentId": "uuid-3",
              "children": null
            }
          ]
        },
        {
          "id": "uuid-8",
          "cost": 28817,
          "name": "Bartell - Mosciski",
          "parentId": "uuid-1",
          "children": [
            {
              "id": "uuid-10",
              "cost": 4288,
              "parentId": "uuid-8",
              "children": null
            },
            {
              "id": "uuid-11",
              "cost": 12236,
              "parentId": "uuid-8",
              "children": [
                {
                  "id": "uuid-12"
                },
                {
                  "id": "uuid-14"
                }
              ]
            },
            {
              "id": "uuid-13",
              "cost": 1686,
              "parentId": "uuid-8",
              "children": null
            },
            {
              "id": "uuid-15",
              "cost": 4725,
              "parentId": "uuid-8",
              "children": null
            },
            {
              "id": "uuid-16",
              "cost": 3277,
              "parentId": "uuid-8",
              "children": null
            }
          ]
        },
        {
          "id": "uuid-18",
          "cost": 2033,
          "name": "Walter, Schmidt and Osinski",
          "parentId": "uuid-1",
          "children": null
        }
      ],
      "createdAt": "2021-02-26T00:55:36.632Z"
    }
  }
}