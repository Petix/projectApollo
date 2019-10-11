# projectApollo

- Tanuljatok valamit

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

