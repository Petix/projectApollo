# projectApollo

- Tanuljatok valamit

# Installation & Run from terminal/powershell
```sh
cd server
# install
npm install
# run with auto restart on file save in src
npm run dev

```

## TODOs


- use typescript
- use ESLint extension, with a good formating config(should be provided by Petix)

## client

- requests
  - GET xxx
  - POST yyy

## server

- http server
- routes
  - GET xxx 
    - return Date()
  - POST yyy
    - return { "eztKulted" : message.serialize() }
### TODOs
- use express framework
- use routes for express, to make various endpoints
- use some logger mechanism(log4js)
- use nconf(e.g.: to configure port and log4js )

## common

- kozos reszek, amit a szerver es a klients is hasznal
    ```  class Message
            serialize(){
                return JSON.stringify(this.data)
            }
            static deserialize(dataString){
                new  Message(JSON.xxx(dataString))
            }
    ```

### endpoints

```
GET localhost:8080/xxx

POST localhost:8080/yyy
```

