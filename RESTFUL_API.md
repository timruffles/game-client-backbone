FORMAT: 1A
HOST: http://www.google.com

# Game Client REST API

- All routes accessible under `/api/v1`
- All resource names plural - `players`, `commands`
- Everything `camel_case`, not `snakeCase`
- No root object in request or response, (e.g body is `{name: "bob"}` not `{user: {name: "bob"}}`) - use headers for meta-data

## Games [/games]

+ Response 200


            {
                "id": 42,
                "players": [
                ],
                "chat": [
                ],
            }

### GET

Retrieves current state of the game, and id to start subscribing for events.

+ Response 200

        [Game][]

  + Headers
    
            validUntilEventId: 1

## Player [/players]

+ Model (application/json)

    + Body

            {
                "id": 42,
                "name": "douggyC",
            }


### POST

Joins the game.

+ Response 200

        [Player][]

## Commands [/commands]

+ Model (application/json)

    + Body

            {
                "type": "move",
                "dx": 1,
                "dy": 1,
            }

### POST

Sends a command

+ Response 200
