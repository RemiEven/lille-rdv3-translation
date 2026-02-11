// un service qui renvoie des produits avec des caractéristiques :

GET /products/123
{
    "id": 123,
    "name": "SHIRT",
    "attributes": {
        "color": "RED",
        "size": "MEDIUM"
    }
}

GET /products/456
{
    "id": 456,
    "name": "BOOTS",
    "attributes": {
        "color": "GREEN"
    }
}

// un service qui renvoie des traductions (une trad à la fois)
// -> Cette route est "lente"
GET /translations?lang=fr&key=red
{
    "key": "red",
    "lang": "fr",
    "label": "rouge"
}

// -> les contrats d'API sont donnés par un swagger

// On veut faire dans notre BFF une route pour avoir un produit avec tout de traduit

// squelette d'app express en TS avec un endpoint hello world (+ builder)
// pour la perf : faire les appels aux services de trad en parallele et/ou les mettre en cache
// discussion : outillage (lint, formatting)
// discussion : grandes étapes à mettre dans la CI ?
// discussion : comment déployer et mettre en prod ? (gestion de la conf)
