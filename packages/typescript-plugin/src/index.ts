import { createLanguageServicePlugin } from '@volar/typescript/lib/quickstart/createLanguageServicePlugin'
import { getLanguagePlugin } from 'ts-macro'

const plugin = createLanguageServicePlugin((ts, info) => {
  return {
    languagePlugins: [
      getLanguagePlugin(
        ts,
        info.project.getCurrentDirectory(),
        info.languageServiceHost.getCompilationSettings(),
      ) as any,
    ],
  }
})

export = plugin
