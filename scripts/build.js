"use strict"


const CSON = require("cson")
const fs = require("fs")
const plist = require("plist")


// TODO: check stuff about process.argv


CSON.parseCSONFile(process.argv[process.argv.length - 1], "utf8", (err, data) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(plist.build(data))
})

