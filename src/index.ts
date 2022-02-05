import { getSelectedText, pasteText, showHUD } from "@raycast/api";

export default async function main() {
  try {
    const text = await getSelectedText();
    const matchedText = text.match(/^!\[(.*)\]\((.*)\)$/);
    if (!matchedText) {
      await showHUD("No match text");
      return;
    }

    const [, altText, srcText] = matchedText;

    const tagText = `<img width="300" alt="${altText}" src="${srcText}" />`;
    await pasteText(tagText);
    await showHUD("Success!");
  } catch (e) {
    await showHUD("Failure");
  }
}
