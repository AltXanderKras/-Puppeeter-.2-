module.exports = {
  generateName(length) {
    let name = '';
    const chars = 'abcdefgABCDEFG1234567890';
    const charLength = chars.length;
    for (let i = 0; i < length; i++) {
      name += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return name;
  },
};