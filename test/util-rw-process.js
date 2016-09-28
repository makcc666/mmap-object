'use strict'
const binary = require('node-pre-gyp')
const path = require('path')
const mmap_obj_path = binary.find(path.resolve(path.join(__dirname, '../package.json')))
const MmapObject = require(mmap_obj_path)

const filename = process.argv[2]
const obj = new MmapObject.Open(filename)

process.send('started')
process.on('message', function (msg) {
  console.log("PARENT SAYS: " + msg)
  switch (msg) {
    case 'read':
      console.log("BEFORE")
      process.send(obj['one'])
      console.log("AFTER")
      break
    case 'exit':
      process.exit()
  }
})
