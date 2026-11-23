# IPsec — IKEv2 and ESP

> Категория: **Защита и безопасность** · Уровень: 3 · Сетевой · Транспорт: IP / UDP для IKE

## Что это и для чего нужно

Набор механизмов защиты IP-трафика. IKEv2 согласует ключи, ESP защищает передаваемые пакеты.

**Пример применения:** Сеть–сеть VPN между офисами.

## Как это работает

1. **IKE_SA_INIT**
2. **NAT-T**
3. **IKE_AUTH**
4. **Шифрование ESP**
5. **Обратный маршрут**
6. **Сравнение VPN**

## На что обратить внимание

В зависимости от настройки используется транспортный или туннельный режим; NAT-T часто переводит обмен на UDP 4500.

## Связанные понятия

- [IP](../01-core/ip.md) — Internet Protocol.
- [WireGuard](../03-security/wireguard.md) — Modern VPN tunnelling.
- [UDP](../01-core/udp.md) — User Datagram Protocol.
- [TLS / SSL](../03-security/tls.md) — Transport Layer Security.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
