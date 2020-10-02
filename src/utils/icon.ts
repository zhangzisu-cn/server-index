export function getFavicon (doc: Document): string | undefined {
  const nodeList = doc.getElementsByTagName('link')
  for (const node of nodeList) {
    if (node.getAttribute('rel') === 'icon' || node.getAttribute('rel') === 'shortcut icon') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return node.getAttribute('href')!
    }
  }
}
