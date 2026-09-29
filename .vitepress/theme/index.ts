// Default theme extension point — left as a passthrough for now.
// Override or extend layout slots, register custom components, etc. here
// only when a need actually arises (e.g. adding a custom Layout.vue).
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default{
    extends: DefaultTheme
}
