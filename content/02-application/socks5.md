# SOCKS5 — Socket Secure proxy

> Категория: **Прикладные протоколы** · Уровень: 5 · Сеансовый (условно) · Транспорт: TCP / UDP relay

## Что это и для чего нужно

Универсальный прокси-протокол для соединений к произвольным адресам, а также пересылки UDP при поддержке соответствующего режима.

**Пример применения:** Проксирование клиентских приложений.

## Как это работает

1. **TCP к прокси**
2. **Приветствие и аутентификация**
3. **Назначение соединения**
4. **Пересылка в обе стороны**

## На что обратить внимание

SOCKS5 сам не шифрует передаваемые данные; безопасность зависит от вышестоящего протокола.

## Связанные понятия

- [HTTP Proxy](../02-application/http-proxy.md) — Forward proxy and CONNECT.
- [HTTPS](../03-security/https.md) — HTTP Secure.
- [TCP](../01-core/tcp.md) — Transmission Control Protocol.
- [UDP](../01-core/udp.md) — User Datagram Protocol.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
