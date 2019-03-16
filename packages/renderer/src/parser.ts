import { Line } from './line'
import { FNTElement } from './element'

/**
 * Takes a string of text and creates a JSON object
 * representing this text, suitable to be passed to other renderers.
 * @param input String of fountain-compliant input text
 */
export const parseToAST = (input: string): string => {
  let output = ''
  // create array of lines
  const lines = input.split(/\n/).map(t => new Line(t))

  // iterate over the lines and break them up by element

  return output
}
