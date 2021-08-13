import { Colors } from './';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  screenOverlay: {
    flex: 1,
    backgroundColor: Colors.shadow,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default ApplicationStyles;
