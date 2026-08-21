# French Verb Atelier

French Verb Atelier 是一个面向 A1-A2 学习者的静态法语动词变位练习工具，支持直接部署到 GitHub Pages，也可以在本地静态服务器中运行。

[返回英文版 README](README.md)

## 功能

- 规则 `-ER`、`-IR`、`-RE` 动词
- 常用不规则动词：`avoir`、`être`、`aller`、`faire`、`devoir`、`venir`、`vouloir`、`tenir`、`falloir`、`pleuvoir`
- 支持 Présent、Passé composé、Imparfait、Plus-que-parfait、Futur proche、Futur simple、Conditionnel présent 和 Subjonctif présent
- 预定义动词选择和手动输入
- 识别已知变位形式，例如 `parlez` → `parler`
- 保留动词选择顺序，或按 `-ER / -IR / -RE` 分组
- Persons → rows 或 Tenses → rows 表格布局
- 可选择颜色跟随时态行或人称列，并调整背景对比度
- 严格或忽略重音的批改模式
- 浏览器打印和保存 PDF

## 本地运行

在项目目录执行：

```sh
python3 -m http.server 4173
```

然后打开：

```text
http://localhost:4173/
```

应用使用浏览器原生 ES Modules，不需要后端、数据库、构建工具或外部 API。

## 创建练习

1. 在动词列表中选择一个或多个动词。点击顺序会被保留。
2. 也可以输入动词或已知变位形式。支持逗号、句号、分号和换行分隔。
3. 选择一个或多个时态。
4. 使用下拉菜单设置表格方向、动词分组、颜色方式、复合时态辅助动词模式和重音检查方式。
5. 点击 **Start practice**。

## 复合时态

每个动词和复合时态使用一个共享的过去分词输入框，不需要为六个人称重复输入过去分词。

### 选择辅助动词

1. 选择 `avoir` 或 `être`。
2. 输入一次过去分词，例如 `parlé`。
3. 点击 **Apply**。

应用会自动生成六个人称的辅助动词形式。

### 手动输入辅助动词

1. 分别输入 `ai`、`as`、`a`、`avons`、`avez`、`ont`。
2. 输入一次过去分词。
3. 点击 **Apply**。

Apply 只更新当前复合时态 block，不会清除其他时态的答案。

## 提交和批改

- 简单时态直接在表格中输入答案。
- 复合时态先点击对应 block 的 **Apply**。
- 点击 **Submit answers** 提交练习。
- 空白答案会显示为 `(blank) → 正确答案`。
- 点击 **Edit answers** 返回练习页面继续修改，答案会保留。
- **Corrections** 可以选择保留错误或替换错误。
- **Wrong answer** 可以实时预览删除线或红色文字效果。

正确答案保持黑色。忽略重音模式下，只有重音不同的答案会显示红色重音提示，不会被视为普通拼写错误。

## 打印和保存 PDF

提交后：

1. 选择只打印正确答案，或打印自己的答案和正确答案。
2. 设置错误答案的显示方式。
3. 点击 **Print / Save PDF**。
4. 在浏览器打印对话框中选择 **Save as PDF**。

打印样式会隐藏配置、输入框和按钮，并保留动词、时态、答案、修正内容和重音提示。宽表格使用横向打印布局，并可能跨越多页。

## GitHub Pages 部署

1. 将项目推送到 GitHub。
2. 打开仓库的 **Settings**。
3. 进入 **Pages**。
4. 选择 **Deploy from a branch**。
5. 选择包含项目的分支和 `/ (root)` 目录。
6. 保存后打开 GitHub Pages 提供的地址。

项目已经适合根目录 GitHub Pages 部署，不需要构建命令。

## 开发检查

```sh
find js -name '*.js' -print0 | xargs -0 -n1 node --check
```

不需要安装 npm package。
