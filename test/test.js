
import test from "ava";
import {fixture, window} from "../index";

test.beforeEach('setup fixture', fixture("./test/test.html"));

test("test example", t => {
  t.is(t.context.document.documentElement.querySelector("h1").textContent, "Hello Test");
});
