# POP3 — Post Office Protocol version 3

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: TCP + TLS (при защите)

## Что это и для чего нужно

Загружает письма с сервера по простой модели mailbox retrieval. Может помечать сообщения на удаление до завершения сессии.

**Пример применения:** Получение писем на один почтовый клиент.

## Как это работает

1. **Подключение с TLS**
2. **Авторизация**
3. **STAT и LIST**
4. **RETR**
5. **DELE и QUIT**

## На что обратить внимание

Удаление обычно применяется при QUIT; POP3 хуже подходит для синхронизации множества устройств.

## Связанные понятия

- [SMTP](../02-application/smtp.md) — Simple Mail Transfer Protocol.
- [IMAP](../02-application/imap.md) — Internet Message Access Protocol.
- [TCP](../01-core/tcp.md) — Transmission Control Protocol.
- [TLS / SSL](../03-security/tls.md) — Transport Layer Security.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
