type PDF = 'PDF'
type HTML = 'HTML'
type JSON = 'JSON' // raw ast

export type ExportFormat = PDF | HTML | JSON

export interface IRendererOptions {
  format?: ExportFormat
}

export const render = (input: string, options: IRendererOptions): String => {
  return input
}
