import * as RGX from './utils/regex'

export enum FNTElementType {
  SCENE_HEADING = 'SCENE_HEADING',
  ACTION = 'ACTION',
  CHARACTER = 'CHARACTER',
  DIALOGUE = 'DIALOGUE',
  PARENTHETICAL = 'PARENTHETICAL',
  DUAL_DIALOGUE = 'DUAL_DIALOGUE',
  LYRICS = 'LYRICS',
  TRANSITION = 'TRANSITION',
  CENTERED_TEXT = 'CENTERED_TEXT',
  TITLE_PAGE = 'TITLE_PAGE'
}
/**
 * elementTypeFromLines figures out what kind of element a line should be included in.
 * @param current The line currently being evaluated.
 * @param prev The line just before this line.  Needed for contextual interpretation of lines.
 */
export const elementTypeFromLines = (current: string, prev?: string) => {

}

