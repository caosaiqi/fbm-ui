#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { buildSync } = require('esbuild')
const excludeFiles = []
const getFiles = (paths, entryPoints = []) => {
    const strPaths = path.resolve(paths.join('/'))
    const files = fs.readdirSync(strPaths)
    for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const filePath = path.resolve(paths.concat(file).join('/'))
        const isDirectory = fs.lstatSync(filePath).isDirectory()
        if (isDirectory) {
            getFiles(paths.concat(file), entryPoints)
        } else {
            entryPoints.push(paths.concat(file).join('/'))
        }
    }
    return entryPoints
}

const entryPoints = getFiles(['./src'])

buildSync({

    /** 入口文件 */
    entryPoints,

    /** 输出到lib目录 */
    outdir: 'lib',

    /** 允许覆盖 */
    allowOverwrite: true,

    /** 压缩文件 */
    minify: true
})