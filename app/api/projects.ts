import projects from '@/db/projects.json'

// GET PROJECTS NAME FOR ASIDE MENU
export async function getProjectsNamesArray() {
    const { websites, codingProjects, apps, videos, art } = projects
    const allProjectsDataArray: any =  [...websites, ...codingProjects, ...apps, ...videos, ...art]
    const namesArrayData:any = []
    allProjectsDataArray.forEach((element: any) => {
        let {id, name, projectType} = element
        let newObject = {id, name, projectType}
        namesArrayData.push(newObject)
    });
    return {namesArrayData}
}

// GET PROJECTS
export async function getProjects(params:any) {
    const {websites, codingProjects, apps, videos, art} = projects
    const allProjectsDataArray: any = [...websites, ...codingProjects, ...apps, ...videos, ...art]
    const projectFound = await allProjectsDataArray.find((el: any) => el.id === params.project)
    const indexOfProject = await allProjectsDataArray.indexOf(projectFound)
    const previousProject = await allProjectsDataArray[indexOfProject-1]
    const nextProject = await allProjectsDataArray[indexOfProject+1]
    const lastArrayIndex = await allProjectsDataArray.length - 1
    const projectType = await projectFound.projectType
    const projectData = JSON.parse(JSON.stringify(projectFound))
    return  {allProjectsDataArray, projectData, projectFound, indexOfProject, previousProject, nextProject, lastArrayIndex, projectType} 
}


// GET ID OF NEXT AND PREVIOUS PROJECTS; FOR PAGINATION
export async function pageControl(previousProject:any, nextProject:any, lastArrayIndex:any, indexProject:any) {
    let idPreviousProject: boolean | null = null
      let idNextProject: boolean | null = null
      let isLastWebProject = false
  
      previousProject ? idPreviousProject = previousProject.id : idPreviousProject = null
      if (nextProject != undefined) {
          idNextProject = nextProject.id
      }
  
      // Is WebProject?
      let isWebProject = true
      if (indexProject > lastArrayIndex) {
          isWebProject = false
      }
      if (indexProject === lastArrayIndex) {
          isLastWebProject = true
      }
  
      return { idPreviousProject, idNextProject }
  }