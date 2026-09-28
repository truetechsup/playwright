# Playwright + Test IT + GitHub Actions

Пример автотестов на Playwright, которые запускаются из Test IT через GitHub Actions и отправляют результаты обратно в Test IT с помощью [testit-adapter-playwright](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-playwright).

**Проект в Test IT:** [team-0tm5.testit.software/projects/721/autotests](https://team-0tm5.testit.software/projects/721/autotests)

## Как это работает

1. Test IT отправляет webhook в GitHub — событие `repository_dispatch` с типом `run-tests`.
2. Запускается workflow [.github/workflows/.github-ci.yml](.github/workflows/.github-ci.yml).
3. Устанавливается последняя версия `testit-adapter-playwright`; при `adapter_mode=1` последняя версия `testit-cli` получает из прогона список тестов для запуска. Тесты выполняются через `npx playwright test`, результаты загружаются в Test IT.
4. К прогону в Test IT прикрепляется ссылка на пайплайн GitHub Actions (`actions/runs/<run_id>`).

### Режимы запуска

Режим задаётся полем `adapter_mode` в webhook.

| `adapter_mode` | Что происходит | Имя прогона |
|---|---|---|
| `1` | Запускаются только тесты из существующего прогона (фильтр через `testit-cli autotests_filter` → `npx playwright test --grep`), результаты пишутся в этот прогон, `test_run_id` берётся из webhook. Sync-storage запускается в workflow. | `GitHub Actions #<run_number> (adapterMode=1)` |
| `2` | Адаптер сам создаёт новый прогон, `test_run_id` не передаётся. | `GitHub Actions #<run_number> (adapterMode=2)` |

### Данные из webhook

```json
{
  "event_type": "run-tests",
  "client_payload": {
    "adapter_mode": "1",
    "url": "https://team-0tm5.testit.software",
    "project_id": "<id проекта>",
    "configuration_id": ["<id конфигурации>"],
    "test_run_id": "<id прогона, только для adapter_mode=1>"
  }
}
```

### Секреты репозитория

| Секрет | Назначение |
|---|---|
| `TMS_PRIVATE_TOKEN` | Приватный токен пользователя Test IT |

## Структура проекта

* **.github/workflows/.github-ci.yml** – workflow запуска тестов по webhook из Test IT
* **tests/** – тесты
    * **annotations.test.ts** – примеры [аннотаций testit-adapter-playwright (→ github.com)](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-playwright#methods)
    * **methods.test.ts** – примеры [методов testit-adapter-playwright (→ github.com)](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-playwright#methods)
    * **steps.test.ts** – примеры [шагов testit-adapter-playwright (→ github.com)](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-playwright#methods)
* **playwright.config.ts** – [конфигурация Playwright (→ playwright.dev)](https://playwright.dev/docs/test-configuration)
