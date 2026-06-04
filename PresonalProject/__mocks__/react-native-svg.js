const React = require('react')
const { View } = require('react-native')

function MockSvg(props) {
  return React.createElement(View, props, props.children)
}

function MockCircle(props) {
  return React.createElement(View, props)
}

module.exports = {
  __esModule: true,
  default: MockSvg,
  Circle: MockCircle,
}
