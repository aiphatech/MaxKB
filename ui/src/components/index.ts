import { type App } from 'vue'
import AppIcon from './icons/AppIcon.vue'
import TextInput from './dynamics-form/items/TextInput.vue'
import PasswordInput from './dynamics-form/items/PasswordInput.vue'
import AppAvatar from './app-avatar/index.vue'
import LoginLayout from './login-layout/index.vue'
import LoginContainer from './login-container/index.vue'
import LayoutContainer from './layout-container/index.vue'
import TagsInput from './tags-input/index.vue'
import CardBox from './card-box/index.vue'
import CardAdd from './card-add/index.vue'
import BackButton from './back-button/index.vue'
import AppTable from './app-table/index.vue'
import ReadWrite from './read-write/index.vue'
import TagEllipsis from './tag-ellipsis/index.vue'
import CommonList from './common-list/index.vue'
import dynamicsForm from './dynamics-form'
import CardCheckbox from './card-checkbox/index.vue'
import AiChat from './ai-chat/index.vue'
import InfiniteScroll from './infinite-scroll/index.vue'
import AutoTooltip from './auto-tooltip/index.vue'
import MdEditor from './markdown/MdEditor.vue'
import MdPreview from './markdown/MdPreview.vue'
import MdEditorMagnify from './markdown/MdEditorMagnify.vue'
import LogoFull from './logo/LogoFull.vue'
import LogoIcon from './logo/LogoIcon.vue'
import SendIcon from './logo/SendIcon.vue'
import CodemirrorEditor from './codemirror-editor/index.vue'
import ModelSelect from './model-select/index.vue'

export default {
  install(app: App) {
    app.component('AppIcon', AppIcon)
    app.component('TextInput', TextInput)
    app.component('PasswordInput', PasswordInput)
    app.component('AppAvatar', AppAvatar)
    app.component('LoginLayout', LoginLayout)
    app.component('LoginContainer', LoginContainer)
    app.component('LayoutContainer', LayoutContainer)
    app.component('TagsInput', TagsInput)
    app.component('CardBox', CardBox)
    app.component('CardAdd', CardAdd)
    app.component('BackButton', BackButton)
    app.component('AppTable', AppTable)
    app.component('ReadWrite', ReadWrite)
    app.component('TagEllipsis', TagEllipsis)
    app.component('CommonList', CommonList)
    app.component('CardCheckbox', CardCheckbox)
    app.component('AiChat', AiChat)
    app.component('InfiniteScroll', InfiniteScroll)
    app.component('AutoTooltip', AutoTooltip)
    app.component('MdPreview', MdPreview)
    app.component('MdEditor', MdEditor)
    app.component('LogoFull', LogoFull)
    app.component('LogoIcon', LogoIcon)
    app.component('SendIcon', SendIcon)
    app.component('CodemirrorEditor', CodemirrorEditor)
    app.component('MdEditorMagnify', MdEditorMagnify)
    app.component('ModelSelect', ModelSelect)
  }
}
