class Parser {
  constructor() {
    this.heading = /^(#{1,6}\s+)/;
    this.blockQuote = /^(\>\s+)/;
    this.unorderedList = /^((\*|-){1}\s+)/;
    this.image = /\!\[(.*?)\]\((.*?)\)/g;
    this.strongText = /\*{2}(.*?)\*{2}/g;
    this.codeLine = /\`{1}(.*?)\`{1}/g;
    this.hr = /^-{3,}$/;
  }

  // 获取单行内容
  parseLineText(lineText) {
    this.lineText = lineText;
  }

  // 是否是空行
  isEmptyLine() {
    return this.lineText === "";
  }

  // 是否为符合标题规范
  isHeading() {
    return this.heading.test(this.lineText);
  }

  //判断是否为hr
  isHr() {
    return this.hr.test(this.lineText)
  }

  isBlockQuote() {
    return this.blockQuote.test(this.lineText)
  }

  isUnorderedList() {
    return this.unorderedList.test(this.lineText)
  }

  isImage(){
    return this.image.test(this.lineText)
  }

  isCodeLine(){
    return this.codeLine.test(this.lineText)
  }

  isStrongText(){
    return this.strongText.test(this.lineText)
  }
  // 解析标题
  parseHeading() {
    const temp = this.lineText.split(" ");
    const headingLevel = temp[0].length;
    const title = temp[1].trim();
    return `<h${headingLevel}>${title}</h${headingLevel}>`;
  }


  parseHr() {
    return `<hr />`
  }

  parseblockQuote() {
    const temp = this.lineText.split(" ");
    temp.shift()
    const tempContent = temp.join(" ")
    return `<blockquote>
                <p>${tempContent}</p>
            </blockquote>`
  }

  parseUnorderedList() {
    const temp = this.lineText.split(" ");
    temp.shift()
    const tempContent = temp.join(" ")
    return tempContent
  }


  parseImage(){
    const alt = this.lineText.split(']')[0].slice(2,)
    const src = this.lineText.split('(')[1].slice(0,-1)
    return `<img src="${src}" alt="${alt}"”/>`
  }

  parseCodeLine(){
    const content = this.lineText.split('`')
    return `<code>${content[1]}</code>`
  }

  parseStrongText(){
    const content = this.lineText.split('**')
    return `<b>${content[1]}</b>`
  }
}

class Reader {
  constructor(text) {
    //获取全部原始文本
    this.text = text;
    this.lines = this.getLines();
    this.parser = new Parser();
    this.unorderedList = []
    this.ifunorderedList = false
  }

  runParser() {
    let currentLine = 0;
    let hasParsed = [];


    while (!this.reachToEndLine(currentLine)) {
      // 获取行文本
      this.parser.parseLineText(this.getLineText(currentLine));

      // 判断空白行
      if (this.parser.isEmptyLine()) {
        currentLine++;
        continue;
      }

      if (this.parser.isHeading()) {
        hasParsed.push(this.parser.parseHeading());
        currentLine++;
        continue;
      }
      // TODO: 请完成剩余各种语法的解析
      if (this.parser.isHr()) {
        hasParsed.push(this.parser.parseHr());
        currentLine++;
        continue;
      }


      //
      if (this.parser.isBlockQuote()) {
        hasParsed.push(this.parser.parseblockQuote());
        currentLine++;
        continue;
      }

      //
      if (this.parser.isUnorderedList()) {
        this.ifunorderedList = true
        this.unorderedList.push(this.parser.parseUnorderedList())
      } else if (this.ifunorderedList) {
        const result = this.unorderedList.reduce((pre, item, index) => {
          if (index === 0) {
            return `<ul><li>${item}</li>`
          } else if (index === this.unorderedList - 1) {
            return pre + `<li>${item}</li></ul>`
          } else {
            return pre + `<li>${item}</li>`
          }
        }, '')
        hasParsed.push(result)
        this.ifunorderedList = false
      }


      if(this.parser.isImage()){
        hasParsed.push(this.parser.parseImage());
      }

      if(this.parser.isStrongText()){
        hasParsed.push(this.parser.parseStrongText());
      }

      
      if(this.parser.isCodeLine()){
        hasParsed.push(this.parser.parseCodeLine());
      }

      currentLine++;
    }
    return hasParsed.join("");
  }

  getLineText(lineNum) {
    return this.lines[lineNum];
  }

  getLines() {
    this.lines = this.text.split("\n");
    return this.lines;
  }

  reachToEndLine(line) {
    return line >= this.lines.length;
  }
}

module.exports = function parseMarkdown(markdownContent) {
  return new Reader(markdownContent).runParser();
};
