# DHCP — Dynamic Host Configuration Protocol

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: UDP

## Что это и для чего нужно

Автоматически выдаёт устройству IP-конфигурацию: адрес, маску, шлюз, DNS-серверы и время аренды.

**Пример применения:** Подключение ноутбука к домашнему роутеру.

## Как это работает

1. **Нет адреса**
2. **Discover**
3. **Offer**
4. **Request**
5. **Acknowledge**
6. **Продление аренды**

## На что обратить внимание

В IPv6 настройки могут предоставляться через SLAAC или DHCPv6; DHCPv4 использует процесс DORA.

## Связанные понятия

- [IP](../01-core/ip.md) — Internet Protocol.
- [UDP](../01-core/udp.md) — User Datagram Protocol.
- [DNS](../02-application/dns.md) — Domain Name System.
- [IPv6](../01-core/ipv6.md) — Internet Protocol version 6.
- [Wi-Fi](../01-core/wifi.md) — Wireless LAN / WPA2 association.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
