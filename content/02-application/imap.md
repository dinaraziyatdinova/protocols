# IMAP — Internet Message Access Protocol

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: TCP + TLS (при защите)

## Что это и для чего нужно

Работает с папками и флагами писем на сервере. Позволяет синхронизировать состояние почты на разных устройствах.

**Пример применения:** Почтовый ящик на ноутбуке и телефоне одновременно.

## Как это работает

1. **Защищённое соединение**
2. **Команды с тегами**
3. **SELECT INBOX**
4. **FETCH и флаги**
5. **IDLE**

## На что обратить внимание

IMAP — не протокол отправки писем; он управляет доступом к хранящимся сообщениям.

## Связанные понятия

- [SMTP](../02-application/smtp.md) — Simple Mail Transfer Protocol.
- [POP3](../02-application/pop3.md) — Post Office Protocol version 3.
- [TCP](../01-core/tcp.md) — Transmission Control Protocol.
- [TLS / SSL](../03-security/tls.md) — Transport Layer Security.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
