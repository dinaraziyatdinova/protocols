# RTSP — Real Time Streaming Protocol

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: TCP; медиа RTP/UDP

## Что это и для чего нужно

Протокол управления потоком: команды вроде DESCRIBE, SETUP, PLAY и TEARDOWN задают состояние сессии.

**Пример применения:** Просмотр камер видеонаблюдения.

## Как это работает

1. **OPTIONS**
2. **DESCRIBE**
3. **SETUP**
4. **PLAY**
5. **Видео по RTP**
6. **TEARDOWN**

## На что обратить внимание

RTSP управляет воспроизведением; пакеты медиа обычно идут отдельно.

## Связанные понятия

- [RTMP](../02-application/rtmp.md) — Real-Time Messaging Protocol.
- [SIP](../02-application/sip.md) — Session Initiation Protocol.
- [UDP](../01-core/udp.md) — User Datagram Protocol.
- [TCP](../01-core/tcp.md) — Transmission Control Protocol.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
