import { DocumentGen } from 'contentlayer/core'
import * as fs from 'node:fs/promises'
import path from 'node:path'

export const contentDirPath = 'articles'

export const getLastUpdatedDate = async (doc: DocumentGen): Promise<Date> => {
	const stats = await fs.stat(
		path.join(contentDirPath, doc._raw.sourceFilePath)
	)
	return stats.mtime
}