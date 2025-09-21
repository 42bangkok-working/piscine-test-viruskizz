const { execSync } = require("child_process");
const fs = require("fs");
const path = require('path');
const filePath = path.join(__dirname, './index.js');

describe("cell00-ex00", () => {
  test("cell00-ex00 file index.js exists", () => {
    
    const exists = fs.existsSync(filePath);
    expect(exists).toBe(true);
  });
  test("cell00-ex00 prints Hello World", () => {
    const output = execSync(`node ${filePath}`).toString().trim();
    expect(output).toBe("Hello World");
  });
})