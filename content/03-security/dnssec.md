# DNSSEC — DNS Security Extensions

> Категория: **Защита и безопасность** · Уровень: 7 · Прикладной · Транспорт: DNS

## Что это и для чего нужно

Добавляет цифровые подписи DNS-записей и цепочку доверия от корня до дочерних зон. Позволяет проверять подлинность данных DNS.

**Пример применения:** Защита от подмены ответа в настроенной цепочке доверия.

## Как это работает

1. **DNS-вопрос**
2. **Подписанный ответ RRSIG**
3. **Ключи DNSKEY**
4. **Ссылка DS**
5. **Цепочка до корня**
6. **Проверенный ответ**

## На что обратить внимание

DNSSEC не шифрует DNS-трафик и не скрывает имена.

## Связанные понятия

- [DNS](../02-application/dns.md) — Domain Name System.
- [DNS over HTTPS](../03-security/doh.md) — Encrypted DNS transport.
- [TLS / SSL](../03-security/tls.md) — Transport Layer Security.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
