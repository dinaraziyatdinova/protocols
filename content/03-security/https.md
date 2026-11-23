# HTTPS — HTTP Secure

> Категория: **Защита и безопасность** · Уровень: 7 + TLS · Транспорт: TCP / QUIC

## Что это и для чего нужно

HTTP, защищённый шифрованием и проверкой подлинности сервера. Для HTTP/1.1 или HTTP/2 обычно используется TLS поверх TCP; для HTTP/3 — QUIC.

**Пример применения:** Безопасный доступ к сайтам, личным кабинетам и API.

## Как это работает

1. **Безопасный запрос**
2. **Поиск DNS**
3. **Соединение**
4. **Рукопожатие TLS**
5. **Шифрованный обмен**
6. **Отображение страницы**

## На что обратить внимание

Значок замка не гарантирует честность самого сайта. DNS-запросы и адрес сервера могут быть видны отдельно.

## Связанные понятия

- [HTTP](../02-application/http.md) — Hypertext Transfer Protocol.
- [TLS / SSL](../03-security/tls.md) — Transport Layer Security.
- [DNS](../02-application/dns.md) — Domain Name System.
- [QUIC](../02-application/quic.md) — QUIC transport for HTTP/3.
- [Reverse Proxy](../02-application/reverse-proxy.md) — TLS offloading and application gateway.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
