import React from 'react'
import { Dropzone, FileMosaic } from "@dropzone-ui/react";

function Dropzones() {
  return (
    <Dropzone onChange={updateFiles} value={files}>
    {files.map((file) => (
      <FileMosaic {...file} preview />
    ))}
  </Dropzone>
  )
}

export default Dropzones