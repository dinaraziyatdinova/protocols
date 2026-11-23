# RADIUS — Authentication for 802.1X access

> Категория: **Защита и безопасность** · Уровень: 7 · AAA · Транспорт: UDP (типично)

## Что это и для чего нужно

Централизует проверку доступа к сети и учёт сеансов. В корпоративном Wi-Fi часто работает вместе с 802.1X и EAP.

**Пример применения:** Wi-Fi с индивидуальными учётными записями сотрудников.

## Как это работает

1. **Запрос идентификатора**
2. **Запрос к RADIUS**
3. **EAP-TLS**
4. **Проверка клиента**
5. **Завершение EAP**
6. **Access-Accept**
7. **4-way handshake**
8. **Индивидуальный доступ**

## На что обратить внимание

EAP-TLS и RADIUS решают разные задачи: TLS защищает проверку, RADIUS переносит AAA-сообщения.

## Связанные понятия

- [Wi-Fi](../01-core/wifi.md) — Wireless LAN / WPA2 association.
- [WPA3](../03-security/wpa3.md) — Wi-Fi Protected Access 3.
- [TLS / SSL](../03-security/tls.md) — Transport Layer Security.
- [DHCP](../02-application/dhcp.md) — Dynamic Host Configuration Protocol.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
