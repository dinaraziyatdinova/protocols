# SMTP — Simple Mail Transfer Protocol

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: TCP + TLS (при защите)

## Что это и для чего нужно

Отправляет и передаёт письма между клиентом и сервером или между почтовыми серверами. Использует SMTP-конверт и команду DATA.

**Пример применения:** Отправка письма и доставка его в чужой домен.

## Как это работает

1. **Защищённое соединение**
2. **EHLO и AUTH**
3. **Передача письма**
4. **MX-запись**
5. **Передача между серверами**
6. **Доставка**

## На что обратить внимание

SMTP отправляет почту; для чтения синхронизированного ящика обычно нужен IMAP или POP3.

## Связанные понятия

- [DNS](../02-application/dns.md) — Domain Name System.
- [POP3](../02-application/pop3.md) — Post Office Protocol version 3.
- [IMAP](../02-application/imap.md) — Internet Message Access Protocol.
- [TCP](../01-core/tcp.md) — Transmission Control Protocol.
- [TLS / SSL](../03-security/tls.md) — Transport Layer Security.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
