// test/indexTest.js
const chai = require("chai");
const spies = require("chai-spies");
global.fetch = require("node-fetch");
chai.use(spies);
const expect = chai.expect;

const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("Fetch Lab", () => {
  let window, document, fetchBooks, renderBooks;

  before(() => {
    const html = fs.readFileSync("index.html", "utf8");
    const dom = new JSDOM(html, { runScripts: "dangerously" });
    window = dom.window;
    document = window.document;

    const scriptContent = fs.readFileSync("index.js", "utf8");
    const scriptEl = window.document.createElement("script");
    scriptEl.textContent = scriptContent;
    window.document.body.appendChild(scriptEl);

    fetchBooks = window.fetchBooks;
    renderBooks = window.renderBooks;
  });

  after(() => {
    delete global.fetch;
  });

  describe("fetchBooks()", () => {
    it("calls fetch with the correct URL", () => {
      const spy = chai.spy.on(global, "fetch", () => Promise.resolve({ json: () => [] }));
      fetchBooks();
      expect(spy).to.have.been.called.with("https://anapioficeandfire.com/api/books");
      chai.spy.restore(global);
    });

    it("returns a promise", () => {
      const result = fetchBooks();
      expect(result).to.be.an.instanceof(Promise);
    });
  });

  describe("renderBooks()", () => {
    it("renders book titles into the DOM", () => {
      const books = [
        { name: "A Game of Thrones" },
        { name: "A Clash of Kings" },
        { name: "A Storm of Swords" },
      ];

      renderBooks(books);
      const listItems = document.querySelectorAll("#book-list li");
      expect(listItems.length).to.equal(3);
      expect(listItems[0].textContent).to.include("A Game of Thrones");
    });
  });
});
