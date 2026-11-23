# WebSocket — Two-way web messaging

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: TCP (обычно)

## Что это и для чего нужно

Постоянное двустороннее соединение: после согласования клиент и сервер могут отправлять сообщения в любой момент.

**Пример применения:** Чаты, онлайн-доски, биржевые котировки.

## Как это работает

1. **Установка TCP**
2. **Запрос Upgrade**
3. **Переключение протокола**
4. **Двусторонние сообщения**
5. **Ping и Pong**
6. **Закрытие**

## На что обратить внимание

WebSocket сам по себе не является механизмом авторизации или шифрования; для защиты нужен wss://.

## Связанные понятия

- [HTTP](../02-application/http.md) — Hypertext Transfer Protocol.
- [HTTPS](../03-security/https.md) — HTTP Secure.
- [TCP](../01-core/tcp.md) — Transmission Control Protocol.
- [WebRTC](../02-application/web-rtc.md) — Browser video calls.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
