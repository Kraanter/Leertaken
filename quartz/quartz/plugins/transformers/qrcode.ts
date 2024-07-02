import { QuartzTransformerPlugin } from "../types"

export const QRCode: QuartzTransformerPlugin = () => {
  return {
    name: "QrCode",
    markdownPlugins() {
      return [() => {
        return (tree, { data }) => {
          console.log(data)
          if (data?.frontmatter?.isLeertaak) {
            console.log("isLeertaak", data.filePath)
            tree.children.push({
              type: "html",
              value: `<div class='graph'>
              <afteken-component opdracht="${data.filePath.replace(".md", "")}"></afteken-component>
              </div>`
            })
          }
        }
      }]
    },
  }
}
