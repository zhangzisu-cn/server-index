declare module "@/../custom/vars.js" {
  interface IServices {
    name: string
    link: string
    icon?: string
  }
  interface IVar {
    name: string
    type: string
    services: string
  }
  const data: IVar
  export default data
}