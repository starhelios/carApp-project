import { StyleSheet, Platform } from 'react-native'

import { colors, metrics } from 'theme'
let extraPadding = Platform.OS === 'ios' ? 20 : 0

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
    padding: metrics.contentMargin,
    paddingBottom: 32,
    paddingTop: metrics.contentMargin + extraPadding
  },

  slide: {
    flex: 1,
    alignItems: 'center'
  },
  imageContainer: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.45,
    marginTop: metrics.screenWidth * 0.1,
    padding: metrics.contentMargin,
    paddingTop: 0
  },
  previewImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  slideTitle: {
    fontFamily: 'SFProDisplay-Heavy',
    fontSize: 24,
    color: colors.red,
    marginBottom: 16
  },
  mainText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: colors.gray100
  },
  footer: {
    alignItems: 'center'
  },

  startButton: {
    marginBottom: 24,
    alignSelf: 'stretch'
  },

  signInButtonText: {
    color: colors.red
  }
})