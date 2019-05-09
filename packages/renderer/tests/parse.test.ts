import { render, ExportFormat } from '../src'
import { FNTElementType } from '../src/element'
import { expect } from 'chai'

describe('Scene Heading', () => {
  const renderOptions = {
    format: ExportFormat.JSON,
  }
  it('detects simple screen heading', () => {
    expect(render("EXT. BRICK'S POOL - DAY", renderOptions)[0])
      .to.have.property('element-type')
      .that.equals(FNTElementType.SCENE_HEADING)
  })
})
