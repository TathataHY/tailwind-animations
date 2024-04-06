import { generatePluginCSS } from "./utils.js";
import { describe, it, expect } from "vitest";

describe("tailwindcss-animations plugin", () => {
  it("use a predefined animation", async () => {
    const css = await generatePluginCSS({
      content: `<div class="animate-zoom-in">Hello</div>`,
    });

    expect(css).toMatch(
      "@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out}"
    );
  });

  it("use a predefined animation delay", async () => {
    const css = await generatePluginCSS({
      content: `<div class="animate-delay-1000">Hello</div>`,
    });

    expect(css).toMatch(".animate-delay-1000{animation-delay:1s}");
  });

  it("use a custom animation delay", async () => {
    const css = await generatePluginCSS({
      content: `<div class="animate-delay-[1000ms]">Hello</div>`,
    });

    expect(css).toMatch(".animate-delay-\\[1000ms\\]{animation-delay:1000ms}");
  });

  it("use a predefined animation duration", async () => {
    const css = await generatePluginCSS({
      content: `<div class="animate-duration-1000">Hello</div>`,
    });

    expect(css).toMatch(".animate-duration-1000{animation-duration:1s}");
  });

  it("use a custom animation duration", async () => {
    const css = await generatePluginCSS({
      content: `<div class="animate-duration-[1000ms]">Hello</div>`,
    });

    expect(css).toMatch(
      ".animate-duration-\\[1000ms\\]{animation-duration:1000ms}"
    );
  });

  it("use a named animation duration", async () => {
    const css = await generatePluginCSS({
      content: `<div class="animate-duration-normal">Hello</div>`,
    });

    expect(css).toMatch(".animate-duration-normal{animation-duration:3s}");
  });

  it("use a timing function animation", async () => {
    const css = await generatePluginCSS({
      content: `<div class="animate-step-start">Hello</div>`,
    });

    expect(css).toMatch(
      ".animate-step-start{animation-timing-function:steps(1, start)}"
    );
  });
});
