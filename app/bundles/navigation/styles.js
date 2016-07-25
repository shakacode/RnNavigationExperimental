import { StyleSheet } from 'react-native';

const TAB_BACKGROUND_COLOR = '#fff';
const TAB_TEXT_COLOR = '#222';
const TAB_SELECTED_TEXT_COLOR = 'blue';

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  navigatorCardStack: {
    flex: 20,
  },
  scrollView: {
    marginTop: 64,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
  },
  tab: {
    alignItems: 'center',
    backgroundColor: TAB_BACKGROUND_COLOR,
    flex: 1,
    justifyContent: 'center',
  },
  tabText: {
    color: TAB_TEXT_COLOR,
    fontWeight: '500',
  },
  tabSelected: {
    color: TAB_SELECTED_TEXT_COLOR,
  },
});

export default styles;
