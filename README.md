# French Verb Atelier

[简体中文说明](README_ch.md)

A static French conjugation worksheet and practice tool for A1-A2 learners.

The application supports regular `-ER`, `-IR`, and `-RE` verbs, multiple French tenses, compound-tense practice, answer grading, correction previews, and browser printing.

## Features

- Predefined A1-A2 verb list
- Common irregular verbs including `avoir`, `être`, `aller`, `faire`, `devoir`, `venir`, `vouloir`, `tenir`, `falloir`, and `pleuvoir`
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

