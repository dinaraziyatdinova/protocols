# HTTP Proxy — Forward proxy and CONNECT

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: TCP

## Что это и для чего нужно

Посредник, который отправляет запросы от имени клиента. Для HTTPS обычно создаёт туннель методом CONNECT.

**Пример применения:** Корпоративный выход в веб через контролируемую точку.

## Как это работает

1. **Настройка прокси**
2. **TCP до прокси**
3. **Запрос с абсолютным URL**
4. **Прокси обращается к серверу**
5. **Возврат страницы**
6. **CONNECT**
7. **Шифрованный туннель**

## На что обратить внимание

Обычный HTTPS CONNECT без перехвата TLS не раскрывает прокси содержимое защищённого запроса.

## Связанные понятия

- [HTTP](../02-application/http.md) — Hypertext Transfer Protocol.
- [HTTPS](../03-security/https.md) — HTTP Secure.
- [SOCKS5](../02-application/socks5.md) — Socket Secure proxy.
- [Reverse Proxy](../02-application/reverse-proxy.md) — TLS offloading and application gateway.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
