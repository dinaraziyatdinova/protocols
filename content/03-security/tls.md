# TLS / SSL — Transport Layer Security

> Категория: **Защита и безопасность** · Уровень: Защита между транспортом и приложением · Транспорт: TCP или внутри QUIC

## Что это и для чего нужно

Шифрует прикладные данные и аутентифицирует сервер посредством сертификата и криптографического рукопожатия. Современный вариант — TLS 1.3.

**Пример применения:** Защита HTTPS, IMAPS и иных приложений.

## Как это работает

1. **ClientHello**
2. **ServerHello**
3. **Сертификат**
4. **Finished**
5. **Шифрованные данные**
6. **Завершение**

## На что обратить внимание

SSL — устаревшее название; старые версии SSL использовать нельзя. TLS не скрывает факт соединения.

## Связанные понятия

- [HTTPS](../03-security/https.md) — HTTP Secure.
- [QUIC](../02-application/quic.md) — QUIC transport for HTTP/3.
- [SSH](../03-security/ssh.md) — Secure Shell.
- [DNS over HTTPS](../03-security/doh.md) — Encrypted DNS transport.
- [DNSSEC](../03-security/dnssec.md) — DNS Security Extensions.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
