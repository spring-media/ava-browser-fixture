
import test from "ava";
import {Fixture, window} from "../index";


test.beforeEach('setup fixture', t => Fixture("./test/test.html", (document) => {
  t.context.document = document;
  t.context.window = window;
}));

test("test example", t => {
  t.is(t.context.document.documentElement.querySelector("h1").textContent, "Hello Test");
});