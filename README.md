# projectApollo

- Tanuljatok valamit

# Clients- Server chat
- server
  - centralis pont ami gyujti az adatokat a kliensektol
  - innen tudjak lekerni az adatokat a kliensek
  - egy helyen el lehet menteni az adatokat diskre(file, db)
  - tobb fajta keppen lehet komunikalni vele(streaming/polling)
  - lehet kialakitani szobakat es az osszes cliensnek egy helyrol kuldeni az uj adatokat
    - valami olyan mint a topicok valami forumon, vagy csoportbeszelgetesek

- client
  - adatlekeres
  - adatkuldes
  - cliens identifikacio
  
  
## v1.0
    - server
      - minden memoriaban
        - restartnal minden adat veszik

      - endpointok

        - HTTP GET /clients
          - kilistazza az osszes aktiv clienst(hogy tudjad kinek tudsz irni)
          - RESP: ["XYZ", "ABC"]

        - HTTP POST /login
          - lenyegeben csak megmondja a cliens a szervernek hogy itt vagyok. Elso korben ez lehetne valamife'le "keep alive" mechanizmus
          - REQ: { "client_id" : "XYZ" }
          - RESP: { "result": "logged_in" }

        - HTTP GET /messages?client_id=XYZ
          - visszaadja az osszes uzenetet amik a cliensnek voltak kuldve
          - {"messages": [ ...MSG...] }, a POSTnal leirtam kb minek kell ott lenni

        - HTTP POST /message
          - MSG REQ: { "from_client_id" : "XYZ", "message": "asdfasdf sdf sdf", "to_client_id": "ABC", "created_at": 1571075433 }
          - MSG RESP
            - { "result": "sent" }
            - { "error": -1, "result": "Client XYZ not logged in" }

        - HTTP GET /stats
          - statistikak
          - mennyien aktivak
          - mennyi uzenetet tarolunk aktualisan
          - ...barmi ami hasznos lehet



    - client
      - implementalja a szerver metodusait
      - periodikusan kuldi a keep alive-ot
      - parancssorbol bekeri a parancsokat(clients/login/messages/message)
        - ha a parancshoz kell valamilyen masik adat azt is bekeri(kinek kuldesz, mit kuldesz)

## v2.0
    - server
      - adatbazissal - nem vesznek el az uzenetek
    - client
      - UI - csak valami total egyszeru

## v3.0
    - server / client
      - user authentication/user management(CRUD)
    - server
      - csak az tudja meghivni a tobbi endpointot aki elotte sikeresen bejelentkezett
## v4.0
    - server/client
      - rooms

## future 
    - ws
    - redis notifications channels





```
.... TO BE DELETED ....
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
```