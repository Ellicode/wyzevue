import VAlert from './VAlert.vue'
import VBadge from './VBadge.vue'
import VButton from './VButton.vue'
import VCheckbox from './VCheckbox.vue'
import VDatePicker from './VDatePicker.vue'
import VDropdown from './VDropdown.vue'
import VDropdownItem from './VDropdownItem.vue'
import VDropdownSeparator from './VDropdownSeparator.vue'
import VHeader from './VHeader.vue'
import VIconButton from './VIconButton.vue'
import VModal from './VModal.vue'
import VOTPField from './VOTPField.vue'
import VProgressBar from './VProgressBar.vue'
import VProgressRing from './VProgressRing.vue'
import VRadioButton from './VRadioButton.vue'
import VSelect from './VSelect.vue'
import VSidebar from './VSidebar.vue'
import VSidebarItem from './VSidebarItem.vue'
import VSidePanel from './VSidePanel.vue'
import VSpinner from './VSpinner.vue'
import VTextField from './VTextField.vue'
import VToolbar from './VToolbar.vue'
import VTooltip from './VTooltip.vue'

// Import all components

// Collect all components in an array
const components = [
  VAlert,
  VBadge,
  VButton,
  VCheckbox,
  VDatePicker,
  VDropdown,
  VDropdownItem,
  VDropdownSeparator,
  VHeader,
  VIconButton,
  VModal,
  VOTPField,
  VProgressBar,
  VProgressRing,
  VRadioButton,
  VSelect,
  VSidebar,
  VSidebarItem,
  VSidePanel,
  VSpinner,
  VTextField,
  VToolbar,
  VTooltip,
]

// Define the install method for the plugin
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// Export individual components for selective imports
export {
  VAlert,
  VBadge,
  VButton,
  VCheckbox,
  VDatePicker,
  VDropdown,
  VDropdownItem,
  VDropdownSeparator,
  VHeader,
  VIconButton,
  VModal,
  VOTPField,
  VProgressBar,
  VProgressRing,
  VRadioButton,
  VSelect,
  VSidebar,
  VSidebarItem,
  VSidePanel,
  VSpinner,
  VTextField,
  VToolbar,
  VTooltip,
}

// Export the plugin as the default export
export default { install }
