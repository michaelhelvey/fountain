const UNIVERSAL_LINE_BREAKS_PATTERN = '\\r\\n|\\r|\\n'
const UNIVERSAL_LINE_BREAKS_TEMPLATE = '\n'

// - Patterns

const SCENE_HEADER_PATTERN =
  '(?<=\\n)(([iI][nN][tT]|[eE][xX][tT]|[^\\w][eE][sS][tT]|\\.|[iI]\\.?\\/[eE]\\.?)([^\\n]+))\\n'
const ACTION_PATTERN = '([^<>]*?)(\\n{2}|\\n<)'
const MULTI_LINE_ACTION_PATTERN =
  '\n{2}(([^a-z\\n:]+?[\\.\\?,\\s!\\*_]*?)\n{2}){1,2}'
const CHARACTER_CUE_PATTERN =
  '(?<=\\n)([ \\t]*[^<>a-z\\s\\/\\n][^<>a-z:!\\?\\n]*[^<>a-z\\(!\\?:,\\n\\.][ \\t]?)\\n{1}(?!\\n)'
const DIALOGUE_PATTERN =
  '(<(Character|Parenthetical)>[^<>\\n]+<\\/(Character|Parenthetical)>)([^<>]*?)(?=\\n{2}|\\n{1}<Parenthetical>)'
const PARENTHETICAL_PATTERN = '(\\([^<>]*?\\)[\\s]?)\n'
const TRANSITION_PATTERN =
  '\\n([\\*_]*([^<>\\na-z]*TO:|FADE TO BLACK\\.|FADE OUT\\.|CUT TO BLACK\\.)[\\*_]*)\\n'
const FORCED_TRANSITION_PATTERN = '\\n((&gt;|>)\\s*[^<>\\n]+)\\n' // need to look for &gt; pattern because we run this regex against marked up content
const FALSE_TRANSITION_PATTERN = '\\n((&gt;|>)\\s*[^<>\\n]+(&lt;\\s*))\\n' // need to look for &gt; pattern because we run this regex against marked up content
const PAGE_BREAK_PATTERN = '(?<=\\n)(\\s*[\\=\\-\\_]{3,8}\\s*)\\n{1}'
const CLEANUP_PATTERN = '<Action>\\s*<\\/Action>'
const FIRST_LINE_ACTION_PATTERN = '^\\n\\n([^<>\\n#]*?)\\n'
const SCENE_NUMBER_PATTERN = '(\\#([0-9A-Za-z\\.\\)-]+)\\#)'
const SECTION_HEADER_PATTERN = '((#+)(\\s*[^\\n]*))\\n?'

// - Templates

const SCENE_HEADER_TEMPLATE = '\n<Scene Heading>$1</Scene Heading>'
const ACTION_TEMPLATE = '<Action>$1</Action>$2'
const MULTI_LINE_ACTION_TEMPLATE = '\n<Action>$2</Action>'
const CHARACTER_CUE_TEMPLATE = '<Character>$1</Character>'
const DIALOGUE_TEMPLATE = '$1<Dialogue>$4</Dialogue>'
const PARENTHETICAL_TEMPLATE = '<Parenthetical>$1</Parenthetical>'
const TRANSITION_TEMPLATE = '\n<Transition>$1</Transition>'
const FORCED_TRANSITION_TEMPLATE = '\n<Transition>$1</Transition>'
const FALSE_TRANSITION_TEMPLATE = '\n<Action>$1</Action>'
const PAGE_BREAK_TEMPLATE = '\n<Page Break></Page Break>\n'
const CLEANUP_TEMPLATE = ''
const FIRST_LINE_ACTION_TEMPLATE = '<Action>$1</Action>\n'
const SECTION_HEADER_TEMPLATE = '<Section Heading>$1</Section Heading>'

// - Block Comments

const BLOCK_COMMENT_PATTERN = '\\n\\/\\*([^<>]+?)\\*\\/\\n'
const BRACKET_COMMENT_PATTERN = '\\n\\[{2}([^<>]+?)\\]{2}\\n'
const SYNOPSIS_PATTERN = '\\n={1}([^<>=][^<>]+?)\\n' // we need to make sure we don't catch ==== as a synopsis

const BLOCK_COMMENT_TEMPLATE = '\n<Boneyard>$1</Boneyard>\n'
const BRACKET_COMMENT_TEMPLATE = '\n<Comment>$1</Comment>\n'
const SYNOPSIS_TEMPLATE = '\n<Synopsis>$1</Synopsis>\n'

const NEWLINE_REPLACEMENT = ''
const NEWLINE_RESTORE = '\n'

// - Title Page

const TITLE_PAGE_PATTERN = '^([^\\n]+:(([ \\t]*|\\n)[^\\n]+\\n)+)+\\n'
const INLINE_DIRECTIVE_PATTERN =
  '^([\\w\\s&]+):\\s*([^\\s][\\w&,\\.\\?!:\\(\\)\\/\\s-©\\*\\_]+)$'
const MULTI_LINE_DIRECTIVE_PATTERN = '^([\\w\\s&]+):\\s*$'
const MULTI_LINE_DATA_PATTERN = '^([ ]{2,8}|\\t)([^<>]+)$'

// - Misc

const DUAL_DIALOGUE_PATTERN = '\\^\\s*$'
const CENTERED_TEXT_PATTERN = '^>[^<>\\n]+<'

// - Styling for FDX

const BOLD_ITALIC_UNDERLINE_PATTERN =
  '(_\\*{3}|\\*{3}_)([^<>]+)(_\\*{3}|\\*{3}_)'
const BOLD_ITALIC_PATTERN = '(\\*{3})([^<>]+)(\\*{3})'
const BOLD_UNDERLINE_PATTERN = '(_\\*{2}|\\*{2}_)([^<>]+)(_\\*{2}|\\*{2}_)'
const ITALIC_UNDERLINE_PATTERN = '(_\\*{1}|\\*{1}_)([^<>]+)(_\\*{1}|\\*{1}_)'
const BOLD_PATTERN = '(\\*{2})([^<>]+)(\\*{2})'
const ITALIC_PATTERN = '(?<!\\\\)(\\*{1})([^<>]+)(\\*{1})'
const UNDERLINE_PATTERN = '(_)([^<>_]+)(_)'

// - Styling templates

const BOLD_ITALIC_UNDERLINE_TEMPLATE = 'Bold+Italic+Underline'
const BOLD_ITALIC_TEMPLATE = 'Bold+Italic'
const BOLD_UNDERLINE_TEMPLATE = 'Bold+Underline'
const ITALIC_UNDERLINE_TEMPLATE = 'Italic+Underline'
const BOLD_TEMPLATE = 'Bold'
const ITALIC_TEMPLATE = 'Italic'
const UNDERLINE_TEMPLATE = 'Underline'
