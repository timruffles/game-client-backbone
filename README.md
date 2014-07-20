# Game Client



## API

Commands from players to server go via a JSON REST API. Events in the game are sent via server-sent events.

### EventSource

Events will be fired in the format `type:id:name`, e.g `Player:24:move`. Events are JSON.

### Entities

#### Player

##### Actions

- create
- delete
- update
- attack
- say
- wasStruck
- died

