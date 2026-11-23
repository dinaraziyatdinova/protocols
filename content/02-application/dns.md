# DNS — Domain Name System

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: UDP / TCP

## Что это и для чего нужно

Преобразует доменные имена в записи разных типов: A, AAAA, MX и другие. Рекурсивный резолвер получает и кеширует ответы от DNS-серверов.

**Пример применения:** Поиск IP-адреса сайта и почтового сервера.

## Как это работает

1. **Обращение к резолверу**
2. **Корневой сервер**
3. **Сервер TLD**
4. **Авторитетный ответ**
5. **Кеширование**

## На что обратить внимание

DNS не всегда означает один запрос: результат может быть в кеше; обычный DNS не шифрует вопросы.

## Связанные понятия

- [IP](../01-core/ip.md) — Internet Protocol.
- [UDP](../01-core/udp.md) — User Datagram Protocol.
- [DNS over HTTPS](../03-security/doh.md) — Encrypted DNS transport.
- [DNSSEC](../03-security/dnssec.md) — DNS Security Extensions.
- [HTTP](../02-application/http.md) — Hypertext Transfer Protocol.
- [SMTP](../02-application/smtp.md) — Simple Mail Transfer Protocol.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
