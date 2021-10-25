import ReactDOM from 'react-dom'

export interface RenderIntoBody {
  (element: any): Element
}

const renderIntoBody: RenderIntoBody = (element) => {
  const div: any = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(element, div)

  div.delete = (num?: number) => {
    if (!num || typeof num !== 'number') {
      return div.remove()
    }
    const t = setTimeout(() => {
      div.remove()
      clearTimeout(t)
    }, num)
  }

  return div
}

export default renderIntoBody