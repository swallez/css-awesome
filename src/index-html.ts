export const htmlIndex = ({slides, title = 'A Title', key = 'index'}): string => {
    const body = slides.map(slide => `<a href="./${key}.html#${slide.id}">${slide.id}</a>`);
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="index.css">
</head>
<body class="index">  
  ${body.join('\n  ')}
</body>
</html>`
};