#!/usr/bin/env node

import program from 'commander'
import * as fs from 'fs'
import * as fnt from '@fountain/renderer'

program
  .version('0.1.0')
  .option('-i, --input <str>', 'Input file')
  .action((cmd: any) => {
    const fileContents = fs.readFileSync(cmd.input)
    fnt.render(fileContents.toString(), {})
  })
  .parse(process.argv)
