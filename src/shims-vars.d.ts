declare module '@/../custom/vars.js' {
  interface IApp {
    id: string
    name: string
    link: string
    icon?: string
  }
  interface IVar {
    name: string
    type: string
    apps: IApp[]
  }
  const data: IVar
  export default data
}
