import { h } from 'hyperapp'
import { terminalView } from '../terminal'
import { controlsView } from '../controls'
import styles from './styles.css'

export const appView = props =>
  h('main', { class: styles.app }, [    
    h('h1', { class: styles.appTitle }, [h('strong', {}, 'Ter'), 'minal', h('strong', {}, 'Pal'),'su']),
    h(
      'p',
      { class: styles.appTagline },
      'Penghasil terminal palsu beranimasi. Ekspor menjadi SVG atau HTML + CSS'
    ),
    h('div', { class: styles.exportContainer, oncreate: props.updateTerminalEl }, [h(terminalView, props)]),
    h(controlsView, props),
    h('div', { class: styles.appLinks }, [
      h('a', { href: 'https://twitter.com/heruhermawan', target: '_blank', rel: 'noopener' }, h('img', { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='64 64 896 896' focusable='false' data-icon='twitter' width='1em' height='1em' fill='currentColor' aria-hidden='true'%3E%3Cpath d='M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z'%3E%3C/path%3E%3C/svg%3E", alt:'@heruhermawan'})),
      h('br', {},'Ant Theme Aiyun'),
      h('small', {}, ['Warna tema & ikon terinspirasi dari ', h('a', { href: 'https://antdtheme.com/aliyun', target: '_blank', rel: 'noopener', style:'margin-left:0'},'Ant Theme Aliyun')])
    ])
  ])
