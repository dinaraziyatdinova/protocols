# DNS over HTTPS — Encrypted DNS transport

> Категория: **Защита и безопасность** · Уровень: 7 · Прикладной · Транспорт: HTTPS

## Что это и для чего нужно

Переносит DNS-запросы через защищённое HTTPS-соединение. Скрывает DNS-содержимое от наблюдателя на участке клиент—DoH-резолвер.

**Пример применения:** Приватные DNS-запросы из браузера.

## Как это работает

1. **Обычный DNS**
2. **Защищённое HTTPS-соединение**
3. **DNS-вопрос внутри HTTP**
4. **Защищённый ответ**
5. **Границы приватности**

## На что обратить внимание

DoH не скрывает DNS-вопросы от самого резолвера и не заменяет DNSSEC.

## Связанные понятия

- [DNS](../02-application/dns.md) — Domain Name System.
- [HTTPS](../03-security/https.md) — HTTP Secure.
- [TLS / SSL](../03-security/tls.md) — Transport Layer Security.
- [DNSSEC](../03-security/dnssec.md) — DNS Security Extensions.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
