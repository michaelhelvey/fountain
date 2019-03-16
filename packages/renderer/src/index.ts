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

/* notes
  Basically, we want iterate over the input string, and with each line, 
  make a variety of decisions about it.  1) What kind of thing is it (based on regex
  and what came before it -- example, we might interpret something as Dialogue
  if the previous text was a character name).  2) Do we need record it as a new node
  (i.e. is this line a continuation of the dialogue from the previous section, or
  is it a different kind of element?).  
  
  Question: in order to do things like preserve
  whitespace and formatting, do we need to make each line its own element?  Not sure
  if preserving whitespace on output is really necessary to be spec-compliant

  Answer: "Fountain respects your line-by-line decision to single or double-space, taking 
  every carriage return as intentional."  Ok, so we need to preseve whitespace.  So each
  "element" will be broken up into "lines."  FNTElement = array of FNTLines.  The constitution
  of the array of lines is responsible for what points along the array we split into different
  elements based on regexes.
*/
