# SIP — Session Initiation Protocol

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: UDP / TCP / TLS

## Что это и для чего нужно

Сигнализация, которая устанавливает, изменяет и завершает IP-звонок. Сам звук обычно передаётся отдельным медиапротоколом RTP.

**Пример применения:** IP-телефония и корпоративные АТС.

## Как это работает

1. **Регистрация**
2. **INVITE**
3. **Ringing**
4. **200 OK и ACK**
5. **Голос по RTP**
6. **BYE**

## На что обратить внимание

SIP управляет вызовом, но сам не переносит голосовые сэмплы.

## Связанные понятия

- [UDP](../01-core/udp.md) — User Datagram Protocol.
- [TCP](../01-core/tcp.md) — Transmission Control Protocol.
- [WebRTC](../02-application/web-rtc.md) — Browser video calls.
- [RTSP](../02-application/rtsp.md) — Real Time Streaming Protocol.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
