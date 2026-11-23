# QUIC — QUIC transport for HTTP/3

> Категория: **Прикладные протоколы** · Уровень: Транспорт над UDP · Транспорт: UDP

## Что это и для чего нужно

Современный транспорт поверх UDP, включающий криптографическую защиту на основе TLS 1.3, потоки и контроль доставки. Веб часто использует его с HTTP/3.

**Пример применения:** Ускорение веб-соединений на нестабильных сетях.

## Как это работает

1. **Выбор HTTP/3**
2. **Initial + ClientHello**
3. **ServerHello и сертификат**
4. **Finished и запрос**
5. **Ответ в потоке**
6. **Переход между сетями**

## На что обратить внимание

QUIC не равен UDP: над UDP он реализует собственную надёжность и управление потоками.

## Связанные понятия

- [UDP](../01-core/udp.md) — User Datagram Protocol.
- [TCP](../01-core/tcp.md) — Transmission Control Protocol.
- [HTTPS](../03-security/https.md) — HTTP Secure.
- [TLS / SSL](../03-security/tls.md) — Transport Layer Security.
- [HTTP](../02-application/http.md) — Hypertext Transfer Protocol.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
