
# Library of 200

A Library of 200 egy olyan alkalmazás, amely egy könyvtár műveleteinek (olvasók, könyvek, kölcsönzések CRUD múveleteinek) hatékony kezelésére szolgál. A backend **Java 22** és **Spring Boot** használatával készült, míg a frontend **React** keretrendszerrel lett fejlesztve.
Az alkalmazás hitelesítést is biztosít **Spring Security** segítségével, és **H2 adatbázist** használ az adatok tárolására.

## Funkciók
- **Dolgozói hitelesítés**: Dolgozók hitelesítése HTTP Basic szabvánnyal Spring Security segítségével.
- **Könyvek kezelés**: Könyvek hozzáadása, frissítése, törlése és listázása.
- **Olvasók kezelés**: Olvasók hozzáadása, frissítése, törlése és listázása.
- **Kölcsönzések kezelése**: Kölcsönzések hozzáadása, törlése és listázása.

## Használt technológiák
### Backend
- **Java 22**
- **Spring Boot**
- **Spring Security** (HTTP Basic autentikációval)
- **H2 Adatbázis**

### Frontend
- **React**
- **Axios** (API hívásokhoz)
- **React Router** (navigációhoz)
- **Bootstrap**
- **React Bootstrap**

---

### Backend futtatása
Klónozás után IDE-ből futtatható az `Application` osztály.

A backend szerver a `http://localhost:8080` címen fog futni.

---

### Frontend futtatása
Klónozás után 2 parancsot kell beírni a terminalba:
1. Telepíteni kell a függőségeket:
   ```bash
   npm install
   ```
2. Az alkalmazás indítása:
   ```bash
   npm start
   ```

A frontend szerver a `http://localhost:3000` címen fog futni.

---

## API Végpontok

### Könyvek
- **GET** `/api/all/book`: Könyvlista lekérése az olvasók számára.
- **GET** `/api/worker/book`: Könyvlista lekérése a dolgozók számára.
- **GET** `/api/all/book/search`: Könyvek lekérése megadott ISBN, cím és szerző szerint.
- **GET** `/api/worker/book/{isbn}`: Könyv lekérése megadott ISBN alapján.
- **POST** `/api/worker/book`: Könyv létrehozása.
- **PUT** `/api/worker/book`: Könyv frissítése.
- **DELETE** `/api/worker/book/{isbn}`: Könyv törlése.

### Olvasók
- **GET** `/api/worker/person`: Olvasólista lekérése.
- **GET** `/api/worker/person/search`: Olvasók lekérése megadott Id, keresztnév és vezetéknév szerint.
- **GET** `/api/worker/person/{id}`: Olvasó lekérése megadott Id alapján.
- **POST** `/api/worker/person`: Olvasó létrehozása.
- **PUT** `/api/worker/person/{id}`: Olvasó frissítése.
- **DELETE** `/api/worker/person/{id}`: Olvasó törlése.

### Kölcsönzések
- **GET** `/api/worker/renting`: Kölcsönzési lista lekérése.
- **GET** `/api/worker/renting/{code}`: Kölcsönzés lekérése megadott kölcsönzési kód alapján.
- **POST** `/api/worker/renting`: Kölcsönzés létrehozása.
- **PUT** `/api/worker/renting/{code}`: Kölcsönzés frissítése.
- **DELETE** `/api/worker/renting/{code}`: Olvasó törlése.
---

## H2 Adatbázis Konfiguráció
Az alkalmazás **H2 adatbázist** használ. A konzol elérhető a `http://localhost:8080/db` címen.

### H2 Adatbázis Hozzáférési Adatok
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Felhasználónév**: `username`
- **Jelszó**: (üres jelszó)

### Adatbázis séma

Az adatbázis az alábbi 3 típust kezeli az ábrán látható számosságokkal:

![image](https://github.com/user-attachments/assets/21d25858-5a10-4fb0-b610-eb6776977a8f)
---

### Hozzáférési adatok

A dolgozók az alábbi adatokkal tudnak bejelentkezni:
| Felhasználónév | Jelszó   |
|----------------|----------|
| worker         | worker   |
---
