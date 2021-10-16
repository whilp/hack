import { extension } from "extension.ts";

import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts";

Deno.test({
  name: "hello world #1",
  fn: () => {
    assertEquals(extension(), 3);
  },
});
