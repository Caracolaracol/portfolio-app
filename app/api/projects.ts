import projects from '@/db/projects.json'

export async function getProjectsDataArray() {
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