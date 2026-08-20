# French Verb Atelier

A static French conjugation worksheet and practice tool for A1-A2 learners.

The application supports regular `-ER`, `-IR`, and `-RE` verbs, multiple French tenses, compound-tense practice, answer grading, correction previews, and browser printing.

## Features

- Predefined A1-A2 verb list
- Manual verb input using commas, periods, semicolons, or new lines
- Recognition of known conjugated forms such as `parlez` → `parler`
- Présent, Passé composé, Imparfait, Plus-que-parfait, Futur proche, Futur simple, Conditionnel présent, and Subjonctif présent
- Selection-order or grouped `-ER / -IR / -RE` worksheets
- Persons-as-rows or tenses-as-rows table layouts
- Tense colors or person-column colors, with adjustable background contrast
- Strict or accent-insensitive grading
- Desktop-first worksheet layout with horizontal scrolling for wide tables
- Print and Save as PDF support

## Use locally

The app uses browser-only ES modules and does not require a backend, database, build step, external API, or runtime network connection.

From the project directory, start a local static server:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

Opening `index.html` directly may be blocked by some browsers because ES modules are loaded from local files. A local static server is recommended.

## Create a worksheet

1. Select predefined verbs. The order in which you select them is preserved.
2. Or enter verbs manually. Duplicate entries are removed while the first occurrence order is kept.
3. Select one or more tenses.
4. Choose the table orientation, verb organization, color behavior, compound auxiliary mode, and accent checking mode.
5. Select **Start practice**.

All settings are part of the same single-page application. No browser tabs or additional application pages are opened.

## Compound tenses

Compound tenses use one shared past participle input for the entire verb and tense block.

### Select auxiliary

1. Choose `avoir` or `être` once.
2. Enter the past participle once.
3. Select **Apply**.

The application generates the auxiliary forms for all six persons.

### Type auxiliary manually

1. Enter the conjugated auxiliary for each person: `ai`, `as`, `a`, `avons`, `avez`, or `ont`.
2. Enter the past participle once.
3. Select **Apply**.

The application combines each auxiliary with the shared past participle.

Apply updates only the current compound-tense block. Other tenses and answers are preserved.

## Practice and results

- Enter simple-tense answers directly in the table.
- Use **Apply** for each compound-tense block before submitting.
- Select **Submit answers** to grade the worksheet.
- Empty answers are shown as blank submissions followed by the expected answer.
- Select **Edit answers** on the result page to return to the editable practice view without losing answers.
- Use **Corrections** to preserve or replace mistakes.
- Use **Wrong answer** beside the correction control to preview strikethrough or red-text errors immediately.

Correct answers remain black. Accent-only differences accepted in accent-insensitive mode are shown with a red accent hint rather than as a normal spelling error.

## Print or save as PDF

After submitting:

1. Choose **Correct answers only** or **My answers + correct answers**.
2. Choose the wrong-answer preview style if needed.
3. Select **Print / Save PDF**.
4. In the browser print dialog, choose **Save as PDF**.

Print CSS hides configuration controls, editing controls, inputs, and buttons. Verb blocks, tables, corrections, and accent hints are retained. Wide worksheets use a landscape print layout and may span multiple pages.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. Open the repository's **Settings** page.
3. Open **Pages** under **Code and automation**.
4. Set the source to **Deploy from a branch**.
5. Select the branch containing the project and the `/ (root)` folder.
6. Save the settings and open the generated Pages URL.

The repository is already structured for root-level GitHub Pages deployment. No build command is required.

## Project structure

```text
index.html             Single-page application entry point
css/main.css           Screen layout and worksheet styles
css/print.css          Browser print and PDF styles
js/app.js              Application state, rendering, and event handling
js/data/               Verb, tense, and person data
js/conjugation/        Rule-based conjugation and French elision
js/exercise/           Exercise generation and grading
js/utils/              Input parsing and answer normalization
```

## Development checks

Run a syntax check for all JavaScript modules:

```sh
find js -name '*.js' -print0 | xargs -0 -n1 node --check
```

No package installation is required.

## 简体中文说明

French Verb Atelier 是一个面向 A1-A2 学习者的静态法语动词变位练习工具，支持直接部署到 GitHub Pages，也可以在本地静态服务器中运行。

### 本地运行

在项目目录执行：

```sh
python3 -m http.server 4173
```

然后在浏览器打开：

```text
http://localhost:4173/
```

应用使用浏览器原生 ES Modules，不需要后端、数据库、构建工具或外部 API。

### 创建练习

1. 在动词列表中选择一个或多个动词。点击顺序会被保留。
2. 也可以在手动输入框中输入动词或已知变位形式。支持逗号、句号、分号和换行分隔。
3. 选择一个或多个时态。
4. 使用下拉菜单设置表格方向、动词分组、颜色方式、复合时态辅助动词练习模式和重音检查方式。
5. 点击 **Start practice** 开始练习。

### 复合时态练习

每个动词和复合时态使用一个共享的过去分词输入框，不需要为六个人称重复输入过去分词。

**选择辅助动词模式：**

1. 选择 `avoir` 或 `être`。
2. 输入一次过去分词，例如 `parlé`。
3. 点击 **Apply**。

应用会自动生成六个人称的辅助动词形式。

**手动输入辅助动词模式：**

1. 分别输入 `ai`、`as`、`a`、`avons`、`avez`、`ont`。
2. 输入一次过去分词。
3. 点击 **Apply**。

Apply 只更新当前复合时态 block，不会清除其他时态的答案。

### 提交和批改

- 简单时态直接在表格中输入答案。
- 复合时态先点击对应 block 的 **Apply**。
- 点击 **Submit answers** 提交练习。
- 空白答案会显示为 `(blank) → 正确答案`。
- 在结果页点击 **Edit answers** 可以返回练习页面继续修改，原答案会保留。
- **Corrections** 可以选择保留错误或直接替换错误。
- **Wrong answer** 可以实时预览删除线或红色文字效果。

### 打印和保存 PDF

提交后：

1. 选择只打印正确答案，或打印自己的答案和正确答案。
2. 设置错误答案的显示方式。
3. 点击 **Print / Save PDF**。
4. 在浏览器打印对话框中选择 **Save as PDF**。

打印样式会隐藏配置、输入框和按钮，并保留动词、时态、答案、修正内容和重音提示。宽表格会使用横向打印布局，并可能跨越多页。

### GitHub Pages 部署

1. 将项目推送到 GitHub。
2. 打开仓库的 **Settings**。
3. 进入 **Pages**。
4. 选择 **Deploy from a branch**。
5. 选择包含项目的分支和 `/ (root)` 目录。
6. 保存后打开 GitHub Pages 提供的地址。

项目已经适合根目录 GitHub Pages 部署，不需要执行构建命令。
