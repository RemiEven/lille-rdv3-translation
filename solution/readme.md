# Translated product BFF

In this exercise, you're working as a node.js developer in a company that wants to sell products online, for both french speaking and english speaking customers.
You'll be working on a Back-For-Front, adding a route that exposes translated data about a given product.

The company already has two APIs: `product` and `translations`, and a colleague already initialized the code for the bff you'll be working on.

## User story

Here is the user story you've received:

>__As a__ customer,
>__I want__ to retrieve product data in my preferred language
>__in order to__ choose whether I'll buy it.

The frontend developers of your teams are currently on vacations, but before that you agreed on the following response body:
```json
{
    "id": "P123",
    "name": "chemise",
    "description": [
        "couleur: rouge",
        "taille: moyen"
    ]
}
```

Backend developers have given you two links:
- [documentation for translation-api](http://localhost:8080)
- [documentation for product-api](http://localhost:8081)

And also an API key for translation API: `T1234`.

Your colleagues have already initialized a typescript/express project.
It can be build with `npm run build`, then the server can be started with `npm run start`.
Unit test have also been setup (with ts-jest): `npm run test`
