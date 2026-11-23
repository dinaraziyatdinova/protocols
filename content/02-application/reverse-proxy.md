# Reverse Proxy — TLS offloading and application gateway

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: HTTP / HTTPS

## Что это и для чего нужно

Принимает запросы перед внутренним сервером. Может балансировать нагрузку, завершать TLS и передавать запрос дальше.

**Пример применения:** Публичный вход к нескольким веб-приложениям.

## Как это работает

1. **Входная точка**
2. **Завершение TLS**
3. **Передача к приложению**
4. **Ответ сервера**
5. **HTTPS к клиенту**
6. **Варианты шифрования**

## На что обратить внимание

Если TLS завершается на прокси, участок до приложения требует отдельной оценки защиты.

## Связанные понятия

- [HTTPS](../03-security/https.md) — HTTP Secure.
- [TLS / SSL](../03-security/tls.md) — Transport Layer Security.
- [HTTP](../02-application/http.md) — Hypertext Transfer Protocol.
- [HTTP Proxy](../02-application/http-proxy.md) — Forward proxy and CONNECT.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
