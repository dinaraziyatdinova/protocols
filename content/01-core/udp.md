# UDP — User Datagram Protocol

> Категория: **Сетевые основы** · Уровень: 4 · Транспортный · Транспорт: IP

## Что это и для чего нужно

Передаёт отдельные датаграммы без установления соединения и без встроенных гарантий доставки, порядка или повторной передачи.

**Пример применения:** Голосовая связь, DNS, QUIC и онлайн-игры.

## Как это работает

1. **Отправка без рукопожатия**
2. **Поток датаграмм**
3. **Потеря пакета**
4. **Ответные сообщения**
5. **Решение приложения**

## На что обратить внимание

Отсутствие гарантий UDP не означает, что приложение не может добавить собственную надёжность.

## Связанные понятия

- [TCP](../01-core/tcp.md) — Transmission Control Protocol.
- [IP](../01-core/ip.md) — Internet Protocol.
- [DNS](../02-application/dns.md) — Domain Name System.
- [QUIC](../02-application/quic.md) — QUIC transport for HTTP/3.
- [WebRTC](../02-application/web-rtc.md) — Browser video calls.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
