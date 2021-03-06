/**
 * resumeData formatter.
 * @module ic-formatter#resume
 */
module.exports = {
  /**
   * 格式化学历
   * @param {Number} key - 学历id
   * @returns {string} 格式化后的输出
   * @global
   */
  formatDegree: (key = 0) => {
    if (key > 99) {
      key = 99
    }
    const map = {
      0: '学历不限',
      1: '本科',
      2: '硕士',
      3: '博士',
      4: '专科',
      6: 'MBA',
      10: '博士后',
      86: '初中',
      87: '职高',
      89: '高中',
      90: '中专',
      91: '中技',
      92: '专升本',
      94: 'EMBA',
      95: 'MPA',
      99: '其他',
    }
    return map[key]
  },
  /**
   * @Description 转义 HTML 代码
   * @Param {String} str - 需要转义的HTML代码
   * @return {String} 转义后的字符串
   * @Date: 2018/12/19
   * @global
   */
  escapeHTML: str => {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
    }
    return str.replace(/[&<>]/g, o => escapeMap[o])
  },
  /**
   * @Description 截取字符串长度超过部分使用...显示
   * @Param {String} text - 需要截取的原字符串
   * @param {Number} [length=10] - 截取的长度
   * @return {String} 截取后的字符串
   * @Date: 2018/12/19
   */
  textEscape: (text, length = 10) => {
    if (text.length > length) {
      return text.substring(0, length) + '...'
    } else {
      return text
    }
  },
}
