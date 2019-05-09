import { FNTElementType } from './element'

export interface FNTJSONElement {
  'element-type': string
  lines: string[]
}

/**
 * Takes a string of text and creates a JSON object
 * representing this text, suitable to be passed to other renderers.
 * @param input String of fountain-compliant input text
 */
export const parseToJSON = (input: string): FNTJSONElement[] => {
  const output: FNTJSONElement[] = []

  // create array of lines
  const lines = input.split(/\n/)

  // iterate over the lines and break them up by element
  lines.forEach(line => {
    output.push({
      'element-type': FNTElementType.SCENE_HEADING,
      lines: [line],
    })
  })

  return output
}
