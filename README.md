# Тестовое задание для "Эмфи"

- Создать внешнюю интеграцию на amoCRM.
- Обойти CORS через локальный proxy сервер.
- Вывести данные по существующим сделкам на главной странице проекта.

`npm install` Установить dependencies

`npm run rdr` Запустить тестовый redirect_server (http://localhost:3000)

`npm run rdr` Запустить тестовый proxy_server (http://localhost:8080)

Открыть `./src/main-page.html` через  VS Code Live Server или через команду `serve ./src/main-page.html`

`SUB_DOMAIN`, `CLIENT_ID`, `CLIENT_SECRET` и `CODE` необходимо указать в файле `.env`