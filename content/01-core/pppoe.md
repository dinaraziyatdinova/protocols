# PPPoE — Point-to-Point Protocol over Ethernet

> Категория: **Сетевые основы** · Уровень: 2 · Канальный · Транспорт: Ethernet

## Что это и для чего нужно

Инкапсулирует PPP в Ethernet и позволяет провайдеру создать пользовательскую сессию с аутентификацией.

**Пример применения:** Проводной домашний интернет у провайдера.

## Как это работает

1. **Поиск сервера**
2. **Создание сессии**
3. **Настройка LCP**
4. **Аутентификация**
5. **Получение адреса IPCP**
6. **Передача IP**

## На что обратить внимание

PPPoE добавляет служебные байты, что влияет на доступный MTU.

## Связанные понятия

- [Ethernet](../01-core/ethernet.md) — Ethernet frames and switches.
- [IP](../01-core/ip.md) — Internet Protocol.
- [DHCP](../02-application/dhcp.md) — Dynamic Host Configuration Protocol.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
