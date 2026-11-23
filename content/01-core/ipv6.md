# IPv6 — Internet Protocol version 6

> Категория: **Сетевые основы** · Уровень: 3 · Сетевой · Транспорт: Канальный уровень

## Что это и для чего нужно

Версия IP с 128-битными адресами, Neighbor Discovery и поддержкой автоматической настройки адресов через SLAAC.

**Пример применения:** Адресация устройств без ограничений небольшого пространства IPv4.

## Как это работает

1. **Link-local адрес**
2. **Поиск маршрутизатора**
3. **Router Advertisement**
4. **Глобальный адрес**
5. **Поиск соседей**
6. **Работа в сети**

## На что обратить внимание

SLAAC не исключает DHCPv6, а NAT не является обязательным условием работы IPv6.

## Связанные понятия

- [IP](../01-core/ip.md) — Internet Protocol.
- [Ethernet](../01-core/ethernet.md) — Ethernet frames and switches.
- [DHCP](../02-application/dhcp.md) — Dynamic Host Configuration Protocol.
- [ICMP](../01-core/icmp.md) — Internet Control Message Protocol.
- [BGP](../01-core/bgp.md) — Border Gateway Protocol.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
