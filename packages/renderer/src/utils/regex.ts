export const UNIVERSAL_LINE_BREAKS_PATTERN = '\\r\\n|\\r|\\n'
export const UNIVERSAL_LINE_BREAKS_TEMPLATE = '\n'

// - Patterns

export const SCENE_HEADER_PATTERN =
  '(?<=\\n)(([iI][nN][tT]|[eE][xX][tT]|[^\\w][eE][sS][tT]|\\.|[iI]\\.?\\/[eE]\\.?)([^\\n]+))\\n'
export const ACTION_PATTERN = '([^<>]*?)(\\n{2}|\\n<)'
export const MULTI_LINE_ACTION_PATTERN =
  '\n{2}(([^a-z\\n:]+?[\\.\\?,\\s!\\*_]*?)\n{2}){1,2}'
export const CHARACTER_CUE_PATTERN =
  '(?<=\\n)([ \\t]*[^<>a-z\\s\\/\\n][^<>a-z:!\\?\\n]*[^<>a-z\\(!\\?:,\\n\\.][ \\t]?)\\n{1}(?!\\n)'
export const DIALOGUE_PATTERN =
  '(<(Character|Parenthetical)>[^<>\\n]+<\\/(Character|Parenthetical)>)([^<>]*?)(?=\\n{2}|\\n{1}<Parenthetical>)'
export const PARENTHETICAL_PATTERN = '(\\([^<>]*?\\)[\\s]?)\n'
export const TRANSITION_PATTERN =
  '\\n([\\*_]*([^<>\\na-z]*TO:|FADE TO BLACK\\.|FADE OUT\\.|CUT TO BLACK\\.)[\\*_]*)\\n'
export const FORCED_TRANSITION_PATTERN = '\\n((&gt;|>)\\s*[^<>\\n]+)\\n' // need to look for &gt; pattern because we run this regex against marked up content
export const FALSE_TRANSITION_PATTERN = '\\n((&gt;|>)\\s*[^<>\\n]+(&lt;\\s*))\\n' // need to look for &gt; pattern because we run this regex against marked up content
export const PAGE_BREAK_PATTERN = '(?<=\\n)(\\s*[\\=\\-\\_]{3,8}\\s*)\\n{1}'
export const CLEANUP_PATTERN = '<Action>\\s*<\\/Action>'
export const FIRST_LINE_ACTION_PATTERN = '^\\n\\n([^<>\\n#]*?)\\n'
export const SCENE_NUMBER_PATTERN = '(\\#([0-9A-Za-z\\.\\)-]+)\\#)'
export const SECTION_HEADER_PATTERN = '((#+)(\\s*[^\\n]*))\\n?'

// - Templates

export const SCENE_HEADER_TEMPLATE = '\n<Scene Heading>$1</Scene Heading>'
export const ACTION_TEMPLATE = '<Action>$1</Action>$2'
export const MULTI_LINE_ACTION_TEMPLATE = '\n<Action>$2</Action>'
export const CHARACTER_CUE_TEMPLATE = '<Character>$1</Character>'
export const DIALOGUE_TEMPLATE = '$1<Dialogue>$4</Dialogue>'
export const PARENTHETICAL_TEMPLATE = '<Parenthetical>$1</Parenthetical>'
export const TRANSITION_TEMPLATE = '\n<Transition>$1</Transition>'
export const FORCED_TRANSITION_TEMPLATE = '\n<Transition>$1</Transition>'
export const FALSE_TRANSITION_TEMPLATE = '\n<Action>$1</Action>'
export const PAGE_BREAK_TEMPLATE = '\n<Page Break></Page Break>\n'
export const CLEANUP_TEMPLATE = ''
export const FIRST_LINE_ACTION_TEMPLATE = '<Action>$1</Action>\n'
export const SECTION_HEADER_TEMPLATE = '<Section Heading>$1</Section Heading>'

// - Block Comments

export const BLOCK_COMMENT_PATTERN = '\\n\\/\\*([^<>]+?)\\*\\/\\n'
export const BRACKET_COMMENT_PATTERN = '\\n\\[{2}([^<>]+?)\\]{2}\\n'
export const SYNOPSIS_PATTERN = '\\n={1}([^<>=][^<>]+?)\\n' // we need to make sure we don't catch ==== as a synopsis

export const BLOCK_COMMENT_TEMPLATE = '\n<Boneyard>$1</Boneyard>\n'
export const BRACKET_COMMENT_TEMPLATE = '\n<Comment>$1</Comment>\n'
export const SYNOPSIS_TEMPLATE = '\n<Synopsis>$1</Synopsis>\n'

export const NEWLINE_REPLACEMENT = ''
export const NEWLINE_RESTORE = '\n'

// - Title Page

export const TITLE_PAGE_PATTERN = '^([^\\n]+:(([ \\t]*|\\n)[^\\n]+\\n)+)+\\n'
export const INLINE_DIRECTIVE_PATTERN =
  '^([\\w\\s&]+):\\s*([^\\s][\\w&,\\.\\?!:\\(\\)\\/\\s-©\\*\\_]+)$'
export const MULTI_LINE_DIRECTIVE_PATTERN = '^([\\w\\s&]+):\\s*$'
export const MULTI_LINE_DATA_PATTERN = '^([ ]{2,8}|\\t)([^<>]+)$'

// - Misc

export const DUAL_DIALOGUE_PATTERN = '\\^\\s*$'
export const CENTERED_TEXT_PATTERN = '^>[^<>\\n]+<'

// - Styling for FDX

export const BOLD_ITALIC_UNDERLINE_PATTERN =
  '(_\\*{3}|\\*{3}_)([^<>]+)(_\\*{3}|\\*{3}_)'
export const BOLD_ITALIC_PATTERN = '(\\*{3})([^<>]+)(\\*{3})'
export const BOLD_UNDERLINE_PATTERN = '(_\\*{2}|\\*{2}_)([^<>]+)(_\\*{2}|\\*{2}_)'
export const ITALIC_UNDERLINE_PATTERN = '(_\\*{1}|\\*{1}_)([^<>]+)(_\\*{1}|\\*{1}_)'
export const BOLD_PATTERN = '(\\*{2})([^<>]+)(\\*{2})'
export const ITALIC_PATTERN = '(?<!\\\\)(\\*{1})([^<>]+)(\\*{1})'
export const UNDERLINE_PATTERN = '(_)([^<>_]+)(_)'

// - Styling templates

export const BOLD_ITALIC_UNDERLINE_TEMPLATE = 'Bold+Italic+Underline'
export const BOLD_ITALIC_TEMPLATE = 'Bold+Italic'
export const BOLD_UNDERLINE_TEMPLATE = 'Bold+Underline'
export const ITALIC_UNDERLINE_TEMPLATE = 'Italic+Underline'
export const BOLD_TEMPLATE = 'Bold'
export const ITALIC_TEMPLATE = 'Italic'
export const UNDERLINE_TEMPLATE = 'Underline'
