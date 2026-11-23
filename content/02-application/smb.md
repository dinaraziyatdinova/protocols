# SMB — Server Message Block

> Категория: **Прикладные протоколы** · Уровень: 7 · Прикладной · Транспорт: TCP

## Что это и для чего нужно

Обеспечивает общий доступ к файлам, каталогам и принтерам в сети; современные версии поддерживают шифрование и подписи.

**Пример применения:** Сетевые папки Windows и NAS.

## Как это работает

1. **Соединение 445**
2. **NEGOTIATE**
3. **NTLM Challenge**
4. **NTLM Response**
5. **Подключение к ресурсу**
6. **Открытие файла**
7. **Чтение**
8. **Закрытие**

## На что обратить внимание

Не следует открывать TCP 445 в публичный интернет без серьёзных ограничений.

## Связанные понятия

- [TCP](../01-core/tcp.md) — Transmission Control Protocol.
- [Ethernet](../01-core/ethernet.md) — Ethernet frames and switches.
- [FTP](../02-application/ftp.md) — File Transfer Protocol.
- [IP](../01-core/ip.md) — Internet Protocol.

## Источники

- [Protocol Explorer — интерактивные уроки](https://protocol-explorer-alpha.vercel.app/)
- [RFC Editor — стандарты интернета](https://www.rfc-editor.org/)

[← К оглавлению](../../README.md)
