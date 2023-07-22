import React from 'react'
import TextTitle from './TextTitle'
import ProjectsButton from './ProjectsButton'

interface Props {
  name: String,
  nameES: String,
  idPreviousProject: String | boolean | null,
  idNextProject: String | boolean | null
}

function Title({ name, nameES, idPreviousProject, idNextProject }: Props) {


  return (
    <div className="flex justify-between items-center  border-b-[1px] border-spacing-2 border-timberwolf dark:border-b-timberwolf !border-opacity-30 pb-3 mb-6">
      <ProjectsButton />
      <TextTitle name={name} nameES={nameES} />
    </div>
  )
}

export default Title