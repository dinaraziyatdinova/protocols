# ICMP — Internet Control Message Protocol

> Категория: **Сетевые основы** · Уровень: 3 · Сетевой · Транспорт: Непосредственно через IP

## Что это и для чего нужно

Передаёт диагностические сообщения об ошибках и состоянии маршрута. На ICMP основаны ping и некоторые варианты traceroute.

**Пример применения:** Проверка доступности узла и проблем на маршруте.

## Как это работает

1. **Echo Request**
2. **Echo Reply**
3. **TTL 1**
4. **TTL 2**
5. **Traceroute**
6. **Недоступный узел**

## На что обратить внимание

ICMP может фильтроваться; отсутствие ответа на ping не доказывает недоступность сервиса.

## Связанные понятия

- [IP](../01-core/ip.md) — Internet Protocol.
- [IPv6](../01-core/ipv6.md) — Internet Protocol version 6.
- [BGP](../01-core/bgp.md) — Border Gateway Protocol.
- [UDP](../01-core/udp.md) — User Datagram Protocol.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
